
import React, { Component } from 'react';
import { Divider, Button, Col, Row } from 'antd';
import SunnyDaySolarPower from './Solar/SunnyDaySolar';
import CloudyDaySolarPower from './Solar/CloudyDaySolar';


class ElectricityView extends Component {
    state = {
        mode: 'sunny'
      };

      onSunnyClick = () => {
        this.setState({
          mode: "sunny"
        });
      }

      onCloudyClick = () => {
        this.setState({
          mode: "cloudy"
        });
      }
	render() {
		return (
                    <div className='align-center'>    
                    {/* <p className="lead">Click the link above to see the difference between geothermal and traditional system energy consumption portion.</p> */}
                    <Row gutter={48}>
                        <Col span={12} className='align-center'>
                        <p className="buttons align-center">
                            <Button type="primary" onClick = {this.onSunnyClick}>Sunny Day</Button>
                        </p>
                        </Col>
                        <Col span={12} className='align-center'>
                            <p className="buttons align-center">
                                <Button type="primary" onClick = {this.onCloudyClick}>Cloudy Day</Button>
                            </p>
                        </Col>
                    </Row>
                    { this.state.mode == 'sunny' && <h2>Sunny Day</h2>}
                    { this.state.mode == 'sunny' && <SunnyDaySolarPower/>}
                    { this.state.mode == 'cloudy' && <h2>Cloudy Day</h2>}
                    { this.state.mode == 'cloudy' && <CloudyDaySolarPower/>}

                    <h2> Electricity Consumption</h2>
                    </div>
		)
	}
}

export default ElectricityView;
