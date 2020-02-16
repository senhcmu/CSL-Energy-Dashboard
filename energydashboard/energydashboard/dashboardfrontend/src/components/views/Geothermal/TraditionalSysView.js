import { Chart, Tooltip, Axis, StackBar, Legend, Coord } from 'viser-react';
import * as React from 'react';

const data = [{
  city: '中国（北京）',
  type: '首都人口',
  value: 0.01
}, {
  city: '中国（北京）',
  type: '城市人口',
  value: 0.53
}, {
  city: '中国（北京）',
  type: '农村人口',
  value: 0.46
}, {
  city: '美国（华盛顿）',
  type: '首都人口',
  value: 0.01
}, {
  city: '美国（华盛顿）',
  type: '城市人口',
  value: 0.8
}, {
  city: '美国（华盛顿）',
  type: '农村人口',
  value: 0.19
}];

const scale = [{
  dataKey: 'value',
  max: 1.0,
  min: 0.0,
  nice: false,
  alias: '占比（%）'
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
  if (type === '首都人口') color = '#1890ff';
  if (type === '城市人口') color = '#ced4d9';
  if (type === '农村人口') color = '#f0f2f3';
  if (type === '首都人口' && city === '中国（北京）') color = '#f5222d';
  return color;
}];

export default class TraditionalSysView extends React.Component {
  render() {
    return (
      <Chart forceFit height={400} data={data} padding={[20, 20, 50, 140]} scale={scale}>
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

