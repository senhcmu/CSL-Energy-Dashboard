



import React, { Component } from 'react';
import styles from './RatingSystemView.less';
import {
    Icon, Row, Col, Modal, Button
  } from 'antd';


class BREEAMSection extends Component {
    state = { managementVisible: false,
        healthWellbeingVisible: false,
        energyVisible: false,
        transportVisible: false,
        waterVisible: false,
        materialVisible: false,
        innovationVisible: false,
        wasteVisible: false,
        pollutionVisible: false,
        landuseEcoVisible: false,

     };

    setManagementVisible(managementVisible) {
        this.setState({ managementVisible });
    }

    setHealthWellbeingVisible(healthWellbeingVisible) {
        this.setState({ healthWellbeingVisible });
    }

    setWaterVisible(waterVisible) {
        this.setState({ waterVisible });
    }

    setWasteVisible(wasteVisible) {
        this.setState({ wasteVisible });
    }

    setMaterialVisible(materialVisible) {
        this.setState({ materialVisible });
    }

    setInnovationVisible(innovationVisible) {
        this.setState({ innovationVisible });
    }

    setPollutionVisible(pollutionVisible) {
        this.setState({ pollutionVisible });
    }

    setLanduseEcoVisible(landuseEcoVisible) {
        this.setState({ landuseEcoVisible });
    }

    setEnergyVisible(energyVisible) {
        this.setState({ energyVisible });
    }

    setTransportVisible(transportVisible) {
        this.setState({ transportVisible });
    }


    render() {
		return (
            <div>
                
                <section className="jumbotron align-center">
                    <div className="container">
                    <h1 className="cover-heading">BREEAM sections</h1>
                    <p className="lead">Here is the energy consumption.</p>
                    </div>
                </section>




                        <Row gutter={48}>
                        <Col span={12} className='align-center'>
                            <div className={styles['single-service']}>
                            <Icon type="check-circle" theme="twoTone" />
                            <h3>
                            <Button type="primary" onClick={() => this.setManagementVisible(true)}>
                                {/* onClick={this.showModal}> */}
                                Management
                                </Button>



                                <Modal
                                title="Management"
                                visible={this.state.managementVisible}
                                onOk={() => this.setManagementVisible(false)}
                                onCancel={() => this.setManagementVisible(false)}
                                >
                                <h2>Responsible construction practices</h2>
                                <h3>Aim:</h3>
                                <p>To recognize and encourage construction sites which are managed in an environmentally and socially considerate, responsible and accountable manner.</p>
                                <p>E.g. assign responsibility to an individual for monitoring, recording and reporting energy use, water consumption and transportation data (where measured) resulting from all on-site construction processes throughout the build programme. To ensure the robust collection of information, this individual must have the appropriate authority and responsibility to request and access the data required.</p>
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
                            <Button type="primary" onClick={() => this.setHealthWellbeingVisible(true)}>
                                {/* onClick={this.showModal}> */}
                                Health, wellbeing
                                </Button>


                                <Modal
                                title="Health, wellbeing"
                                visible={this.state.healthWellbeingVisible}
                                onOk={() => this.setHealthWellbeingVisible(false)}
                                onCancel={() => this.setHealthWellbeingVisible(false)}
                                >
                                <h2>Thermal zoning and controls</h2>
                                <h3>Aim:</h3>
                                <p>To recognize and encourage construction sites which are managed in an environmentally and socially considerate, responsible and accountable manner.</p>
                                <p>E.g. assign respons</p>
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
                            <Button type="primary" onClick={() => this.setEnergyVisible(true)}>
                                {/* onClick={this.showModal}> */}
                                Energy
                                </Button>



                                <Modal
                                title="Basic Modal"
                                visible={this.state.energyVisible}
                                onOk={() => this.setEnergyVisible(false)}
                                onCancel={() => this.setEnergyVisible(false)}
                                >
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
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
                            <Button type="primary" onClick={() => this.setTransportVisible(true)}>
                                {/* onClick={this.showModal}> */}
                                Transport
                                </Button>



                                <Modal
                                title="Basic Modal"
                                visible={this.state.transportVisible}
                                onOk={() => this.setTransportVisible(false)}
                                onCancel={() => this.setTransportVisible(false)}
                                >
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
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
                            <Button type="primary" onClick={() => this.setWaterVisible(true)}>
                                {/* onClick={this.showModal}> */}
                                Water
                                </Button>



                                <Modal
                                title="Basic Modal"
                                visible={this.state.waterVisible}
                                onOk={() => this.setWaterVisible(false)}
                                onCancel={() => this.setWaterVisible(false)}
                                >
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
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
                            <Button type="primary" onClick={() => this.setMaterialVisible(true)}>
                                {/* onClick={this.showModal}> */}
                                Material
                                </Button>



                                <Modal
                                title="Basic Modal"
                                visible={this.state.materialVisible}
                                onOk={() => this.setMaterialVisible(false)}
                                onCancel={() => this.setMaterialVisible(false)}
                                >
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
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
                                title="Basic Modal"
                                visible={this.state.innovationVisible}
                                onOk={() => this.setInnovationVisible(false)}
                                onCancel={() => this.setInnovationVisible(false)}
                                >
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
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
                            <Button type="primary" onClick={() => this.setWasteVisible(true)}>
                                {/* onClick={this.showModal}> */}
                                Waste
                                </Button>



                                <Modal
                                title="Basic Modal"
                                visible={this.state.wasteVisible}
                                onOk={() => this.setWasteVisible(false)}
                                onCancel={() => this.setWasteVisible(false)}
                                >
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
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
                                <Button type="primary" onClick={() => this.setLanduseEcoVisible(true)}>
                                {/* onClick={this.showModal}> */}
                                Landuse, Ecology
                                </Button>



                                <Modal
                                title="Basic Modal"
                                visible={this.state.landuseEcoVisible}
                                onOk={() => this.setLanduseEcoVisible(false)}
                                onCancel={() => this.setLanduseEcoVisible(false)}
                                >
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
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
                                <Button type="primary" onClick={() => this.setPollutionVisible(true)}>
                                {/* onClick={this.showModal}> */}
                                Pollution
                                </Button>



                                <Modal
                                title="Basic Modal"
                                visible={this.state.pollutionVisible}
                                onOk={() => this.setPollutionVisible(false)}
                                onCancel={() => this.setPollutionVisible(false)}
                                >
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
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



export default BREEAMSection;
