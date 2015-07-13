
var data = {};

for (var i = 0;i<1000000;i += 3600) {
  data[Math.floor(new Date().getTime()/1000) + i] = Math.floor(Math.random()*100);
}

var cal = new CalHeatMap();
  cal.init({                          // Fill the graph with datas from that json file
    data: data,
    start: new Date(),              // Start the calendar today
    id : "graph_b",
    domain : "day",                 // Group data by days
    subDomain : "hour",             // Split each day by hours
    range : 7,                     // Number of days to display
    browsing: true,                 // Enable browsing
  });