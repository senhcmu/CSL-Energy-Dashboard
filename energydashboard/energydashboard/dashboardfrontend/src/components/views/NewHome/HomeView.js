
import React, { Component } from 'react'
import DocumentTitle from 'react-document-title';
import {
    Layout, Carousel, Button, Icon, Row, Col, Divider,
  } from 'antd';
import QueueAnim from 'rc-queue-anim';
import styles from './HomeView.less';
import Landscape from './CSL.jpg';

const bgStyle = {
	height: screen.height,
	backgroundImage: `url(${Landscape})`,
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	opacity: 0.9
};
function typeFunc(a) {
  if (a.key === 'line') {
    return 'right';
  } else if (a.key === 'button') {
    return 'bottom';
  }
  return 'left';
}

class HomeView extends Component {

	render() {
		return (
            <div className="page" style={bgStyle}>
          <QueueAnim className="banner-text-wrapper1" type={typeFunc} delay={300} key="banner">
            <h2 key="h2">Average building</h2>
            <h2>consumes</h2>
            <h2><p>16.9Kwh/ft2</p></h2>
            <p key="content">last year</p>
            <span className="line" key="line" />
            
    
        </QueueAnim>


        <QueueAnim className="banner-text-wrapper" type={typeFunc} delay={300} key="banner1">
            <h2 key="h2">CSL consumes</h2>
            <h2><p>5.5Kwh/ft2</p></h2>
            <p key="content">last year</p>
            <p key="content1">which only takes about</p>
            <h2><p>1/3</p></h2>

            <div key="button1" className="start-button clearfix">
              <a>
                LEARN MORE
              </a>
            
            {/* <h2 key="h2">Average building consumes <p>16.9Kwh/ft2</p></h2>
            <p key="content">last year</p> */}
            <span className="line" key="line" />
            </div>
        </QueueAnim>




        

      </div>


			
		)
	}
}



export default HomeView;
