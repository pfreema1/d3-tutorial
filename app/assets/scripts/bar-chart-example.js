/*
    SET UP DATA - (domain)
*/
var dataArray = [20, 40, 50, 60];

var width = 500;
var height = 500;

//linear function applied to the domain values
// widthScale is a function
var widthScale = d3.scale
  .linear()
  .domain([0, 60])
  .range([0, width]);

//linear function applied to domain values to get colors
var color = d3.scale
  .linear()
  .domain([0, 60])
  .range(["red", "blue"]);

//axis scale

var axis = d3.svg
  .axis()
  .ticks(5)
  .scale(widthScale);

/*
    SET UP CANVAS
*/
var canvas = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", "translate(20, 0)");

/*bar chart

    -enter method contains placeholders for each element from array
        enter the data!

    - indented line after that is being applied to each element
*/

var bars = canvas
  .selectAll("rect")
  .data(dataArray)
  .enter()
  .append("rect")
  .attr("width", function(d) {
    //d stands for each element in selection
    return widthScale(d);
  })
  .attr("height", 50)
  .attr("y", function(d, i) {
    //i = index
    return i * 100;
  })
  .attr("fill", function(d) {
    //apply color scale to data - see setup above
    return color(d);
  });

canvas
  .append("g")
  .attr("transform", "translate(0, 400)")
  .call(axis);

console.log(d3);
