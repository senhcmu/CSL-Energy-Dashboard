
import React, { Component } from 'react';
import styles from './SunnyView.less';
import { Divider, Button, Col, Row } from 'antd';
import CloudySolarPower from './CloudySolar';
import { Link } from 'react-router-dom';
import SolarWaffle from './SaveSolar';



class CloudyView extends Component {




	render() {
		return (
           

                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">    
                
                    <section className="jumbotron align-center">
                        <div className="container">
                        <h1 className="cover-heading">Sunny Day</h1>
                        <p className="lead">Here is the energy consumption.</p>
                        </div>
                    </section>
                    <Divider />
                    <Row gutter={48}>
                        <Col span={12} className='align-center'>

                    <h2> <Link to="/sunny/">Sunny Day</Link></h2>
                    </Col>
                    <Col span={12} className='align-center'>
                    <h2> <Link to="/cloudy/">Cloudy Day</Link></h2>
                    <br/>
                    <br/>
                    
                    </Col>
                    </Row>
                    <CloudySolarPower/>
                    <Divider/>
                    <SolarWaffle/>
                </div>
          


			
		)
	}
}



export default CloudyView;
