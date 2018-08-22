const data = [4, 8, 15, 16, 23];

// Scaling: higher order function
const x = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([0, 420]);

d3.select('.chart')
  .selectAll('div')
    .data(data)
  .enter().append('div') // Create the missing divs for us.
    .style('width', (d) => x(d) + 'px')
    .text((d) => d); // Identity
