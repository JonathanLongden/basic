/**
 * @see http://bl.ocks.org/mbostock/1256572
 * @param {Object} d3
 */
window.D3ShowReel = window.D3ShowReel || (function(d3) {
    'use strict';


var width = 960,
    height = 700,
    radius = (Math.min(width, height) / 2) - 10;

var formatNumber = d3.format(",d");

var x = d3.scale.linear()
    .range([0, 2 * Math.PI]);

var y = d3.scale.sqrt()
    .range([0, radius]);

var color = d3.scale.category20c();

var partition = d3.layout.partition()
    .value(function(d) { return d.size; });

var arc = d3.svg.arc()
    .startAngle(function(d) { return Math.max(0, Math.min(2 * Math.PI, x(d.x))); })
    .endAngle(function(d) { return Math.max(0, Math.min(2 * Math.PI, x(d.x + d.dx))); })
    .innerRadius(function(d) { return Math.max(0, y(d.y)); })
    .outerRadius(function(d) { return Math.max(0, y(d.y + d.dy)); });

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + (height / 2) + ")");

d3.json("flare.json", function(error, root) {
  if (error) throw error;

  svg.selectAll("path")
      .data(partition.nodes(root))
    .enter().append("path")
      .attr("d", arc)
      .style("fill", function(d) { return color((d.children ? d : d.parent).name); })
      .on("click", click)
    .append("title")
      .text(function(d) { return d.name + "\n" + formatNumber(d.value); });
});

function click(d) {
  svg.transition()
      .duration(750)
      .tween("scale", function() {
        var xd = d3.interpolate(x.domain(), [d.x, d.x + d.dx]),
            yd = d3.interpolate(y.domain(), [d.y, 1]),
            yr = d3.interpolate(y.range(), [d.y ? 20 : 0, radius]);
        return function(t) { x.domain(xd(t)); y.domain(yd(t)).range(yr(t)); };
      })
    .selectAll("path")
      .attrTween("d", function(d) { return function() { return arc(d); }; });
}

d3.select(self.frameElement).style("height", height + "px");


//  run: function() {
//             self = this;

//             d3.csv(csvUrl, function(data) {
//                 var parse = d3.time.format("%m/%d/%Y %H:%M").parse; //gfdata2 5/1/2017 12:00
//                 //var parse = d3.time.format("%y-%b").parse; //gfdata
//                 var parse = d3.time.format("%b-%Y").parse; //stocks
//                 // Nest stock values by symbol.
//                 symbols = d3.nest()
//                     .key(function(d) {
//                         return d.symbol;
//                     })
//                     .entries(data);

//                 // Parse dates and numbers. We assume values are sorted by date.
//                 // Also compute the maximum price per symbol, needed for the y-domain.
//                 symbols.forEach(function(s) {
//                     s.values.forEach(function(d) {
//                         d.date = parse(d.date);
//                         d.price = +d.price;
//                     });

//                     s.maxPrice = d3.max(s.values, function(d) {
//                         return d.price;
//                     });

//                     s.sumPrice = d3.sum(s.values, function(d) {
//                         return d.price;
//                     });
//                 });

//                 // Sort by maximum price, descending.
//                 symbols.sort(function(a, b) {
//                     return b.maxPrice - a.maxPrice;
//                 });

//                 g = svg.selectAll("g")
//                     .data(symbols)
//                     .enter().append("g")
//                     .attr("class", "symbol");

//                 setTimeout(self.lines, duration);
//             });
//         }


}(d3)); //end of function


window.document.addEventListener("DOMContentLoaded", function(event) {
    'use strict';
    var D3ShowReel = window.D3ShowReel;

    D3ShowReel.run();
});