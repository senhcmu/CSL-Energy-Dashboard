
import React, { Component } from 'react';
import styles from './EnergyConsumptionView.less';
import { Divider, Button, Col, Row } from 'antd';
import Demo from './try';
import Test from './dwd';
import SecondTry from './SecondTry';
import GeoPower from './Geothermal/Geothermal';
import Loss from './Loss';
import Lighting from './Lighting';

import { Link } from 'react-router-dom';



class EnergyConsumptionView extends Component {




	render() {
		return (
           

                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">    
                
                    <section className="jumbotron align-center">
                        <div className="container">
                        <h1 className="cover-heading">ENERGY CONSUMPTION</h1>
                        <p className="lead">Here is the energy consumption.</p>
                        </div>
                    </section>

                    <Divider />
                    <SecondTry/>
                    <Divider />

                    <div className='align-center'>
                    <h2> <Link to="/geo/">GEOTHERMAL</Link></h2>
                    <p className="lead">Click the link above to see the difference between geothermal and traditional system energy consumption portion.</p>
                    </div>


                    <Divider />
                    <section className="jumbotron align-center">
                        <div className="container">
                        <h1 className="cover-heading">SOLAR POWER</h1>
                        <p className="lead">Click the links below to check how much solar supply on a sunny and cloudy day.</p>
                        </div>
                    </section>
                    

                    <Row gutter={48}>
                        <Col span={12} className='align-center'>
                            <h2> <Link to="/sunny/">Sunny Day</Link></h2>
                        </Col>
                        <Col span={12} className='align-center'>
                            <h2> <Link to="/cloudy/">Cloudy Day</Link></h2>
                        </Col>
                    </Row>
                    <Divider />
                    <div className='align-center'>
                    <h2> <Link to="/sankey/">ELECTRICITY FLOW</Link></h2>
                    <p className="lead">Click the link above to the electricity disaggregation of last month.</p>
                    </div>

                    <Divider />


                    <Loss/>
                    <Divider />
                    <Lighting/>
                    
                </div>
          


			
		)
	}
}



export default EnergyConsumptionView;
