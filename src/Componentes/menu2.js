import React from 'react';
import TablaCursos from './ContenidoCurso/TablaCursos.js';
import { Modal, Table, Button } from 'antd';
import { Row, Col, Divider } from 'antd';

const style = { background: '#0092ff', padding: '8px 0' };


export default class ListarNotasAlumnos extends React.Component {
	 constructor(props) {
    super(props);

    this.state = {
      visible:false,
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

  render(){
var bo=(<Button onClick={this.showModal}>hola</Button>);

    const dataSource = [
      {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
        options: bo
      },
      {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
        options: bo
      },
    ];

    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Options',
        dataIndex: 'options',
        key: 'options',
      },
    ];
    return (
      <div>
       <Modal
          title="Modulos"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width={1000}
        >
          <TablaCursos/>
        </Modal>
        <Table dataSource={dataSource} columns={columns} />;
      </div>
    	);
    
  }

}
