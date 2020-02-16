


import React, { Component } from 'react';
import styles from './SustainableDesignView';
import {
    Icon, Row, Col
  } from 'antd';


class LightingSection extends Component {
    render() {
		return (
            <div>
                
                <section className="jumbotron align-center">
                    <div className="container">
                    <h1 className="cover-heading">Lighting Design</h1>
                    {/* <p className="lead">Here is the energy consumption.</p> */}
                    </div>
                </section>


    <div>
        <Row gutter={48} justify="space-around" type="flex" className={`${styles['m-0']} ${styles['about-section']}`} align="middle">
          <Col md={{ span: 18 }} sm={{ span: 24 }} className={styles['align-center']}>
            <h3>Utilization of natural daylighting</h3>
            <p>
            The lighting system in CSL deploys occupancy sensors to detect the presence of occupancy. If no presence of occupancy, the lighting would be turned off to save energy.
            There is also daylight sensor deployed to utilize the maximum of natural daylighting. The lighting system will be turned on only with insufficient daylighting. 
            The dimming ballast can adjust the artificial lighting based on the natural lighting.
            </p>
            <p>
            The tilted roof can help the natural daylighting reach deeper into interior to reduce the use of artificial lighting.
            </p>
            <p>
            A series of outside shading is designed to prevent direct sunlighting causing glare problem.
            </p>


          </Col>
        </Row>
      </div>
                </div>

                        )
	}
}



export default LightingSection;
