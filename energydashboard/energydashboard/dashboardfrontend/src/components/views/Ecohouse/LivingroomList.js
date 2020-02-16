import Button from 'antd/lib/button';
import QueueAnim from 'rc-queue-anim';
import React from 'react';
import styles from './EcohouseView';
import Texty from 'rc-texty';
import {
    Icon, Row, Col
  } from 'antd';
import 'rc-texty/assets/index.css';

class LivingroomShow extends React.Component{
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
                        <h2>Use <strong>ENERGY STAR</strong> certified appliances</h2>
                        <p>
                        Check for <strong>ENERGY START</strong> model before pruchase TV, DVD or Blue-ray disc player. So that you can consume less energy while enjoying movies and watching TV.
                        </p>
                        <h3>Facts</h3>
                        <p>
                        If every TV, DVD, and home theater system purchased in the U.S. were certified, it would prevent more than <strong>2.2 billion</strong> pounds of greenhouse gas emissions per year.
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
            <h2>Caulk and weather-strip around windows and doors</h2>
            <p>
            Check for signs of air leakage around windows and doors.&nbsp;
            Then use caulk and weather-stripping to stop the leaks.
            </p>
            <h3>Facts</h3>
            <p>Homeowners typically save up to $200 a year in heating and 
            cooling costs by air sealing their homes and adding insulation</p>


            
          </Col>
        </Row>
      </div>
                

                
                <br/>




                
              </ul>
            </div>
            
          ] : null}
        </QueueAnim>
    );
  }
};

export default LivingroomShow;