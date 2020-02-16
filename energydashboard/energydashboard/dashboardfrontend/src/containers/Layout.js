import React from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;
const headerStyle = {
        width: "120px",
        height: "31px",
        // backgroundImage: "../../static/Phipps-Logo-Vertical-Green.jpg",
        margin: "16px 24px 16px 0",
        float: "left",

}


const BasicLayout = (props) => {
    return (
        <Layout className="layout">
        <Header>
          <div />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1"><Link to="/">HOME</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/energyconsumption">ENERGY CONSUMPTION</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/solar">SOLAR POWER</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/geothermal">GEOTHERMAL</Link></Menu.Item>
            <Menu.Item key="5"><Link to="/water">WATER</Link></Menu.Item>
            <Menu.Item key="6"><Link to="/lighting">LIGHTING</Link></Menu.Item>
            <Menu.Item key="7"><Link to="/naturalresource">NATURAL RESOURCE</Link></Menu.Item>
            <Menu.Item key="8"><Link to="/sustainabledesign">SUSTAINABLE DESIGN</Link></Menu.Item>
            <Menu.Item key="9"><Link to="/ratingsystem">GREEN BUILDING RATING SYSTEM</Link></Menu.Item>
            <Menu.Item key="10"><Link to="/envimpact">ENV IMPACT</Link></Menu.Item>
            <Menu.Item key="11"><Link to="/ecohouse">ECO HOUSE</Link></Menu.Item>
            <Menu.Item key="12"><Link to="/feedback">FEEDBACK</Link></Menu.Item>
            <Menu.Item key="13"><Link to="/cslesc">CSL ESC</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 0px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Center for Sustainable Landscape  ©2019 Created by CSL</Footer>
      </Layout>
    );
}

export default BasicLayout;

 
