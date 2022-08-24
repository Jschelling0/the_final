// set the data
 function getData() {
    return [
      ["1970", 	276.58719],
      ["1971", 	286.532646],
      ["1972", 	297.891169],
      ["1973", 	315.142915],
      ["1974", 	314.692755],
      ["1975", 	314.894774],
      ["1976", 	332.175151],
      ["1977", 	340.220486],
      ["1978",	352.197108],
      ["1979",	362.044646],
      ["1980", 	362.657588],
      ["1981", 	350.840552],
      ["1982",	348.536844],
      ["1983",	351.380241],
      ["1984",	361.854384],
      ["1985",	375.250654],
      ["1986",	379.779607],
      ["1987",	389.165483],
      ["1988",	402.249355],
      ["1989",	407.484858],
      ["1990", 	403.7161],
      ["1991",	402.42995],
      ["1992",	387.707824],
      ["1993",	388.892063],
      ["1994",	386.689658],
      ["1995",	393.031248],
      ["1996",	403.701378],
      ["1997",	404.091878],
      ["1998",	402.191423],
      ["1999",	406.55973],
      ["2000",	417.32033],
      ["2001",	419.829341],
      ["2002",	425.990112],
      ["2003",	445.16729],
      ["2004",	463.53286],
      ["2005",	476.418281],
      ["2006",	490.684567],
      ["2007",	503.11475],
      ["2008",	509.595107],
      ["2009",	498.752693],
      ["2010",	523.878431],
      ["2011",	538.483262],
      ["2012",	546.73952],
      ["2013",	547.986231],
      ["2014",	549.91672],
      ["2015",	550.281284],
      ["2016",	550.625404],
      ["2017",	557.505484],
      ["2018",	567.764196],
      ["2019",	566.972956],
    ]};

// create a data set on our data
var dataSet = anychart.data.set(getData());

// map data for the line chart,
// take x from the zero column and value from the first column
var seriesData = dataSet.mapAs({ x: 0, value: 1 });

// create a line chart
var chart = anychart.line();

// create a data set on our data
var dataSet = anychart.data.set(getData());

// map data for the line chart,
// take x from the zero column and value from the first column
var seriesData = dataSet.mapAs({ x: 0, value: 1 });

// create a line chart
var chart = anychart.line();

// configure the chart title text settings
chart.title('Increase in CO2 Emisisons over the past 50 years');

// set the y axis title
chart.yAxis().title('CO2');

// create a line series with the mapped data
var lineChart = chart.line(seriesData);

// set the container id for the line chart
chart.container('container');

// draw the line chart
chart.draw();