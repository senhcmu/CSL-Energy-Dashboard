import Button from 'antd/lib/button';
import QueueAnim from 'rc-queue-anim';
import React from 'react';
import styles from './EcohouseView';
import Texty from 'rc-texty';
import {
    Icon, Row, Col
  } from 'antd';
import 'rc-texty/assets/index.css';

class BasementShow extends React.Component{
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
                        <h2>Wash clothes in cold water</h2>
                        <p>
                        Use cold water setting can use less heating water.
                        </p>
                        <h3>Facts</h3>
                        <p>
                        Water heating makes up about <strong>90%</strong> of the energy it takes to operate a clothes washer. Specially formulated laundry detergents are available for cold water washing.

                        </p>
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
                        <h2>Use the clothes dryer efficiently</h2>
                        <p>
                        Clean the lint trap after each use to improve the air circulation and dryer efficiency.
                        </p>
                        <h3>Facts</h3>
                        <p>
                        With more than <strong>80%</strong> of US homes having a clothes dryer - accounting for <strong>6%</strong> of residential electricity consumption

                        </p>
                    </Col>
                    </Row>
                </div>
                

                
                <br/>




                
              </ul>
            </div>,
            
          ] : null}
        </QueueAnim>
    );
  }
};

export default BasementShow;