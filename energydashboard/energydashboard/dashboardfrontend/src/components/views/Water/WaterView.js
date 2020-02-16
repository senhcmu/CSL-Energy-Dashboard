import React, { Component } from 'react';
import { Divider, Button, Col, Row } from 'antd';
import RecyclingSysView from './RecyclingSys';
import WetlandCompositionView from './WetlandComposition';
class WaterView extends Component {
	render() {
		return (
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">    
                
                    <section className="jumbotron align-center">
                        <div className="container">
                        <h1 className="cover-heading">WATER</h1>
                        </div>
                    </section>
                    {/* <RecyclingSysView/> */}
                    <Divider/>
                    <WetlandCompositionView/>
                </div>
		)
	}
}
export default WaterView;
