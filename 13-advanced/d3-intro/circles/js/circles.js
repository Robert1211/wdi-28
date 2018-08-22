const svg = d3.select('svg'); // First (in this case only) SVG element.

svg.selectAll('circle')
  .data([32, 57, 112, 293])
  .enter().append('circle') // Enter the selection to create missing elements
  .attr('cy', 60)
  .attr('cx', (d, i) => i * 100 + 30)
  .attr('r', (d) => Math.sqrt(d));
