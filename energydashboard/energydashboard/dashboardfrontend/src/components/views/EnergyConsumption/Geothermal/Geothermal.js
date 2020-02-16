import { Chart, Tooltip, StackArea, StackLine, Legend, Axis } from 'viser-react';
import * as React from 'react';


var data = [{
    country: 'Total Consumption',
    year: '1750',
    value: 502
}, {
    country: 'Total Consumption',
    year: '1800',
    value: 635
}, {
    country: 'Total Consumption',
    year: '1850',
    value: 809
}, {
    country: 'Total Consumption',
    year: '1900',
    value: 5268
}, {
    country: 'Total Consumption',
    year: '1950',
    value: 4400
}, {
    country: 'Total Consumption',
    year: '1999',
    value: 3634
}, {
    country: 'Total Consumption',
    year: '2050',
    value: 947
}, {
    country: 'Solar Power',
    year: '1750',
    value: 106
}, {
    country: 'Solar Power',
    year: '1800',
    value: 107
}, {
    country: 'Solar Power',
    year: '1850',
    value: 111
}, {
    country: 'Solar Power',
    year: '1900',
    value: 1766
}, {
    country: 'Solar Power',
    year: '1950',
    value: 221
}, {
    country: 'Solar Power',
    year: '1999',
    value: 767
}, {
    country: 'Solar Power',
    year: '2050',
    value: 133
}, ];
class GeoPower extends React.Component {
    render() {
        const scale = [
            {
                dataKey: 'year',
                type: 'linear',
                tickInterval: 50
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
export default GeoPower;
