


import React, { Component } from 'react';
import Button from 'antd/lib/button';
import 'rc-texty/assets/index.css';
import BathroomShow from './BathroomList'


class BathroomSection extends Component {
state = {
    show: false,
    button: "Show"
  };


  onClick = () => {
    this.setState({
      show: !this.state.show,
      button: this.state.button == "Show" ? "Close" : "Show"  
    });
  }
    render() {
		return (
            <div>
                
                <section className="jumbotron align-center">
                    <div className="container">
                    <h1 className="cover-heading">Bathroom</h1>
                    <p className="lead">Here is the energy consumption.</p>
                    </div>
                </section>
                <div className="queue-demo ">
                  <p className="buttons align-center">

                    <Button type="primary" onClick={this.onClick}>{this.state.button}</Button>
                  </p>
                  <BathroomShow
                    show={this.state.show}
                  
                  />


                  </div>
                
    </div>

                        )
	}
}



export default BathroomSection;
