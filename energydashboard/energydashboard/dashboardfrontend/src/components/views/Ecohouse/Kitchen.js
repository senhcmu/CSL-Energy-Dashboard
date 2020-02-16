


import React, { Component } from 'react';
import Button from 'antd/lib/button';
import 'rc-texty/assets/index.css';
import KitchenShow from './KitchenList';


class KitchenSection extends Component {
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
                    <h1 className="cover-heading">Kitchen</h1>
                    <p className="lead">Here is the energy consumption.</p>
                    </div>
                </section>
                <div className="queue-demo ">
                  <p className="buttons align-center">

                    <Button type="primary" onClick={this.onClick}>{this.state.button}</Button>
                  </p>
                  <KitchenShow
                    show={this.state.show}
                  
                  />


                  </div>






      

</div>

                        )
	}
}



export default KitchenSection;
