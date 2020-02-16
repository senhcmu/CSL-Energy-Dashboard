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
import DataSet from "@antv/data-set";

class SolarWaffle extends React.Component {
  render() {
    const data = [
      {
        name: "Internet Explorer",
        value: 26
      }
    ];
    const imageMap = {
      "Internet Explorer":
        "https://gw.alipayobjects.com/zos/rmsportal/eOYRaLPOmkieVvjyjTzM.png"
    };
    const dv = new DataSet.View().source(data).transform({
      type: "waffle",
      rows: 10
    });
    return (

        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">    
                
                <section className="jumbotron align-center">
                    <div className="container">
                    <h1 className="cover-heading">ENERGY CONSUMPTION</h1>
                    <p className="lead">The energy saved can supply following schools.</p>
                    </div>
                </section>
        <Chart height={window.innerHeight} padding={20} forceFit data={dv}>
          <Geom
            type="point"
            position="x*y"
            color="name"
            shape={["name", name => ["image", imageMap[name]]]}
            size={(window.innerWidth - 40) / 20}
          />
        </Chart>
      </div>
    );
  }
}

export default SolarWaffle;
