
import React, { Component } from 'react';
import styles from './EcohouseView.less';
import KitchenSection from './Kitchen';
import BathroomSection from './Bathroom';
import LivingroomSection from './Livingrooms';
import GeneralSection from './General';
import BasementSection from './Basement';
import { Divider } from 'antd';
import { generateKeyPairSync } from 'crypto';


class EcohouseView extends Component {




	render() {
		return (
           

                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">    
                
                    <section className="jumbotron align-center">
                        <div className="container">
                        <h1 className="cover-heading">ECO HOUSE</h1>
                        <p className="lead">Here are some actions provided by <strong>ENERGY STAR</strong>&nbsp; 
                        that you can take to save energy from home.&nbsp;
                        Tips are divided based on applied rooms.</p>
                        </div>
                    </section>
                    <Divider/>
                    <GeneralSection/>
                    <Divider/>
                    <KitchenSection/>
                    <Divider/>
                    <LivingroomSection/>
                    <Divider/>
                    <BathroomSection/>
                    <Divider/>
                    <BasementSection/>
    
        
                </div>
          


			
		)
	}
}



export default EcohouseView;
