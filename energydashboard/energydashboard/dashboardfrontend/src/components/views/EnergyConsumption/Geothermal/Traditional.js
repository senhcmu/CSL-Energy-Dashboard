import { Chart, Tooltip, Legend, Polygon } from 'viser-react';
import * as React from 'react';
const DataSet = require('@antv/data-set');

const sourceData = {
  name: 'root',
  children: [
    { name: 'Heating & AC', value: 600 },
    { name: 'Hot Water', value: 130 },
    { name: 'Lighting & Appliances', value: 270 }
  ]
};

const dv = new DataSet.View().source(sourceData, {
  type: 'hierarchy',
});
dv.transform({
  field: 'value',
  type: 'hierarchy.treemap',
  tile: 'treemapResquarify',
  as: ['x', 'y'],
});
const data = dv.getAllNodes().map((node) => ({
  ...node,
  name: node.data.name,
  value: node.data.value,
}));

const scale = [{
  dataKey: 'value',
  nice: false,
}];

const itemTpl = `<li data-index={index}>
  <span style="background-color:{color};" class="g2-tooltip-marker"></span>
  {name}<br/>
  <span style="padding-left: 16px">Consumption：{count}</span><br/>
</li>`;

const style = {
  lineWidth: 1,
  stroke: '#fff',
};

const tooltip = ['name*value', (name, count) => ({ name, count })];

const label = ['name', {
  offset: 0,
  textStyle: {
    textBaseline: 'middle',
  },
  formatter(val) {
    if (val !== 'root') {
      return val;
    }
  }
}];

class Traditional extends React.Component {
  render() {
    return (
      <Chart forceFit={true} height={300} data={data} scale={scale} padding={0}>
        <Tooltip showTitle={false} itemTpl={itemTpl} />
        <Polygon position="x*y" color="name" tooltip={tooltip} style={style} label={label} />
      </Chart>
    );
  }
}

export default Traditional;




