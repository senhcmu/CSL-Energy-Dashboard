
import React, { Component } from 'react';
import { Divider, Button, Col, Row } from 'antd';
import GeoSysView from './GeoSysView';
import TraditionalSysView from './TraditionalSysView';

class GeoEnergyConsumptionView extends Component {
	render() {
		return (
            <div>
                    {/* <div className='align-center'>    
                    <h2> Traditional System</h2>
                    <TraditionalSysView/>
                    

                    </div> */}
                    <div className='align-center'>    
                    <h2> Energy Consumption Comparison</h2>
                    <GeoSysView/>

                    </div>
            </div>
		)
	}
}

export default GeoEnergyConsumptionView;
