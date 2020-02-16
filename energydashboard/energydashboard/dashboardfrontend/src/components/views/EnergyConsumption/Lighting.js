import { Chart, Legend, Axis, Tooltip, StackInterval } from 'viser-react';
import * as React from 'react';
const DataSet = require('@antv/data-set');

const data = [{
    country: 'Runoff',
    year: '1',
    value: 502
}, {
    country: 'District Water',
    year: '1',
    value: 635
}, {
    country: 'Runoff',
    year: '2',
    value: 0
}, {
    country: 'District Water',
    year: '2',
    value: 947
}];
const ds = new DataSet();
const dv = ds.createView('demo').source(data).transform({
    type: 'percent',
    field: 'value', // 统计销量
    dimension: 'country', // 每年的占比
    groupBy: ['year'], // 以不同产品类别为分组
    as: 'percent'
});

const scale = [
    {
        dataKey: 'percent',
        min: 0,
        formatter: function formatter(val) {
            return (val * 100).toFixed(2) + '%';
        }
    }
];

class Lighting extends React.Component {

    render() {

        return (
            <Chart forceFit height={500} data={dv} scale={scale} padding={['auto']}>
                <Legend dataKey="country" />
                <Tooltip />
                <Axis dataKey="year" />
                <StackInterval
                    position="year*percent"
                    label={[
                        'percent',
                        {
                            position: 'middle',
                            offset: 0,
                            textStyle: {
                                fill: '#fff'
                            }
                        }
                    ]}
                    color={[
                        'country',
                        ['#FF6A84', '#30A4EB', '#45BFC0', '#FFCC55']
                    ]}
                    shape="top-line"
                />
            </Chart>
        );
    }
}

export default Lighting;
