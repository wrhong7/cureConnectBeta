

var cal = new CalHeatMap();
cal.init({
	start: new Date(2000, 0), // January, 1st 2000
	range: 12,
	domain: "year",
	subDomain: "month",
	data: "http://localhost/api?start={{d:start}}&stop={{d:end}}"
});
