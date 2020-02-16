


import React, { Component } from 'react';
import styles from './NaturalResourcesView';
import {
    Icon, Row, Col
  } from 'antd';


class SolarPowerSection extends Component {
    render() {
		return (
            <div>
                
                <section className="jumbotron align-center">
                    <div className="container">
                    <h1 className="cover-heading">Solar Power</h1>
                    <p className="lead">Here is the energy consumption.</p>
                    </div>
                </section>
                
        <div>
        <Row gutter={48} justify="space-around" type="flex" className={`${styles['m-0']} ${styles['about-section']}`} align="middle">
          <Col md={{ span: 18 }} sm={{ span: 24 }} className={styles['align-center']}>
            <h3>What's SOLAR POWER</h3>
            <p>
            According to the definition of SEIA, Solar power is energy from the sun that is converted into thermal or electrical energy. 
            Solar energy is the cleanest and most abundant renewable energy source available. Can be used to generate electricity and heating water
            </p>
          </Col>
        </Row>
      </div>
      <br/>

      <div>
        <Row gutter={48} justify="space-around" type="flex" className={`${styles['m-0']} ${styles['about-section']}`} align="middle">
          <Col md={{ span: 18 }} sm={{ span: 24 }} className='align-left'>
            <h3>Solar Technologies</h3>
            <p>Three main ways to harness solar energy.</p>

            <Row gutter={48}>
                            <Col span={24} className='align-center'>
                                <div className={styles['single-service']}>
                                <Icon type="check-circle" theme="twoTone" />
                                <h3>
                                    Photovoltaics
                                </h3>
                                <p>
                                    
                                </p>
                                </div>
                            </Col>

                            <Col span={24} className='align-center'>
                                <div className={styles['single-service']}>
                                <Icon type="setting" theme="twoTone" />
                                <h3>
                                    Solar heating &amp; cooling
                                </h3>
                                <p>
                                    
                                </p>
                                </div>
                            </Col>

                            <Col span={24} className='align-center'>
                                <div className={styles['single-service']}>
                                <Icon type="setting" theme="twoTone" />
                                <h3>
                                    Concentrating solar power
                                </h3>
                                <p>
                                    
                                </p>
                                </div>
                            </Col>
                            </Row>
          </Col>
        </Row>
      </div>
      <br/>

      <div>
        <Row gutter={48} justify="space-around" type="flex" className={`${styles['m-0']} ${styles['about-section']}`} align="middle">
          <Col md={{ span: 18 }} sm={{ span: 24 }} className={styles['align-center']}>
            <h3>Solar power in CSL &#38; ESC</h3>
            <p>
            According to IRENA, Geothermal energy is heat derived within the sub-surface of the earth. 
            Water and/or steam carry the geothermal energy to the Earth’s surface. And it can be used for heating, 
            cooling or clean electricity.

            </p>
          </Col>
        </Row>
      </div>
      {/* <div>
        <Row gutter={48} justify="space-around" type="flex" className={`${styles['m-0']} ${styles['about-section']}`} align="middle">
          <Col md={{ span: 18 }} sm={{ span: 24 }} className='align-center'>
            <h3>Solar Technologies</h3>
            <p>
                Three main ways
            </p>
          </Col>
        </Row>
      </div> */}




                        

                </div>

                        )
	}
}



export default SolarPowerSection;
