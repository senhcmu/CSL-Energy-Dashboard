import { Chart, Tooltip, Axis, StackBar, Legend, Coord } from 'viser-react';
import * as React from 'react';

const data = [{
  city: 'Geothemral System',
  type: 'AC & Heating',
  value: 0.15
}, {
  city: 'Geothemral System',
  type: 'Hot Water',
  value: 0.20
}, {
  city: 'Geothemral System',
  type: 'Appliances',
  value: 0.06
},{
    city: 'Geothemral System',
    type: 'Geothermal',
    value: 0.59
  },
  {
    city: 'Traditional System',
    type: 'AC & Heating',
    value: 0.15
  }, {
    city: 'Traditional System',
    type: 'Hot Water',
    value: 0.20
  }, {
    city: 'Traditional System',
    type: 'Appliances',
    value: 0.06
  },{
      city: 'Traditional System',
      type: 'Geothermal',
      value: 0.59
    }];

const scale = [{
  dataKey: 'value',
  max: 1.0,
  min: 0.0,
  nice: false,
  alias: 'Percentage（%）'
}];

const label = {
  textStyle: {
    fill: '#aaaaaa'
  }
}

const tickLine = {
  alignWithLabel: false,
  length: 0
}

const title = {
  offset: 30,
  textStyle: {
    fontSize: 14,
    fontWeight: 300
  }
}

const line = {
  lineWidth: 0
} 

const grid = {
  lineStyle: {
    lineWidth: 0
  }
}

const stackLabel = ['value*type', function(val, t) {
  var color = t === "首都人口" ? 'white' : '#47494b';
  if (val < 0.05) {
    return false;
  }
  return {
    position: 'middle',
    offset: 0,
    textStyle: {
      fontSize: 12,
      fill: color,
      shadowBlur: 2,
      shadowColor: 'rgba(0, 0, 0, .45)'
    }
  };
}]

const color = ['type*city', function(type, city) {
  var color = void 0;
  if (type === 'AC & Heating') color = '#1890ff';
  if (type === 'Hot Water') color = '#ced4d9';
  if (type === 'Appliances') color = '#f0f2f3';
  if (type === 'Geothermal') color = '#f5222d';
//   if (type === '首都人口' && city === '中国（北京）') color = '#f5222d';
  return color;
}];

class GeoSysView extends React.Component {
  render() {
    return (
      <Chart forceFit height={200} data={data} padding={[20, 20, 50, 140]} scale={scale}>
        <Tooltip/>
        <Axis dataKey="city" label={label} tickLine={tickLine} line={line}/>
        <Axis dataKey="value" label={null} title={title} grid={grid}/>
        <Legend position='top-center'/>
        <Coord direction='LB' type='rect'/>
        <StackBar 
          position='city*value'
          color={color}
          size={26}
          opacity={1}
          label={stackLabel}
        />
      </Chart>
    );
  }
}

export default GeoSysView;

