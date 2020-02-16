
import React, { Component } from 'react';
import { Divider, Button, Col, Row } from 'antd';
import ElectricityView from './ElectricityConsumption';
import SolarPanelView from './SolarPanel';



class SolarPowerView extends Component {
	render() {
		return (
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">    
                
                    <section className="jumbotron align-center">
                        <div className="container">
                        <h1 className="cover-heading">Solar Power</h1>
                        {/* <p className="lead">Here is the energy consumption.</p> */}
                        </div>
                    </section>
                    <ElectricityView/>
                    <Divider/>
                    <SolarPanelView/>
                </div>
		)
	}
}



export default SolarPowerView;
