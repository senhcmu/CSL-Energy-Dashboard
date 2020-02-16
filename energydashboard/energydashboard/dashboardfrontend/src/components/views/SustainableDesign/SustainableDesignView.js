
import React, { Component } from 'react';
import styles from './SustainableDesignView.less';
import {
    Icon, Row, Col, Divider,
  } from 'antd';
import LightingSection from './Lighting';
import RunoffSection from './Runoff';
import VentilationSection from './Ventilation';



class SustainableDesignView extends Component {




	render() {
		return (
           

                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">    
                
                    <section className="jumbotron align-center">
                        <div className="container">
                        <h1 className="cover-heading">SUSTAINABLE DESIGN</h1>
                        <p className="lead">Here is the energy consumption.</p>
                        </div>
                    </section>
                    <Divider/>
                    <LightingSection/>

                    <Divider/>
                    <RunoffSection/>

                    <Divider/>
                    <VentilationSection/>

    
        
                </div>
          


			
		)
	}
}



export default SustainableDesignView;
