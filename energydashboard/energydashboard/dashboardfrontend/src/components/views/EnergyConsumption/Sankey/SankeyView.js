
import React, { Component } from 'react';
import styles from './SankeyView.less';
import { Divider, Button, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import SankeyDia from './Sankey';



class SankeyView extends Component {




	render() {
		return (
           

                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">    
                
                    <section className="jumbotron align-center">
                        <div className="container">
                        <h1 className="cover-heading">Electricity Disaggregate</h1>
                        <p className="lead">Here is the electricity disaggregation of last month.</p>
                        </div>
                    </section>
                    <Divider />
                    

                    <SankeyDia/>
                </div>
          


			
		)
	}
}



export default SankeyView;
