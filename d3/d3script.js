// var bardata = [200,250,150,275, 175];


// d3.select('#chart')
// 	.append('svg')
// 		.attr('width', 300)
// 		.attr('height', 300)
// 		.style('background', '#dc322f')
// 	.selectAll('svg').data(bardata)
// 		.enter().append('rect')
// 			.style('fill', '#fdf6e3')
// 			.attr('width', 50)
// 			.attr('height', function(d){
// 				return d;
// 			})
// 			.attr('x', function(d,i) {
// 				return 8+(8+50)*i
// 			})
// 			.attr('y', function(d){
// 				return 300-d
// 			})
		
	// 	<svg width="300" height="300" style="background: #dc322f">
	// 	<circle cx="150" cy="150" r="50" style="fill: #fdf6e3" />
	// 	<text x="10" y="50" font-family="Roboto Condensed" fill="#fdf6e3">what</text> 
	// </svg>