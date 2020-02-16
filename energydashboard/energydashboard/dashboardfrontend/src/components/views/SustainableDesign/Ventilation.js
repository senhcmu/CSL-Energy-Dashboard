


import React, { Component } from 'react';
import styles from './SustainableDesignView';
import {
    Icon, Row, Col
  } from 'antd';


class VentilationSection extends Component {
    render() {
		return (
            <div>
                
                <section className="jumbotron align-center">
                    <div className="container">
                    <h1 className="cover-heading">Ventilation Design</h1>
                    <p className="lead">Here is the energy consumption.</p>
                    </div>
                </section>


    <div>
        <Row gutter={48} justify="space-around" type="flex" className={`${styles['m-0']} ${styles['about-section']}`} align="middle">
          <Col md={{ span: 18 }} sm={{ span: 24 }} className={styles['align-center']}>
            <h3>Operable windows and Demand Control Ventilation</h3>
            <p>
            Operable windows are provided to reduce the use of HVAC system. Alert system is deployed to notify occupants 
            when is appropriate to open windows.

            Demand Control Ventilation system combines CO2 concentration (collected by CO2 sensor) and occupany level to determine 
            the volume of fresh air. So that the energy used for delieverying fresh air can be minimized.
            </p>
          </Col>
        </Row>
      </div>
                </div>

                        )
	}
}



export default VentilationSection;
