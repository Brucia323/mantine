import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'ScatterChart' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_multipleSeries = {
  name: '⭐ Demo: multipleSeries',
  render: renderDemo(demos.multipleSeries),
};

export const Demo_axisProps = {
  name: '⭐ Demo: axisProps',
  render: renderDemo(demos.axisProps),
};

export const Demo_gridColor = {
  name: '⭐ Demo: gridColor',
  render: renderDemo(demos.gridColor),
};

export const Demo_legend = {
  name: '⭐ Demo: legend',
  render: renderDemo(demos.legend),
};

export const Demo_legendPosition = {
  name: '⭐ Demo: legendPosition',
  render: renderDemo(demos.legendPosition),
};

export const Demo_noTooltip = {
  name: '⭐ Demo: noTooltip',
  render: renderDemo(demos.noTooltip),
};

export const Demo_referenceLines = {
  name: '⭐ Demo: referenceLines',
  render: renderDemo(demos.referenceLines),
};

export const Demo_strokeDasharray = {
  name: '⭐ Demo: strokeDasharray',
  render: renderDemo(demos.strokeDasharray),
};

export const Demo_tooltipAnimation = {
  name: '⭐ Demo: tooltipAnimation',
  render: renderDemo(demos.tooltipAnimation),
};
