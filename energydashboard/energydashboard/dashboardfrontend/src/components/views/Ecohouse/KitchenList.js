import Button from 'antd/lib/button';
import QueueAnim from 'rc-queue-anim';
import React from 'react';
import styles from './EcohouseView';
import Texty from 'rc-texty';
import {
    Icon, Row, Col
  } from 'antd';
import 'rc-texty/assets/index.css';

class KitchenShow extends React.Component{
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
                        <h2>Use dishwasher</h2>
                        <p>
                        Washing dishes with dishwasher will consume less water and energy than washing dishes by hand.
                        </p>
                        <h3>Facts</h3>
                        <p>Washing dishes by hand consumes about <strong>5,200</strong> gallons of water per year</p>
                    </Col>
                    </Row>
                </div>
              

                <br/>

              </ul>
            </div>,
            <div className="demo-tbody" key="b">
              <ul>

              <div>
                    <Row gutter={48} justify="space-around" type="flex" className={`${styles['m-0']} ${styles['about-section']}`} align="middle">
                    <Col md={{ span: 18 }} sm={{ span: 24 }} className={styles['align-center']}>
                        <h2>Keep your refrigerator door closed</h2>
                        <p>
                        The warm and moist air from outside makes the compressor work harder.

                        </p>
                        <h3>Facts</h3>
                        <p>The average refrigerator is opened <strong>33</strong> times a day</p>
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
                        <h2>Choose <strong>ENERGY STAR</strong> certified appliances</h2>
                        <p>
                        According to IRENA, Geothermal energy is heat derived within the sub-surface of the earth. 
                        Water and/or steam carry the geothermal energy to the Earth’s surface. And it can be used for heating, 
                        cooling or clean electricity.

                        </p>
                        <h3>Facts</h3>
                        <p></p>
                    </Col>
                    </Row>
                </div>




                
              </ul>
            </div>,
             <div className="demo-tbody" key="d">
             <ul>
             <div>
                    <Row gutter={48} justify="space-around" type="flex" className={`${styles['m-0']} ${styles['about-section']}`} align="middle">
                    <Col md={{ span: 18 }} sm={{ span: 24 }} className={styles['align-center']}>
                        <h2>Use microwave for cooking</h2>
                        <p>
                        Microwave is the most efficient way to cook.
                        </p>
                        <h3>Facts</h3>
                        <p>Reduce your cooking energy by as much as <strong>80%</strong> when using the microwave.</p>
                    </Col>
                    </Row>
                </div>






                 </ul>
                 </div>

            
          ] : null}
        </QueueAnim>
    );
  }
};

export default KitchenShow;