import React, { Component } from 'react';
import { Divider, Button, Col, Row } from 'antd';
import LightingConsumptionView from './LightingConsumption';
// import SectionDrawingView from './SectionDrawing';
class LightingView extends Component {
	render() {
		return (
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">    
                
                    <section className="jumbotron align-center">
                        <div className="container">
                        <h1 className="cover-heading">LIGHTING</h1>
                        </div>
                    </section>
                    <LightingConsumptionView/>
                    <Divider/>
                    {/* <SectionDrawingView/> */}
                </div>
		)
	}
}
export default LightingView;
