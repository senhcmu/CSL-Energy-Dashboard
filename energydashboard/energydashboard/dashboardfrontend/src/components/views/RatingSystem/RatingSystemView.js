
import React, { Component } from 'react';
import styles from './RatingSystemView.less';
import {
    Icon, Row, Col, Divider,
  } from 'antd';
import LEEDSection from './LEEDSections';
import BREEAMSection from './BREEAMSections';

class RatingSystemView extends Component {




	render() {
		return (
           

                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">    
                
                    <section className="jumbotron align-center">
                        <div className="container">
                        <h1 className="cover-heading">GREEN RATING SYSTEM</h1>
                        <p className="lead">Here is the energy consumption.</p>
                        </div>
                    </section>


                    <Divider />

                    <LEEDSection/>
                    <Divider />
                    <BREEAMSection/>







{/* 
                        <Row gutter={48} justify="space-around" type="flex" className={styles['m-0']} align="middle">




                        <Col md={{ span: 6 }} sm={{ span: 24 }} className='align-center'>
                            <div className={styles['single-service']}>
                            <Icon type="dashboard" theme="twoTone" />
                            <h3>
                                Performance
                            </h3>
                            <p>
                                
                            </p>
                            </div>
                        </Col>

                        {/* <Col md={{ span: 6 }} sm={{ span: 24 }} className={styles['align-center']}>
                            <script src="https://codefund.io/scripts/fefc6de5-a0ce-46e8-a15d-f43733b5b454/embed.js" />
                            <div id="codefund_ad" />
                        </Col> */}
                        {/* </Row> */}
                    </div>		
		)
	}
}



export default RatingSystemView;
