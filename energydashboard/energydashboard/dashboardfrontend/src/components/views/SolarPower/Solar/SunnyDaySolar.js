import { Chart, Tooltip, StackArea, StackLine, Legend, Axis } from 'viser-react';
import * as React from 'react';


var data = [{
    country: 'Total Consumption',
    year: '0800',
    value: 502
}, {
    country: 'Total Consumption',
    year: '0900',
    value: 635
}, {
    country: 'Total Consumption',
    year: '1000',
    value: 809
}, {
    country: 'Total Consumption',
    year: '1100',
    value: 5268
}, {
    country: 'Total Consumption',
    year: '1200',
    value: 4400
}, {
    country: 'Total Consumption',
    year: '1300',
    value: 3634
}, {
    country: 'Total Consumption',
    year: '1400',
    value: 947
},{
    country: 'Total Consumption',
    year: '1500',
    value: 819
},{
    country: 'Total Consumption',
    year: '1600',
    value: 720
},{
    country: 'Total Consumption',
    year: '1700',
    value: 150
},{
    country: 'Total Consumption',
    year: '1800',
    value: 100
},{
    country: 'Solar Power',
    year: '0800',
    value: 106
}, {
    country: 'Solar Power',
    year: '0900',
    value: 107
}, {
    country: 'Solar Power',
    year: '1000',
    value: 111
}, {
    country: 'Solar Power',
    year: '1100',
    value: 1766
}, {
    country: 'Solar Power',
    year: '1200',
    value: 221
}, {
    country: 'Solar Power',
    year: '1300',
    value: 767
}, {
    country: 'Solar Power',
    year: '1400',
    value: 133
},{
    country: 'Solar Power',
    year: '1500',
    value: 133
},{
    country: 'Solar Power',
    year: '1600',
    value: 133
},{
    country: 'Solar Power',
    year: '1700',
    value: 120
},{
    country: 'Solar Power',
    year: '1800',
    value: 70
}];
class SunnyDaySolarPower extends React.Component {
    render() {
        const scale = [
            {
                dataKey: 'year',
                type: 'linear',
                tickInterval: 100
            }
        ];
        return (
            <Chart
                forceFit
                height={500}
                data={data}
                scale={scale}
            >
                <Tooltip
                    crosshairs={{
                        type: 'line'
                    }}
                    useHtml={false}
                />
                <Axis />
                <Legend />
                <StackArea
                    position="year*value"
                    color="country"
                />
                <StackLine
                    position="year*value"
                    color="country"
                    size={2}
                />
            </Chart>
        );
    }
}
export default SunnyDaySolarPower;
