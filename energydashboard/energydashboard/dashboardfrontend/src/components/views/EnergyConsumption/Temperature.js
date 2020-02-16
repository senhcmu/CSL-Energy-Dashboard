import React from 'react';
import {
  Chart,
  Tooltip,
  Legend,
  View,
  Geom,
} from 'bizcharts';
import * as $ from 'jquery';
import DataSet from '@antv/data-set';


let data;
$.ajax({
  url: "https://alifd.alibabausercontent.com/materials/@bizcharts/map-with-connection/0.1.7/mock.json",
  async : false,
  success: (iData) => { data = iData }
});

const flights = data[0];
const airportsJ = data[1];
const mapData = data[2];

let airports = airportsJ;
const map = [];
const features = mapData.features;
// 获取出所有的地图区域名称
for (let i = 0; i < features.length; i++) {
  const name = features[i].properties.name;
  map.push({
    name,
  });
}

const scale = {
  longitude: {
    max: -66,
    min: -125,
    sync: true,
  },
  latitude: {
    max: 50,
    min: 24,
    sync: true,
  },
};

const mapDv = new DataSet.View().source(mapData, {
  type: 'GeoJSON',
});
mapDv.transform({
  type: 'map',
  callback: function callback(row) {
    row.code = row.properties.code;
    return row;
  },
});
// ///////////////// flights
const countByAirport = {};
let subFlights = [];
flights.forEach((flight) => {
  const origin = flight.origin;
  const destination = flight.destination;
  countByAirport[origin] = (countByAirport[origin] || 0) + 1;
  countByAirport[destination] = (countByAirport[destination] || 0) + 1;
});

// /////////////// airports

const airportByIata = {};
airports = airports.filter((airport) => {
  airportByIata[airport.iata] = airport;
  if (countByAirport[airport.iata]) {
    airport.count = countByAirport[airport.iata]; // 加入班次数量
    airport.id = airport.iata;
    return true;
  }
  return false;
});
flights.forEach((flight) => {
  const origin = airportByIata[flight.origin];
  const destination = airportByIata[flight.destination];
  flight.longitude = [origin.longitude, destination.longitude];
  flight.latitude = [origin.latitude, destination.latitude];
});

function getFlights(iata) {
  const rst = [];
  flights.forEach((flight) => {
    if (flight.origin === iata || flight.destination === iata) {
      rst.push(flight);
    }
  });
  return rst;
}

let preId;

let flightView;
let airView;


class TemperatureMap extends React.Component {
  render() {
    return (
      <Chart
        height={400}
        scale={scale}
        forceFit
        padding={0}
        onGetG2Instance={(g2Chart) => {
          flightView = g2Chart.get('views')[2];
          airView = g2Chart.get('views')[1];
        }}
        onPlotMove={(ev) => {
          const records = airView.getSnapRecords({
            x: ev.x,
            y: ev.y,
          });
          if (records.length) {
            const obj = records[0]._origin;
            const iata = obj.iata;
            if (preId !== iata) {
              subFlights = getFlights(iata);
              flightView.changeData(subFlights);
              preId = iata;
            }
          }
        }}
        onPlotLeave={() => {
          if (subFlights.length) {
            subFlights = [];
            flightView.changeData([]);
          }
        }}
      >
        <Tooltip showTitle={false} />
        <Legend name="trend" position="left" />
        <View data={mapDv}>
          <Geom
            type="polygon"
            position="longitude*latitude"
            style={{
              fill: '#DDDDDD',
              stroke: '#b1b1b1',
              lineWidth: 0.5,
              fillOpacity: 0.85,
            }}
            tooltip={false}
          />
          <Tooltip visible={false} />
        </View>
        {/* // air view */}
        <View data={airports}>
          <Geom
            type="point"
            position="longitude*latitude"
            color={'rgb(97,145,185)'}
            shape="circle"
            style={{
              stroke: '#eee',
              lineWidth: 1,
            }}
            size={['count', [3, 18]]}
            tooltip="iata*count"
          />
        </View>
        {/* // flight view */}
        <View data={subFlights}>
          <Geom type="edge" position="longitude*latitude" tooltip={false} />
          <Tooltip visible={false} />
        </View>
      </Chart>
    );
  }
}

// CDN END
export default TemperatureMap;