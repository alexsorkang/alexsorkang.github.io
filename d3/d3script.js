// var bardata = [200,250,150,275, 175];
var bardata = [];
datasize = 1000;
for (var i = 0;i<datasize;i++) {
	bardata.push(Math.random()*1000)
}

var height = 300,
	width = 300;

// this makes the largest element the maximum
var yscale = d3.scale.linear()
		.domain([0, d3.max(bardata)])
		.range([0, height])

// creates bands relative to the size of data
var xscale = d3.scale.ordinal()
		.domain(d3.range(0,bardata.length))
		.rangeBands([0,width])

var colors = d3.scale.linear()
		.domain([0, bardata.length*.33,bardata.length*.66,bardata.length])
		.range(['#B58929','#C61C6F','#268BD2','#85992C'])

var bargraph = d3.select('#bargraph')
	.insert('svg')
		.attr('width', width)
		.attr('height', height)
	.selectAll('svg').data(bardata)
		.enter().append('rect')
			.style('fill', function(d,i) {
				return colors(i);
			})
			.attr('width', xscale.rangeBand())
			.attr('height', 0)
			.attr('x', function(d,i) {
				return xscale(i)
			})
			.attr('y', height)
	.on('mouseover', function(d) {
		tooltip.transition()
			.style('opacity', .9)
		tooltip.html(d)
		d3.select(this)
			.style('opacity', .5)
	})
	.on('mouseout', function(d) {
		d3.select(this)
			.style('opacity', 1)
	})

var tooltip = d3.select('#bargraph').insert('div')
		.style('position', 'absolute')
		.style('opacity', 0)

bargraph.transition()
	.attr('height', function(d) {
		return yscale(d)
	})
	.attr('y', function(d) {
		return height - yscale(d)
	})
	.delay(function(d,i) {
		return i*.2
	})






