import React from 'react';
import * as d3 from 'd3';

import sample from './sample';

sample.sort((a, b) => new Date(a.Date) - new Date(b.Date));

const dateValues = sample.map(dv => ({
  date: d3.timeDay(new Date(dv.Date)),
  value: Number(dv.AnswerCount),
}));

class HeatGraph extends React.Component {
  drawChart() {
    const svg = d3
      .select(this.refs.heatMapRef)
      .append('svg')
      .attr('width', 1200)
      .attr('height', 800);
    const years = d3
      .nest()
      .key(d => d.date.getUTCFullYear())
      .entries(dateValues);

    const values = dateValues.map(dv => dv.value);
    const max = d3.max(values);
    const min = d3.min(values);

    // setting for cells
    const cellSize = 15;
    const yearHeight = cellSize * 7 + 25;
    const formatDay = d =>
      ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'][d.getUTCDay()];
    const countDay = d => d.getUTCDay();
    const timeWeek = d3.utcSunday;

    const group = svg.append('g');

    const colorFn = d3
      .scaleSequential(d3.interpolateBuGn)
      .domain([Math.floor(min), Math.ceil(max)]);

    const year = group
      .selectAll('g')
      .data(years)
      .join('g')
      .attr(
        'transform',
        (d, i) => `translate(40, ${yearHeight * i + cellSize * 1.5}`,
      );
    year
      .append('text')
      .attr('x', -5)
      .attr('y', -30)
      .attr('text-anchor', 'end')
      .attr('font-size', 16)
      .attr('font-weight', 550)
      .attr('transform', 'rotate(270)')
      .text(d => d.key);

    // names on the left side
    year
      .append('g')
      .attr('text-anchor', 'end')
      .selectAll('text')
      .data(d3.range(7).map(i => new Date(1999, 0, i)))
      .join('text')
      .attr('x', -5)
      .attr('y', d => (countDay(d) + 0.5) * cellSize)
      .attr('dy', '0.31em')
      .text(formatDay);

    // one rectangle for each day
    year
      .append('g')
      .selectAll('rect')
      .data(d => d.values)
      .join('rect')
      .attr('width', cellSize - 1.5)
      .attr('height', cellSize - 1.5)
      .attr(
        'x',
        (d, i) => timeWeek.count(d3.utcYear(d.date), d.date) * cellSize + 10,
      )
      .attr('y', d => countDay(d.date) * cellSize + 0.5)
      .attr("fill", d => colorFn(d.value));

  }
  componentDidMount() {
    this.drawChart();
  }
  render() {
    return <div ref="heatMapRef">DUPA</div>;
  }
}

export default HeatGraph;
