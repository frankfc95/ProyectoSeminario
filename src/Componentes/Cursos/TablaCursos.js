import React from 'react';
import Modulo1 from './Modulo1.js';
import Modulo2 from './Modulo2.js';
import Modulo3 from './Modulo3.js';
import Modulo4 from './Modulo4.js';
import Modulo5 from './Modulo5.js';
import Modulo6 from './Modulo6.js';
import Modulo7 from './Modulo7.js';
import Modulo8 from './Modulo8.js';

import { Modal, Button } from 'antd';
import { Row, Col, Divider } from 'antd';

export default class ListarNotasAlumnos extends React.Component {

	constructor(props) {
    super(props);

    	this.state = {
    		 visible: false,
			 visible2: false,
			 visible3: false,
			 visible4: false,
			 visible5: false,
			 visible6: false,
			 visible7: false,
			 visible8: false,
    	};
    	this.showModal=this.showModal.bind(this);
	    this.handleOk=this.handleOk.bind(this);
	    this.handleCancel=this.handleCancel.bind(this);
    }

    showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

showModal2 = () => {
    this.setState({
      visible2: true,
    });
  };

  handleOk2 = e => {
    console.log(e);
    this.setState({
      visible2: false,
    });
  };

  handleCancel2 = e => {
    console.log(e);
    this.setState({
      visible2: false,
    });
  };

showModal3 = () => {
    this.setState({
      visible3: true,
    });
  };

  handleOk3 = e => {
    console.log(e);
    this.setState({
      visible3: false,
    });
  };

  handleCancel3 = e => {
    console.log(e);
    this.setState({
      visible3: false,
    });
  };

  showModal4 = () => {
    this.setState({
      visible4: true,
    });
  };

  handleOk4 = e => {
    console.log(e);
    this.setState({
      visible4: false,
    });
  };

  handleCancel4 = e => {
    console.log(e);
    this.setState({
      visible4: false,
    });
  };

  showModal5 = () => {
    this.setState({
      visible5: true,
    });
  };

  handleOk5 = e => {
    console.log(e);
    this.setState({
      visible5: false,
    });
  };

  handleCancel5 = e => {
    console.log(e);
    this.setState({
      visible5: false,
    });
  };

  showModal6 = () => {
    this.setState({
      visible6: true,
    });
  };

  handleOk6 = e => {
    console.log(e);
    this.setState({
      visible6: false,
    });
  };

  handleCancel6 = e => {
    console.log(e);
    this.setState({
      visible6: false,
    });
  };

  showModal7 = () => {
    this.setState({
      visible7: true,
    });
  };

  handleOk7 = e => {
    console.log(e);
    this.setState({
      visible7: false,
    });
  };

  handleCancel7 = e => {
    console.log(e);
    this.setState({
      visible7: false,
    });
  };

  showModal8 = () => {
    this.setState({
      visible8: true,
    });
  };

  handleOk8 = e => {
    console.log(e);
    this.setState({
      visible8: false,
    });
  };

  handleCancel8 = e => {
    console.log(e);
    this.setState({
      visible8: false,
    });
  };

	render(){
  		return (
		  <div>
		  <Row gutter={{ xs: 8, sm: 12, md: 16, lg: 24 }}>
		      <Col className="gutter-row" span={3}>
		        <div>
					<Button type="link" style={{ color: ' #1e88e5 '}} onClick={this.showModal}>
					 		Modulo 1	
					        </Button>
					        <Modal
					          title="Contenido"
					          visible={this.state.visible}
					          onOk={this.handleOk}
					          onCancel={this.handleCancel}
                    width={1500}
					        >
					          <Modulo1/>
					        </Modal>
		        </div>
		      </Col>
		      <Col className="gutter-row" span={3}>
		        <div>
					<Button type="link" onClick={this.showModal2}>
					 		Modulo 2	
					        </Button>
					        <Modal
					          title="Contenido"
					          visible={this.state.visible2}
					          onOk={this.handleOk2}
					          onCancel={this.handleCancel2}
                    width={1500}
					        >
					        <Modulo2/>
					        </Modal>
		        </div>
		      </Col>
		      <Col className="gutter-row" span={3}>
		        <div>
					<Button type="link" onClick={this.showModal3}>
					 		Modulo 3	
					        </Button>
					        <Modal
					          title="Contenido"
					          visible={this.state.visible3}
					          onOk={this.handleOk3}
					          onCancel={this.handleCancel3}
                    width={1500}
					        >
					          <Modulo3/>
					        </Modal>
		        </div>
		      </Col>
		      <Col className="gutter-row" span={3}>
		        <div>
					<Button type="link" onClick={this.showModal4}>
					 		Modulo 4	
					        </Button>
					        <Modal
					          title="Contenido"
					          visible={this.state.visible4}
					          onOk={this.handleOk4}
					          onCancel={this.handleCancel4}
                    width={1500}
					        >
					        <Modulo4/>
					        </Modal>
		        </div>
		      </Col>
		      <Col className="gutter-row" span={3}>
		        <div>
		      <Button type="link" onClick={this.showModal5}>
		          Modulo 5  
		              </Button>
		              <Modal
		                title="Contenido"
		                visible={this.state.visible5}
		                onOk={this.handleOk5}
		                onCancel={this.handleCancel5}
                    width={1500}
		              >
		              <Modulo5/>
		              </Modal>
		        </div>
		      </Col>
		        <Col className="gutter-row" span={3}>
		        <div>
		      <Button type="link" onClick={this.showModal6}>
		          Modulo 6  
		              </Button>
		              <Modal
		                title="Contenido"
		                visible={this.state.visible6}
		                onOk={this.handleOk6}
		                onCancel={this.handleCancel6}
                    width={1500}
		              >
		              <Modulo6/>
		              </Modal>
		        </div>
		      </Col>
		        <Col className="gutter-row" span={3}>
		        <div>
		      <Button type="link" onClick={this.showModal7}>
		          Modulo 7 
		              </Button>
		              <Modal
		                title="Contenido"
		                visible={this.state.visible7}
		                onOk={this.handleOk7}
		                onCancel={this.handleCancel7}
                    width={1500}
		              >
		              <Modulo7/>
		              </Modal>
		        </div>
		      </Col>
		        <Col className="gutter-row" span={3}>
		        <div>
		      <Button type="link" onClick={this.showModal8}>
		          Modulo 8  
		              </Button>
		              <Modal
		                title="Contenido"
		                visible={this.state.visible8}
		                onOk={this.handleOk8}
		                onCancel={this.handleCancel8}
                    width={1500}
		              >
		              <Modulo8/>
		              </Modal>
		        </div>
		      </Col>
		    </Row>
		  </div>
  		);
	}
}