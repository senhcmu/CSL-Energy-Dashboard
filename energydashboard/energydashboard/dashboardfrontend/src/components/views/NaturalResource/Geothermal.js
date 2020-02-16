


import React, { Component } from 'react';
import styles from './NaturalResourcesView';
import {
    Icon, Row, Col
  } from 'antd';


class GeothermalSection extends Component {
    render() {
		return (
            <div>
                
                <section className="jumbotron align-center">
                    <div className="container">
                    <h1 className="cover-heading">Geothermal</h1>
                    <p className="lead">Here is the energy consumption.</p>
                    </div>
                </section>


    <div>
        <Row gutter={48} justify="space-around" type="flex" className={`${styles['m-0']} ${styles['about-section']}`} align="middle">
          <Col md={{ span: 18 }} sm={{ span: 24 }} className={styles['align-center']}>
            <h3>What's GEOTHERMAL</h3>
            <p>
            According to IRENA, Geothermal energy is heat derived within the sub-surface of the earth. 
            Water and/or steam carry the geothermal energy to the Earth’s surface. And it can be used for heating, 
            cooling or clean electricity.

            </p>
          </Col>
        </Row>
      </div>
      <br/>

      <div>
        <Row gutter={48} justify="space-around" type="flex" className={`${styles['m-0']} ${styles['about-section']}`} align="middle">
          <Col md={{ span: 18 }} sm={{ span: 24 }} className={styles['align-center']}>
            <h3>Geothermal in CSL &#38; ESC</h3>
            <p>
            According to IRENA, Geothermal energy is heat derived within the sub-surface of the earth. 
            Water and/or steam carry the geothermal energy to the Earth’s surface. And it can be used for heating, 
            cooling or clean electricity.

            </p>
          </Col>
        </Row>
      </div>




                        

                </div>

                        )
	}
}



export default GeothermalSection;
