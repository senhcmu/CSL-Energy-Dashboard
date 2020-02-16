import Button from 'antd/lib/button';
import QueueAnim from 'rc-queue-anim';
import React from 'react';
import styles from './EcohouseView';
import Texty from 'rc-texty';
import {
    Icon, Row, Col
  } from 'antd';
import 'rc-texty/assets/index.css';

class GeneralShow extends React.Component{
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
                        <h2>Turn off lights and fans</h2>
                        <p>
                        Turn off the lights and fans when you are not in the rooms and not needed.

                        </p>
                        <h3>Facts</h3>
                        <p>It costs almost <strong>$20</strong> a year to leave one light on for 8 hours a day</p>
                        



                        
                        <p className="buttons" style={{ marginBottom: 16 }}>
                        <Button type="primary" onClick={this.onClick}>Save More</Button>
                        </p>
                        {this.state.show && <div className="texty-demo" style={{ marginTop: 16 }}>
                        <Texty 
                        type={this.state.type}
                        mode={this.state.mode}
                        >
                        · Turn off electronics when you are not using them.
                        </Texty>
                        <Texty 
                        type={this.state.type}
                        mode={this.state.mode}
                        >
                        · Use lights with motion sensors.
                        </Texty>
                        <Texty 
                        type={this.state.type}
                        mode={this.state.mode}
                        >
                        · Use dimmer switches to avoid lighting a room more than you need.
                        </Texty>
                        </div>}


                    
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
                        <h2>Change HVAC system air filter</h2>
                        <p>
                        Check the HVAC filter every month during heavy use months or change the filter every 3 months.&nbsp;
                        Dirty filter slows down the air flow and makes the system work harder to keep you comfortable. 
                        </p>
                        <h3>Facts</h3>
                        <p>The average home spends more than <strong>$2,000</strong> per year on utility bills, nearly half going to heating and cooling</p>
                    


                        <p className="buttons" style={{ marginBottom: 16 }}>
                        <Button type="primary" onClick={this.onClick}>Save More</Button>
                        </p>
                        {this.state.show && <div className="texty-demo" style={{ marginTop: 16 }}>
                        <Texty 
                        type={this.state.type}
                        mode={this.state.mode}
                        >
                        · Have a professional tune up your HVAC system.
                        </Texty>
                        <Texty 
                        type={this.state.type}
                        mode={this.state.mode}
                        >
                        · Seal leaky air ducts.
                        </Texty>
                        <Texty 
                        type={this.state.type}
                        mode={this.state.mode}
                        >
                        · Program your thermostat to save energy when you are asleep or away.
                        </Texty>
                        </div>}
                    
                    
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
                        <h2>Plug electronics into a power strip</h2>
                        <p>
                        Power strip can make it more convenient to turn off/turn on electronics connected
                        </p>
                        <h3>Facts</h3>
                        <p>It is estimated that stand by power accounts for more than <strong>$11 billion</strong> in annual U.S. energy costs</p>
                        <p className="buttons" style={{ marginBottom: 16 }}>
                        
                        
                        <Button type="primary" onClick={this.onClick}>Save More</Button>
                        </p>
                        {this.state.show && <div className="texty-demo" style={{ marginTop: 16 }}>
                        <Texty 
                        type={this.state.type}
                        mode={this.state.mode}
                        >
                        · Save money on utility bills.
                        </Texty>
                        </div>}
                    
                    
                    
                    
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

export default GeneralShow;