
import DataSet from '@antv/data-set';
import data from './wedw.json';
import { Chart, Tooltip, View, Legend, Polygon, Point } from 'viser-react';
import * as React from 'react';
import * as $ from 'jquery';


 class Test extends React.Component {
    state = {
        userDv: [],
        dv: [],
    }
    componentDidMount() {
        const ds = new DataSet();
        const dv = ds.createView('back').source(data, {
                type: 'GeoJSON'
            });

            const userData = [{
                name: 'Pittsburgh',
                value: 86.8
            }];
            const userDv = ds.createView().source(userData).transform({
                geoDataView: dv,
                field: 'name',
                type: 'geo.centroid',
                as: ['longitude', 'latitude']
            });
            this.setState({
                userDv,
                dv,
            });
        }

    render() {
        const scale = [
            {
                dataKey: 'longitude',
                sync: true
            },
            {
                dataKey: 'latitude',
                sync: true
            }
        ];
        return (
            <Chart forceFit height={600} padding={'auto'} scale={scale}>
                <Tooltip showTitle={false} />
                <View
                    data={this.state.dv}
                    tooltip={false}
                >
                    <Polygon
                        position="longitude*latitude"
                        color="#ebedf0"
                        style={{
                            lineWidth: 1,
                            stroke: '#fafbfc'
                        }}
                        active={false}
                    />
                </View>
                <View
                    data={this.state.userDv}
                >
                    <Point
                        position="longitude*latitude"
                        color="#1890ff"
                        opacity={.6}
                        size={[
                            'value',
                            [5, 15]
                        ]}
                        style={{
                            lineWidth: 1,
                            stroke: '#1890ff'
                        }}
                        shape="circle"
                    />
                </View>
            </Chart>
        );
    }
}

export default Test;
