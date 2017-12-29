var data = {
  "name": "foo",
  "children": [
  {
    "username": "Maria",
    "userId": 1,
    "pomodoros": 12,
    "lastPomodoro": null
  },
  {
    "username": "turd bucket",
    "userId": 2,
    "pomodoros": 27,
    "lastPomodoro": null
  },
  {
    "username": "principal skinner",
    "userId": 3,
    "pomodoros": 83,
    "lastPomodoro": null
  },
  {
    "username": "007 meowface",
    "userId": 4,
    "pomodoros": 52,
    "lastPomodoro": null
  },
  {
    "username": "happyturds",
    "userId": 5,
    "pomodoros": 2,
    "lastPomodoro": null
  },
  {
    "username": "new toilet",
    "userId": 6,
    "pomodoros": 19,
    "lastPomodoro": null
  },
  {
    "username": "sweetcasebro1984",
    "userId": 7,
    "pomodoros": 63,
    "lastPomodoro": null
  },
  {
    "username": "Jimingy",
    "userId": 8,
    "pomodoros": 79,
    "lastPomodoro": null
  }]
};



// var data = {
//   "name": "max",
//   "children": [
//     {
//       "name": "Sylvia",
//       "children": [
//         {
//           "name": "Craig"
//         },
//         {
//           "name": "Robin"
//         },
//         {
//           "name": "Anna"
//         }
//       ]
//     },
//     {
//       "name": "David",
//       "children": [
//         {
//           "name": "Jeff",
//           "size": 3534
//         },
//         {
//           "name": "Buffy",
//           "size": 5731
//         }
//       ]
//     }
//   ]
// }



//   END DATA

var width = 800;
var height = 600;

var canvas = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", "translate(50, 50)");


  
//create layout 
var pack = d3.layout.pack()
  .size([width, height - 50])
  .value(function(d, i) {
    // console.log("d from .value layout:  " + d);
    return d.pomodoros;
  })
  .padding(10);

//load up some data
//this gives the datapoints extra info so we can plot it according to the desired layout
// for example, the data can get: x, y values -- radius value -- depth in hierarchy
//this is almost like scaling, in the sense that you have a DOMAIN (the original datapoints), and then you run a function that gives them an appropriate place in a scale, the RANGE - the range in this instance is a beefed up version of the data.
//QUESTION:  how are the x and y values chosen hmmmm?

//need to make make data where it will be able to run in the nodes method correctly
var nodes = pack.nodes(data);

// console.log(data);
console.log(nodes);

var node = canvas.selectAll(".node")
  .data(nodes)
  .enter()
  .append("g")
    .attr("class", "node")
    .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; } );

//append a circle to each node - before this point, only the elements were created in the dom and given a class above
node.append("circle")
  .attr("r", function(d) { return d.r; })
  .attr("fill", "skyblue")
  .attr("opacity", 0.25)
  .attr("stroke", "#ADADAD")
  .attr("stroke-width", 2);

//append text to the node
node.append("text")
  .text(function(d) {
    
    return d.username;
  })
  .attr("text-anchor", "middle");