
var Marge = {top:20, right:120, bottom: 20, left: 50};
var mapHeight =1535 ,mapWidth=2740;

var svg = d3.select("#svg")
    .attr("width",mapWidth+Marge.left+Marge.right)
    .attr("height",mapHeight+Marge.top+Marge.bottom);

var x_scale =d3.scaleLinear()
            .domain([24.824163,24.901821])
            .range([0,mapWidth]);
        
var y_scale =d3.scaleLinear()
                .domain([36.0949,36.045015])
                .range([0,mapHeight]);
var lineFunction = d3.line()
                          .x(function(d) { return x_scale(d.lat);})
                          .y(function(d) { return x_scale(d.long); })
                          
var lineData = d3.csv("../data/gpstest.csv").then(
  function(data){
   console.log(data); 
  }
);
var lineGraph = map.append("path")
                .attr("d", lineFunction(lineData))
                .attr("stroke", "blue")
                .attr("stroke-width", 2)
                .attr("fill", "none");
                
