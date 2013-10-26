var dataset = [
    {
        "kind": "Professor",
        "duration": 12,
    },
    {
        "kind": "Patent Attorney",
        "duration": 8,
    },
];


//var dataset = d3.json("../sample.json");

var svg = d3.select("#test").append("svg")
  .attr("width",1800)
  .attr("height",900);
var h = 100;
var displace = 30;


/* labels */
var text = svg.selectAll("text")
   .data(dataset)
   .enter()
   .append("text") 
   .text(function(d) {
        return d.kind;
   })
   .attr("text-anchor", "middle")
   .attr("x", function(d){return d.duration*40;})
   .attr("y", function(d,i){return i*50+displace;})
   .attr("font-family", "Raleway");


/* lines */   
var lines = svg.selectAll("line")
  .data(dataset)
   .enter()
   .append("line")
   .attr("x1",0)
   .attr("x2",function(d){return d.duration*40})
   .attr("y1",function(d,i){return i*50+displace+19})
   .attr("y2",function(d,i){return i*50+displace+19})
   .attr("stroke","#414141")
   .attr("stroke-width", 3); 

/* nodes */
var circles = svg.selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle");

circles.attr("cx", function(d, i) {
    return d.duration*40;}
  )
  .attr("cy", function(d,i){return i*50+displace+20})
  .attr("r", function(d) {
   return 5;
  })
  .attr("fill", "yellow")
  .attr("stroke", "orange")
  .attr("stroke-width", function(d) {
    return 5/2;
  });