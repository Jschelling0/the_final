function Data() {
  return [
    ["1970", 	4325.501,	770.167],
    ["1971", 	4351.309,	874.016],
    ["1972", 	4558.453,	928.894],
    ["1973", 	4762.452,	965.647],
    ["1974", 	592.958,	985.085],
    ["1975", 	4400.795,	1142.102],
    ["1976", 	4607.168,	1190.965],
    ["1977", 	4735.366,	1304.403],
    ["1978",	4882.964,	1455.258],
    ["1979",	4894.043,	1487.113],
    ["1980", 	4716.716,	1458.887],
    ["1981", 	4530.37,	1442.782],
    ["1982",	4301.971,	1570.468],
    ["1983",	4335.917,	1655.81],
    ["1984",	4468.262,	1802.31],
    ["1985",	4484.338,	1951.773],
    ["1986",	4487.856,	2052.242],
    ["1987",	4680.834,	2191.053],
    ["1988",	4885.591,	2347.763],
    ["1989",	4948.021,	2386.885],
    ["1990", 	5128.301,	2420.789],
    ["1991",	5078.89,	2538.03],
    ["1992",	5182.707,	2653.192],
    ["1993",	5283.438,	2835.795],
    ["1994",	5377.033,	3010.242],
    ["1995",	5438.906,	3265.057],
    ["1996",	5626.912,	3408.347],
    ["1997",	5703.707,	3414.549],
    ["1998",	5751.052,	3265.903],
    ["1999",	5830.298,	3258.135],
    ["2000",	5998.07,	3349.295],
    ["2001",	5900.437,	3426.144],
    ["2002",	5942.652,	3782.439],
    ["2003",	5991.96,	4452.31],
    ["2004",	6107.618,	5125.894],
    ["2005",	6131.893,	5771.168],
    ["2006",	6051.051,	6377.748],
    ["2007",	6128.43,	6861.751],
    ["2008",	5930.54,	7375.19],
    ["2009",	5491.036,	7758.812],
    ["2010",	5698.056,	8500.543],
    ["2011",	5565.294,	9388.199],
    ["2012",	5367.569,	9633.899],
    ["2013",	5514.029,	9796.527],
    ["2014",	5561.719,	9820.36],
    ["2015",	5412.432,	9683.201],
    ["2016",	5292.268,	9552.517],
    ["2017",	5253.606,	9750.726],
    ["2018",	5424.882,	9956.569],
    ["2019",	5284.697,	10174.681],
      ]
    }
// create a data set on our data
var dataSet = anychart.data.set(Data());

// map data for the line chart,
// take x from the zero column and value from the first column
var seriesData = dataSet.mapAs({ x: 0, value: 1 });

// create a line chart
var chart = anychart.line();

// create a data set on our data
var dataSet = anychart.data.set(Data());

// map data for the line chart,
// take x from the zero column and value from the first column
var seriesData = dataSet.mapAs({ x: 0, value: 1 });

// create a line chart
var chart = anychart.line();

// configure the chart title text settings
chart.title('USA vs. China');

// set the y axis title
chart.yAxis().title('CO2');

// create a line series with the mapped data
var lineChart = chart.line(seriesData);

// set the container id for the line chart
chart.container('random');

// draw the line chart
chart.draw();
    
    // map data for the first series,
// take x from the zero column and value from the first column
var firstSeriesData = dataSet.mapAs({ x: 0, value: 1 });

// map data for the second series,
// take x from the zero column and value from the second column
var secondSeriesData = dataSet.mapAs({ x: 0, value: 2 });



var firstSeries = chart.line(firstSeriesData);
firstSeries.name('USA');

// create the second series with the mapped data
var secondSeries = chart.line(secondSeriesData);
secondSeries.name('China');

// turn the legend on
chart.legend().enabled(true);

chart.crosshair().enabled(true).yLabel(false).yStroke(null);