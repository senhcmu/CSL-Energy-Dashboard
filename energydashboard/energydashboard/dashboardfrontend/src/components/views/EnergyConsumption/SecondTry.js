import $ from "jquery";
import React from "react";
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";
import data from './firstFloor.geo.json'

class SecondTry extends React.Component {
  render() {
    const { Image } = Guide;
    return (
      <div>
        <Chart
          height={window.innerHeight}
          padding={[0, 30, 60, 30]}
          data={data}
          forceFit
        >
          <Tooltip showTitle={false} />
          <Legend offset={10} />
          <Geom
            type="heatmap"
            position="g*l"
            color={[
              "tmp",
              "#F51D27-#FA541C-#FF8C12-#FFC838-#FAFFA8-#80FF73-#12CCCC-#1890FF-#6E32C2"
            ]}
          />
          <Guide>
            <Image
              start={["min", "max"]}
              end={["max", "min"]}
              src="../../../../static/floor1.png"
            />
          </Guide>
        </Chart>
      </div>
    );
  }
}

export default SecondTry;


