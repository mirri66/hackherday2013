var dataset = [
  {"positions":[{
        "kind": "MBA",
        "duration": 2,
        "skills":["Strategy", "Finance", "Marketing", "Business Planning"],
    },
    {
        "kind": "Senior Analyst",
        "duration": 7,
        "skills":["Market analysis", "Cross function team management"],
    },
    {
        "kind": "Director",
        "duration": 12,
        "skills":["Competitive analysis", "Corporate development"],
    },
    {
        "kind": "VP",
        "duration": 25,
        "skills":["Strategic Partnerships", "Acquisition Integration"],
    },
    ],
  },
  {"positions":[{
        "kind": "Senior Architect",
        "duration": 3,
        "skills":["Compiler analysis", "Unit Performance Analysis", "Architecture decision validation studies"],
    },
    {
        "kind": "Chip Architect",
        "duration": 10,
        "skills":["Competitive analysis", "Project management", "Cross unit team schedule management"],
    },
    {
        "kind": "Lead Architect",
        "duration": 15,
        "skills":["Architecture Design", "Low power design", "Programming model"],
    },
    {
        "kind": "Principal Architect",
        "duration": 22,
        "skills":["Architectural Exploration", "Industry trends", "Programming model"],
    },
    ],
  },
    {"positions":[{
        "kind": "Doctoral Candidate",
        "duration": 3,
        "skills":["Computer Architecture", "Compilers", "Algorithms", "Simulations", "Graduate Research"],
      },
      {
        "kind": "Post Doctoral Fellow",
        "duration": 6,
        "skills":["Independent Research", "Experiment Design"],
      },
      {
        "kind": "Senior Research Scientist",
        "duration": 10,
        "skills":["Industry Research", "Analytical Modeling", "Industry Collaboration", "Research idea product integration"],
      },
       {
        "kind": "Assistant Professor",
        "duration": 15,
        "skills":["Teaching", "Research Advisor"],
      },
       {
        "kind": "Associate Professor",
        "duration": 20,
        "skills":["Teaching", "Research Advisor", "Grant Proposals"],
      },
        ],
    },
    {"positions":[{
        "kind": "JD IP Law",
        "duration": 3,
        "skills": [ "Patent Law", "Patent Litigation", "Patent Prosecution" ],
    },
    {
		"kind": "Associate",
        "duration": 6,
        "skills":[ "Patent Law", "Patent Litigation", "Patent Prosecution", "Contract Drafting"],
    },
    {
        "kind": "Patent Consultant",
        "duration": 10,
        "skills":["Intellectual Property Transactions and Licensing", "Litigation Drafting", "Cross function team management"],
    },
    {
        "kind": "Intellectual Patent Attorney",
        "duration": 18,
        "skills":["Patent procurement", "Open Source Licensing", "Strategic creation procurement", "Patent enforcement"],
    },
    ],
  },


  
{"positions":[{
        "kind": "Lead Engineer",
        "duration": 3,
        "skills":["Technical Leadership", "R", "Weka", "Object Oriented Programming", "Collaboration", "Data Analysis", "Machine Learning"],
    },
    {
        "kind": "Director of Analytics",
        "duration": 6,
        "skills":["Product management", "Statistical Analysis", "Deep learning", "Predictive analytics"],
    },
    {
        "kind": "Cofounder",
        "duration": 11,
        "skills":["Product Innovation", "Market strategy", "Rapid Prototyping", "Venture fund raising", "Industry trends"],
    },
    {
        "kind": "CEO",
        "duration": 15,
        "skills":["Industry Innovation", "Company Strategy"],
    },
    ],
  },
];

for (var x =0; x<dataset.length;x++){

var svg = d3.select("#test").append("svg")
  .attr("width",1800)
  .attr("height",100);
var displace = 20;
var xdisp=20;



var tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .text("a simple tooltip");

/* labels */
/*var text = svg.selectAll("text")
   .data(dataset)
   //.data(jsoneg)
   .enter()
   .append("text") 
   .text(function(d) {
        return d.positions[0].kind;
   //  return d.r_basicprofile[0];
   })
   .attr("text-anchor", "middle")
   .attr("x", function(d){return d.positions[0].duration*50+xdisp;})
   .attr("y", function(d,i){return i*50+displace;})
   .attr("font-family", "Raleway");
*/
/* labels */
//for (var x =0; x<dataset.length;x++){
var text = svg.selectAll("text")
   .data(dataset[x].positions)
   //.data(jsoneg)
   .enter()
   .append("text") 
   .text(function(d) {
        return d.kind;
   //  return d.r_basicprofile[0];
   })
   .attr("text-anchor", "middle")
   .attr("x", function(d){return d.duration*50+xdisp;})
   //.attr("y", function(d,i){return i*50+displace;})
   .attr("y", function(){return 50+displace;})
   .attr("font-family", "Raleway");
//};


/* lines */   
/*
var lines = svg.selectAll("line")
  .data(dataset)
   .enter()
   .append("line")
   .attr("x1",0)
   .attr("x2",function(d){return d.positions[0].duration*50+xdisp})
   .attr("y1",function(d,i){return i*50+displace+19})
   .attr("y2",function(d,i){return i*50+displace+19})
   .attr("stroke","#414141")
   .attr("stroke-width", 3); 
*/
//for (var x =0; x<dataset.length;x++){
//alert(dataset[x].positions[x2].duration)
var lines = svg.selectAll("line")
  .data(dataset[x].positions)
   .enter()
   .append("line")
   .attr("x1",0)
   .attr("x2",function(d){return d.duration*50+xdisp})
   //.attr("y1",function(d,i){return i*50+displace+19})
   //.attr("y2",function(d,i){return i*50+displace+19})
   .attr("y1",function(){return 50+displace+19})
   .attr("y2",function(){return 50+displace+19})
   .attr("stroke","#414141")
   .attr("stroke-width", 3); 
//}
/* nodes */
/*
var circles = svg.selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle");

circles.attr("cx", function(d, i) {
    return d.positions[0].duration*50+xdisp;}
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
*/
//for (var x =0; x<dataset.length;x++){

//var circles = svg.selectAll("circle")
var circles = svg.selectAll("a.legend_link")
  .data(dataset[x].positions)
  .enter()
  .append("a").attr("xlink:href", function(d,i){return 'http://www.linkedin.com/vsearch/p?keywords='+String(d.kind)})
  .append("circle");

circles.attr("cx", function(d, i) {
    return d.duration*50+xdisp;}
  )
  //.attr("cy", function(d,i){return i*50+displace+20})
  .attr("cy", function(){return 50+displace+20})
  .attr("r", function(d) {
   return 5;
  })
  .attr("fill", "yellow")
  .attr("stroke", "orange")
  .attr("stroke-width", function(d) {
    return 5/2;
  })
.attr("id",function(d,i){return String(d.kind)})
//.on("click", function(d,i){HandleClick(d3.select(this));}) 
.append("svg:title")
.text(function(d){return d.skills})
; 
};


function HandleClick(selection){
  console.log(selection);
  //tooltip.pop(this,"test");
  var extra= document.createElement('div');
  selection.append(extra);
};
