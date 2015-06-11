

var cal = new CalHeatMap();
	cal.init({							// Fill the graph with datas from that json file
		start: new Date(), 				// Start the calendar today
		id : "graph_b",
		domain : "day",					// Group data by days
		subDomain : "hour",				// Split each day by hours
		range : 10,						// Number of days to display
		browsing: true, 				// Enable browsing
	});

