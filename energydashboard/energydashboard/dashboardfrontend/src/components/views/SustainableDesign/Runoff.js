


import React, { Component } from 'react';
import styles from './SustainableDesignView';
import {
    Icon, Row, Col
  } from 'antd';


class RunoffSection extends Component {
    render() {
		return (
            <div>
                
                <section className="jumbotron align-center">
                    <div className="container">
                    <h1 className="cover-heading">Runoff Reuse</h1>
                    <p className="lead">Here is the energy consumption.</p>
                    </div>
                </section>


    <div>
        <Row gutter={48} justify="space-around" type="flex" className={`${styles['m-0']} ${styles['about-section']}`} align="middle">
          <Col md={{ span: 18 }} sm={{ span: 24 }} className={styles['align-center']}>
            <h3>The reuse of runoff</h3>
            <p>
            All non-potable use water (such as toilet flushing, irragation) are supplied by collected rainwater. The runoff 
            from CSL and ESC building rooftop are collected in a 1,500 gallon cistern for irragation. The overflow is then stored 
            in 100,000 gallon which also acts as a landscape feature. The wetland will purify the water and the overflow is then diverted into 
            an underground 60,000 gallon water storage tank. Water can be retrieved from this tank for non-potable use and can be further purified
            distillation unit powered by solar energy for irragation purpose for Phipps Conservatory and Botanical Gardens.
            </p>
          </Col>
        </Row>
      </div>
    </div>

                        )
	}
}



export default RunoffSection;
