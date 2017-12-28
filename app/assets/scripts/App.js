var data = [
  {
    username: "Maria",
    userId: 1,
    pomodoros: 12,
    lastPomodoro: null
  },
  {
    username: "turd bucket",
    userId: 2,
    pomodoros: 27,
    lastPomodoro: null
  },
  {
    username: "principal skinner",
    userId: 3,
    pomodoros: 83,
    lastPomodoro: null
  },
  {
    username: "007 meowface",
    userId: 4,
    pomodoros: 52,
    lastPomodoro: null
  },
  {
    username: "happyturds",
    userId: 5,
    pomodoros: 2,
    lastPomodoro: null
  },
  {
    username: "new toilet",
    userId: 6,
    pomodoros: 19,
    lastPomodoro: null
  },
  {
    username: "sweetcasebro1984",
    userId: 7,
    pomodoros: 63,
    lastPomodoro: null
  },
  {
    username: "Jimingy",
    userId: 8,
    pomodoros: 79,
    lastPomodoro: null
  }
];

//   END DATA

console.log(data);

var bubbleChart = function() {
  var width = 600,
    height = 400;

  function chart(selection) {
    //you gonna get here
  }

  chart.width = function(value) {
    if (!arguments.length) {
      return width;
    }
    width = value;

    return chart;
  };

  chart.height = function(value) {
    if (!arguments.length) {
      return height;
    }
    height = value;

    return chart;
  };

  return chart;
};

var chart = bubbleChart();
chart.width(600).height(400);
// console.log(chart.width()); //returns 600

d3
  .select("#chart")
  .data(data)
  .call(chart);

var div = d3
  .select("body")
  .selectAll("div") //here you are saying, "hey d3, each data elemtn of the array that comes next will be bound to a div"
  .data(data)
  .enter()
  .append("div");

var simulation = d3
  .forceSimulation(data)
  .force("charge", d3.forceManyBody().strength([-50]))
  .force("x", d3.forceX())
  .force("y", d3.forceY());
// .on("tick", ticked);

var scaleRadius = d3
  .scaleLinear()
  .domain([
    d3.min(data, function(d) {
      return 0;
      // return +d.pomodoros;
    }),
    d3.max(data, function(d) {
      return +d.pomodoros;
    })
  ])
  .range([5, 18]);

var colorCircles = d3.scaleOrdinal(d3.schemeCategory10);

var tooltip = selection
  .append("div")
  .style("position", "absolute")
  .style("visibility", "hidden")
  .style("color", "white")
  .style("padding", "8px")
  .style("background-color", "#626D71")
  .style("border-radius", "6px")
  .style("text-align", "center")
  .style("font-family", "monospace")
  .style("width", "400px")
  .text("");

var node = svg
  .selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
  .attr("r", function(d) {
    return scaleRadius(+d.pomodoros);
  })
  .style("fill", function(d) {
    return colorCircles(+d.userId);
  })
  .attr("transform", "translate(" + [width / 2, height / 2] + ")")
  .on("mouseover", function(d) {
    tooltip.html(d.userId + "<br>" + d.username + "<br>" + d.pomodoros);
    return tooltip.style("visibility", "visible");
  })
  .on("mousemove", function() {
    return tooltip
      .style("top", d3.event.pageY - 10 + "px")
      .style("left", d3.event.pageX + 10 + "px");
  })
  .on("mouseout", function() {
    return tooltip.style("visibility", "hidden");
  });

function ticked(e) {
  node
    .attr("cx", function(d) {
      return d.x;
    })
    .attr("cy", function(d) {
      return d.y;
    }); //node is each circle of the bubble chart
}
