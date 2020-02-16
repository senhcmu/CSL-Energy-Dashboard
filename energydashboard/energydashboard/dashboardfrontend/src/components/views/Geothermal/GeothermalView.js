
import React, { Component } from 'react';
import { Divider, Button, Col, Row } from 'antd';
import GeoEnergyConsumptionView from './GeoEnergyConsumption';
import GeoIllustrationView from './GeoIllustration';



class GeothermalView extends Component {
	render() {
		return (
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">    
                
                    <section className="jumbotron align-center">
                        <div className="container">
                        <h1 className="cover-heading">Geothermal Energy</h1>
                        </div>
                    </section>
                    <GeoEnergyConsumptionView/>
                    <Divider/>
                    <GeoIllustrationView/>
                </div>
		)
	}
}



export default GeothermalView;
