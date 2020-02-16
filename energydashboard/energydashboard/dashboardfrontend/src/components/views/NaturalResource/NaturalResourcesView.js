
import React, { Component } from 'react';
import styles from './NaturalResourcesView.less';
import { Divider } from 'antd';
import GeothermalSection from './Geothermal';
import SolarPowerSection from './SolarPower';



class NaturalResourcesView extends Component {




	render() {
		return (
           

                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">    
                
                    <section className="jumbotron align-center">
                        <div className="container">
                        <h1 className="cover-heading">NATURAL RESOURCES</h1>
                        <p className="lead">There are two natural resources used in CSL and ESC building.&nbsp;
                        <strong>Solar power</strong> and <strong>geothermal energy</strong>
.</p>
                        </div>
                    </section>

                    <Divider/>

                    <GeothermalSection />

                    <Divider/>
                    <SolarPowerSection />




                    
    
        
                </div>
          


			
		)
	}
}



export default NaturalResourcesView;
