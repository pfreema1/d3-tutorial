/*
    SET UP CANVAS
*/
var canvas = d3.select("body")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

/*

    DRAWING A CIRCLE

    -append 
    -set position
    -set radius
    -set color 

*/

var circle = canvas.append("circle")
                .attr("cx", 250)
                .attr("cy", 250)
                .attr("r", 50)
                .attr("fill", "red");

var rect = canvas.append("rect")
                .attr("width", 100)
                .attr("height", 50);


/*

    DRAWING A LINE

    append

    x1 = x value of point 1
    y1 = y value of point 1 
    x2 = x value of point 2
    y2 = y value of point 2


*/
var line = canvas.append("line")
                .attr("x1", 0)
                .attr("y1", 100)
                .attr("x2", 400)
                .attr("y2", 400)
                .attr("stroke", "green")
                .attr("stroke-width", 10);


console.log(d3);