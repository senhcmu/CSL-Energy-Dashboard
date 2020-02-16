import Texty from 'rc-texty';
import Button from 'antd/lib/button';
import 'rc-texty/assets/index.css';
import React from 'react';

class SimilarDemo extends React.Component{


  render(){
    return (
      <div className="texty-demo" style={{ marginTop: 16 }}>
                <Texty 
                type={this.props.type}
                mode={this.props.mode}
                >
                {this.props.show && 'Ant Motion'}
                </Texty>
      </div>
    );
  }
}
export default SimilarDemo;








