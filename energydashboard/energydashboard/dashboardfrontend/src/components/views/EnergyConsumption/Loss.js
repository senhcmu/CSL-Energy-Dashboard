import { Chart, Tooltip, Axis, Box, Legend, Pyramid, Coord, Guide } from 'viser-react';
import * as React from 'react';
const DataSet = require('@antv/data-set');

const sourceData = [
  { action: 'Primary energy', pv: 50000 },
  { action: 'After conversion loss', pv: 40000 },
  { action: 'After Generation loss', pv: 35000 },
  { action: 'After transportation loss', pv: 25000 },
  { action: 'Secondary energy', pv: 15000 },
];

const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: 'percent',
  field: 'pv',
  dimension: 'action',
  as: 'percent'
});
const data = dv.rows;

const scale = {
  dataKey: 'percent',
  nice: false,
};

const tooltipOpts = {
  showTitle: false,
  itemTpl: '<li data-index={index} style="margin-bottom:4px;">'
      + '<span style="background-color:{color};" class="g2-tooltip-marker"></span>'
      + '{name}<br/>'
      + '<span style="padding-left: 16px">Amount：{pv}</span><br/>'
      + '<span style="padding-left: 16px">Percentage：{percent}</span><br/>'
      + '</li>'
};

const funnelOpts = {
  position: 'action*percent',
  color: ['action', ['#0050B3', '#1890FF', '#40A9FF', '#69C0FF', '#BAE7FF']],
  label: ['action*pv', (action, pv) => {
    return action + ' ' + pv;
  }, {
    offset: 35,
    labelLine: {
      lineWidth: 1,
      stroke: 'rgba(0, 0, 0, 0.15)',
    }
  }],
  tooltip: ['action*pv*percent', (action, pv, percent) => ({
    name: action,
    percent: Math.floor(percent * 100) + '%',
    pv: pv,
  })]
};

class Loss extends React.Component {
  render() {
    return (
      <div>
        <Chart forceFit height={400} padding={[ 20, 120, 95 ]} data={data} scale={scale}>
          <Tooltip {...tooltipOpts} />
          <Legend />
          <Coord type="rect" direction="LT" />
          <Pyramid {...funnelOpts} />
          {
            data.map((obj, i) => {
              const content = parseInt(String(obj.percent * 100)) + '%';
              return (<Guide key={`guide-text-${i}`} type="text" top={true} position={{
                action: obj.action,
                percent: 'median'
              }} content={content} style={{
                fill: '#fff',
                fontSize: '12',
                textAlign: 'center',
                shadowBlur: 2,
                shadowColor: 'rgba(0, 0, 0, .45)'
              }}/>);
            })
          }
        </Chart>
      </div>
    );
  }
}

export default Loss;



