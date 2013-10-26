var dataset = [
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
        "kind": "Software engineer",
        "duration": 3,
        "skills":["Patent procurement", "Open Source Licensing", "Strategic creation procurement", "Patent enforcement"],
    },
    {
        "kind": "Lead Software Engineer",
        "duration": 10,
        "skills":["Patent procurement", "Open Source Licensing", "Strategic creation procurement", "Patent enforcement"],
    },
    {
        "kind": "VP Engineering",
        "duration": 17,
        "skills":["Patent procurement", "Open Source Licensing", "Strategic creation procurement", "Patent enforcement"],
    },
    ],
  },
  {"positions":[{
        "kind": "Data Analyst",
        "duration": 3,
        "skills":["Patent procurement", "Open Source Licensing", "Strategic creation procurement", "Patent enforcement"],
    },
    {
        "kind": "Senior Analyst",
        "duration": 7,
        "skills":["Patent procurement", "Open Source Licensing", "Strategic creation procurement", "Patent enforcement"],
    },
    {
        "kind": "Director of Analytics",
        "duration": 12,
        "skills":["Patent procurement", "Open Source Licensing", "Strategic creation procurement", "Patent enforcement"],
    },
    {
        "kind": "CTO",
        "duration": 23,
        "skills":["Patent procurement", "Open Source Licensing", "Strategic creation procurement", "Patent enforcement"],
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

var circles = svg.selectAll("circle")
  .data(dataset[x].positions)
  .enter()
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
.attr("id",function(d,i){return String(d.kind)});
};
