


import React, { Component } from 'react';
import styles from './RatingSystemView.less';
import {
    Icon, Row, Col, Modal, Button
  } from 'antd';


class LEEDSection extends Component {



    state = { transportationVisible: false,
            sustainableSiteVisible: false,
            waterEfficiencyVisible: false,
            energyAtomsphereVisible: false,
            materialResourcesVisible: false,
            IEQVisible: false,
            innovationVisible: false,
            regionalPriotiryVisible: false,
         };



    setTransportVisible(transportationVisible) {
        this.setState({ transportationVisible });
    }

    setSustainableSiteVisible(sustainableSiteVisible) {
    this.setState({ sustainableSiteVisible });
    }

    setWaterEfficiencyVisible(waterEfficiencyVisible) {
        this.setState({ waterEfficiencyVisible });
    }

    setEnergyAtomsphereVisible(energyAtomsphereVisible) {
        this.setState({ energyAtomsphereVisible });
        }

    setIEQVisible(IEQVisible) {
        this.setState({ IEQVisible });
    }


    setMaterialResourcesVisible(materialResourcesVisible) {
        this.setState({ materialResourcesVisible });
    }
    

    setInnovationVisible(innovationVisible) {
        this.setState({ innovationVisible });
    }

    setRegionalPriorityVisible(regionalPriorityVisible) {
        this.setState({ regionalPriorityVisible });
    }

    


    // showModal = () => {
    //   this.setState({
    //     visible: true,
    //   });
    // };
  
    // handleOk = e => {
    //   console.log(e);
    //   this.setState({
    //     visible: false,
    //   });
    // };
  
    // handleCancel = e => {
    //   console.log(e);
    //   this.setState({
    //     visible: false,
    //   });
    // };






    render() {
		return (
            <div>
                <section className="jumbotron align-center">
                    <div className="container">
                    <h1 className="cover-heading">LEED sections</h1>
                    <p className="lead">LEED focuses on eight aspects. Please note that the specific measurement mentioned
                    in each sub-categories is for demonstration purpose. In order to obtain full points, 
                    more detailed mentioned in LEED documentation is required.</p>
                    </div>
                </section>
                        <Row gutter={48}>
                        <Col span={12} className='align-center'>
                            <div className={styles['single-service']}>
                            <Icon type="check-circle" theme="twoTone" />
                            <h3>
                                

                                <Button type="primary" onClick={() => this.setTransportVisible(true)}>
                                {/* onClick={this.showModal}> */}
                                Location and Transportation
                                </Button>



                                <Modal
                                title="Location and Transportation (LT)"
                                visible={this.state.transportationVisible}
                                onOk={() => this.setTransportVisible(false)}
                                onCancel={() => this.setTransportVisible(false)}
                                >
                                <h2>Access to transit</h2>
                                <h3>Intent:</h3>
                                <p>To reduce pollution and land development effects from automobile use</p>
                                <p>Locate the project within a 400 meter walking distance of bus or streetcar stops, or within a 800 meter walking distance of bus rapid transit stops, light or heavy rail stations, or ferry terminals</p>
                                </Modal>



                            </h3>
                            <p>
                                
                            </p>
                            </div>
                        </Col>

                        <Col span={12} className='align-center'>
                            <div className={styles['single-service']}>
                            <Icon type="setting" theme="twoTone" />
                            <h3>
                            <Button type="primary" onClick={() => this.setSustainableSiteVisible(true)}>
                                {/* onClick={this.showModal}> */}
                                Sustainable Sites
                                </Button>



                                <Modal
                                title="Sustainable Sites(SS)"
                                visible={this.state.sustainableSiteVisible}
                                onOk={() => this.setSustainableSiteVisible(false)}
                                onCancel={() => this.setSustainableSiteVisible(false)}
                                >
                                <h2>Construction activity pollution prevention</h2>
                                <h3>Intent:</h3>
                                <p>To reduce pollution from construction activities by controlling soil erosion, waterway sedimentation, and airborne dust</p>
                                <p>Control the path and velocity of runoff with slit fencing or comparable measures.</p>
                                <p>Provide swales to divert surface water from hillsides.</p>
                                <p>Prevent air pollution from dust and particulate matter</p>
                                </Modal>
                            </h3>
                            <p>
                                
                            </p>
                            </div>
                        </Col>
                        </Row>
                        <br/>

                        <Row gutter={48}>
                        <Col span={12} className='align-center'>
                            <div className={styles['single-service']}>
                            <Icon type="check-circle" theme="twoTone" />
                            <h3>
                            <Button type="primary" onClick={() => this.setWaterEfficiencyVisible(true)}>
                                {/* onClick={this.showModal}> */}
                                Water efficiency
                                </Button>



                                <Modal
                                title="Water efficiency(WE)"
                                visible={this.state.waterEfficiencyVisible}
                                onOk={() => this.setWaterEfficiencyVisible(false)}
                                onCancel={() => this.setWaterEfficiencyVisible(false)}
                                >
                                <h2>Water metering</h2>
                                <h3>Intent:</h3>
                                <p>To support water efficiency efforts by monitoring and benchmarking water use over time</p>
                                <p>For single family, install whole-house water meter.</p>
                                </Modal>
                            </h3>
                            <p>
                                
                            </p>
                            </div>
                        </Col>

                        <Col span={12} className='align-center'>
                            <div className={styles['single-service']}>
                            <Icon type="setting" theme="twoTone" />
                            <h3>
                            <Button type="primary" onClick={() => this.setEnergyAtomsphereVisible(true)}>
                                {/* onClick={this.showModal}> */}
                                Energy and atmosphere
                                </Button>



                                <Modal
                                title="Energy and atmosphere"
                                visible={this.state.energyAtomsphereVisible}
                                onOk={() => this.setEnergyAtomsphereVisible(false)}
                                onCancel={() => this.setEnergyAtomsphereVisible(false)}
                                >
                                <h2>Renewable energy</h2>
                                <h3>Intent:</h3>
                                <p>To encourage the installation and operation of renewable electricity generation systems</p>
                                <p>Design and install a renewable electricity generation system. Receive one point for every 500 kWh produced per year by the system.</p>
                                </Modal>
                            </h3>
                            <p>
                                
                            </p>
                            </div>
                        </Col>
                        </Row>
                        <br/>


                        <Row gutter={48}>
                        <Col span={12} className='align-center'>
                            <div className={styles['single-service']}>
                            <Icon type="check-circle" theme="twoTone" />
                            <h3>
                            <Button type="primary" onClick={() => this.setMaterialResourcesVisible(true)}>
                                {/* onClick={this.showModal}> */}
                                Material and resources
                                </Button>



                                <Modal
                                title="Material and resources (MR)"
                                visible={this.state.materialResourcesVisible}
                                onOk={() => this.setMaterialResourcesVisible(false)}
                                onCancel={() => this.setMaterialResourcesVisible(false)}
                                >
                                <h2>Environmentally preferable products</h2>
                                <h3>Intent:</h3>
                                <p>To increase demand for products or building components that minimize material consumption through recycled and recyclable content, reclamation, or overall reduced life-cycle impacts</p>
                                <p>A single component meets local production or environmentally preferable products can earn points for each.</p>
                                <p>Local production means the products were extracted, processed, and manufactured locally.</p>
                                <p>Environmentally preferable products means A material must make up 90% of the component by weight or volume and the product contains at least 25% reclaimed material (other potential credits are available).</p>

                                </Modal>
                            </h3>
                            <p>
                                
                            </p>
                            </div>
                        </Col>

                        <Col span={12} className='align-center'>
                            <div className={styles['single-service']}>
                            <Icon type="setting" theme="twoTone" />
                            <h3>
                            <Button type="primary" onClick={() => this.setIEQVisible(true)}>
                                {/* onClick={this.showModal}> */}
                                Indoor environmental quality
                                </Button>



                                <Modal
                                title="Indoor environmental quality"
                                visible={this.state.IEQVisible}
                                onOk={() => this.setIEQVisible(false)}
                                onCancel={() => this.setIEQVisible(false)}
                                >
                                <h2>Air filtering</h2>
                                <h3>Intent:</h3>
                                <p>To protect occupants' health by reducing particulate matter from the air supply system</p>
                                <p>Install air filters with a minimum efficiency reporting value (MERV) of 8 or higher on all recirculating space conditioning systems, per ASHRAE 62.2-2010.</p>
                                <p>Air filter housings must be airtight to prevent bypass or leakage.</p>
                                <p>Nonducted systems must have an internal air filter in the air-handling unit.</p>
                                </Modal>
                            </h3>
                            <p>
                                
                            </p>
                            </div>
                        </Col>
                        </Row>
                        <br/>

                        <Row gutter={48}>
                        <Col span={12} className='align-center'>
                            <div className={styles['single-service']}>
                            <Icon type="check-circle" theme="twoTone" />
                            <h3>
                            <Button type="primary" onClick={() => this.setInnovationVisible(true)}>
                                {/* onClick={this.showModal}> */}
                                Innovation
                                </Button>



                                <Modal
                                title="Innovation"
                                visible={this.state.innovationVisible}
                                onOk={() => this.setInnovationVisible(false)}
                                onCancel={() => this.setInnovationVisible(false)}
                                >
                                <h2>LEED accredited professional</h2>
                                <h3>Intent:</h3>
                                <p>To encourage the project team integration required by a LEED project and to streamline the application and certification process.</p>
                                <p>At least one principal participant of the project team must be a LEED accredited professional (AP) with a specialty appropriate for the project..</p>
                                </Modal>
                            </h3>
                            <p>
                                
                            </p>
                            </div>
                        </Col>

                        <Col span={12} className='align-center'>
                            <div className={styles['single-service']}>
                            <Icon type="setting" theme="twoTone" />
                            <h3>
                            <Button type="primary" onClick={() => this.setRegionalPriorityVisible(true)}>
                                {/* onClick={this.showModal}> */}
                                Regional priority
                                </Button>



                                <Modal
                                title="Regional priority"
                                visible={this.state.regionalPriorityVisible}
                                onOk={() => this.setRegionalPriorityVisible(false)}
                                onCancel={() => this.settRegionalPriorityVisible(false)}
                                >
                                <h3>Intent:</h3>
                                <p>To address geographically specific environmental, social quality, and public health priorities. .</p>
                                <p>Six regional priorites credits have been identified by the USGBC regional councils and chapters as having importance for the project's region.</p>
                                </Modal>
                            </h3>
                            <p>
                                
                            </p>
                            </div>
                        </Col>
                        </Row>

                </div>

                        )
	}
}



export default LEEDSection;
