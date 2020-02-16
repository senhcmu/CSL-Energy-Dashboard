import Button from 'antd/lib/button';
import QueueAnim from 'rc-queue-anim';
import React from 'react';
import styles from './EcohouseView';
import Texty from 'rc-texty';
import {
    Icon, Row, Col
  } from 'antd';
import 'rc-texty/assets/index.css';

class BathroomShow extends React.Component{
    state = {
        show: false,
        mode: 'sync',
        type: 'left'
      };

      onClick = () => {
        this.setState({
          show: !this.state.show
        });
      }
  
  render() {
    return (
      
        <QueueAnim className="demo-content"
          key="demo"
          interval={200}
          type={['right', 'left']}
          ease={['easeOutQuart', 'easeInOutQuart']}>
          {this.props.show ? [
            <div className="demo-thead" key="a">
              <ul>
              <div>
                <Row gutter={48} justify="space-around" type="flex" className={`${styles['m-0']} ${styles['about-section']}`} align="middle">
                <Col md={{ span: 18 }} sm={{ span: 24 }} className={styles['align-center']}>
                    <h2>Use low-flow showerhead</h2>
                    <p>
                    A low-flow showerhead beats both bath and old-fashioned showerhead on saving water and the energy used to heat up water
                    </p>
                    <h3>Facts</h3>
                    <p>With a new 2.5 gallon-per-minute(low-flow) showerhead, a 7-minute shower uses less water than a full bath.</p>
                </Col>
                </Row>
            </div>
            </ul>
            </div>,



            <div className="demo-thead" key="b">
              <ul>


            <div>
                <Row gutter={48} justify="space-around" type="flex" className={`${styles['m-0']} ${styles['about-section']}`} align="middle">
                <Col md={{ span: 18 }} sm={{ span: 24 }} className={styles['align-center']}>
                    <h2>Find and fix leaky features</h2>
                    <p>
                    Leaky faucet can waste water and the energy needed to heat up the water.
                    </p>
                    <h3>Facts</h3>
                    <p>A faucet leak amounting to one drip per second would add up to over <strong>1.600</strong> gallons over the course of a year.</p>
                </Col>
                </Row>
            </div>
                        
                
                <br/>

                

            

              </ul>
            </div>,
            <div className="demo-tbody" key="c">
              <ul>


                <div>
                    <Row gutter={48} justify="space-around" type="flex" className={`${styles['m-0']} ${styles['about-section']}`} align="middle">
                    <Col md={{ span: 18 }} sm={{ span: 24 }} className={styles['align-center']}>
                        <h2>Turn the water off when not needed</h2>
                        <p>
                        Turn off water when shaving or brushing your teeth. Even cold needs energy to pump and treat.
                        </p>
                        <h3>Facts</h3>
                        <p>
                        Turning the water off when brushing and shaving also helps preserve our nation's water resources
                        </p>
                    </Col>
                    </Row>
                </div>
                





                
              </ul>
            </div>,
            
          ] : null}
        </QueueAnim>
    );
  }
};

export default BathroomShow;