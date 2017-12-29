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

var canvas = d3
  .select("body")
  .append("svg")
  .attr("width", 500)
  .attr("height", 500);

//path generator!
var diagonal = d3.svg.diagonal();

canvas
  .append("path")
  .attr("fill", "none")
  .attr("stroke", "black")
  .attr("d", diagonal);
