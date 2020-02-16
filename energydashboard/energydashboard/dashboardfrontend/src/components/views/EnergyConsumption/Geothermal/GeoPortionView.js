
import React, { Component } from 'react';
import styles from './GeoPortionView.less';
import { Divider, Button, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import Comprise from './Comprise';
import Traditional from './Traditional'



class GeoPortionView extends Component {




	render() {
		return (
           

                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">    
                
                    <section className="jumbotron align-center">
                        <div className="container">
                        <h1 className="cover-heading">Geothemal System Portion</h1>
                        <p className="lead">Here is energy consumption portion of geothermal system.</p>
                        </div>
                    </section>
                    {/* <Row gutter={24}> */}
                    {/* <Col span={12} offset={6} className='align-center'> */}

  
                    <Comprise/>
                    {/* </Col>
                    </Row> */}
                    <Divider/>
                
                <section className="jumbotron align-center">
                    <div className="container">
                    <h1 className="cover-heading">Traditional System Portion</h1>
                    <p className="lead">Here is energy consumption portion of a traditional system.</p>
                    </div>
                </section>
                {/* <Row gutter={24}>
                <Col span={12} offset={6}className='align-center'> */}
                <Traditional/>
                {/* </Col>
                </Row> */}


                </div>
          


			
		)
	}
}



export default GeoPortionView;
