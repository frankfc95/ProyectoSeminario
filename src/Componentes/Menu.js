/* eslint-disable */
import React from 'react';
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, PoweroffOutlined } from '@ant-design/icons';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
//import Index from './Index.js';
import Formulario1 from './Catedraticos/Formulario1.js';
import ListarCatedraticos from './Catedraticos/ListarCatedraticos.js'
import Formulario2 from './Alumnos/Formulario2.js';
import ListarAlumnos from './Alumnos/ListarAlumnos.js';
import Formulario3 from './Cursos/Formulario3.js';
import ListarCursos from './Cursos/ListarCursos.js';
import Asignacion from './Cursos/Asignacion.js';
import ListarNotasAlumnos from './Cursos/ListarNotasAlumnos.js';
import AsignacionCatedratico from './Cursos/AsignacionCatedratico.js';
import Grafica from './GraficaPrueba.js';
import Reportes from './Reporteria/Reportes.js';
//import logo from './logo.svg';
//import Cookies from 'js-cookie';
import Profile from './Profile.js';
import logo2 from './Cursos/logo2.PNG';
import menu2 from './menu2.js';


const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

var rol;
var usuario;
 var userid;
export default class MenuCompleto extends React.Component {
 constructor(props) {
    super(props);

    this.state = {
    view: false,
    viewcatedratico: false,
    viewalumno: false,
    loadings: [],
    };


this.setRol=this.setRol.bind(this);
this.deleteRol=this.deleteRol(this);

  }


deleteRol()
{
 
rol='0';
usuario='';

}


async setRol()
{

  rol=this.props.rol;
  usuario=this.props.user;
  userid=this.props.userId;

  console.log(rol,usuario,userid);

if(rol=="alumno")
{
this.setState({
view: true,
viewalumno:false,
viewcatedratico: true
});
}

if(rol=="admin")
{
this.setState({
view: false,
viewalumno:true,
viewcatedratico: false
});
}

if(rol=="catedratico")
{
this.setState({
view: true,
viewalumno:true,
viewcatedratico: false
});
}


if(rol=="0")
{
this.setState({
view: true,
viewalumno:true,
viewcatedratico: true
});


}




}

componentDidMount()
{
 

 this.setRol();

}


enterLoading = index => {
    this.setState(({ loadings }) => {
      const newLoadings = [...loadings];
      newLoadings[index] = true;

      return {
        loadings: newLoadings,
      };
    });
    setTimeout(() => {
      this.setState(({ loadings }) => {
        const newLoadings = [...loadings];
        newLoadings[index] = false;

        return {
          loadings: newLoadings,
        };
      });
    }, 3000);
  }


render()

{

const { loadings } = this.state;
const estilo={ color: ' #EC410B'};


  return (
    <div><b>
        <Router>
  <Layout >
    <Header className="header"  style={{background:'#117a65'}}>
      <div className="logo" />
   
      <Menu style={{ background:'#117a65' }} mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1"> <img src={logo2} className="App-logo" alt="10px" /></Menu.Item>
        <Menu.Item key="2">{usuario}</Menu.Item>
        <Menu.Item key="3"><b>{rol}</b></Menu.Item>
      <div className="float-right">  
          <Button
          type="primary"
          style={{ background: 'red ', color: 'white'}}
          onClick={"http://52.154.246.211:8080/auth/realms/INFANCIA/protocol/openid-connect/logout?client_id=security-admin-console&redirect_uri=http%3A%2F%2Flocalhost%3A3000/index"}
          icon={<PoweroffOutlined />}
          loading={loadings[1]}
          onClick={() => this.enterLoading(1)}
          >
            Cerrar Sesion
          </Button>
  </div>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px', background: '#16a085 ', color:'white'}} >
      <Breadcrumb style={{ margin: '16px 0',background: '#16a085 ', color: 'white' }}>
        <Breadcrumb.Item>Home /</Breadcrumb.Item>
        <Breadcrumb.Item >SICOIN</Breadcrumb.Item>
      </Breadcrumb>
      <Layout className="site-layout-background" style={{ padding: '24px 0',background: 'white', opacity: 0.9 }}>
        <Sider className="site-layout-background" width={200} >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub19']}
            style={{ height: '100%', color: '#1e88e5'}}
            id="example1"

          >
            <SubMenu key="sub19" icon={<UserOutlined />} title="Inicio">
              <Menu.Item key="a">Perfil<Link to="/index" /></Menu.Item>
            </SubMenu>
            <SubMenu key="sub1" icon={<UserOutlined />} hidden={this.state.view} title="Catedraticos">
            <Menu.Item key="2"  hidden={this.state.view}>Nuevo<Link to="/form1" /></Menu.Item>
              <Menu.Item key="3"  hidden={this.state.view}>Listar<Link to="/listar1" /></Menu.Item>
          
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} hidden={this.state.view}  title="Alumnos">
              <Menu.Item key="5">Nuevo <Link to="/form2" /></Menu.Item>
              <Menu.Item key="6">Listar<Link to="/listar2" /></Menu.Item>
              <Menu.Item key="7">Proyeccion<Link to="/grafica" /></Menu.Item>
              <Menu.Item key="8">Reportes<Link to="/reportes" /></Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<NotificationOutlined />} title="Cursos">
              <Menu.Item key="9" hidden={this.state.view}>Nuevo<Link to="/form3" /></Menu.Item>
              <Menu.Item key="10" hidden={this.state.viewcatedratico}>Listar<Link to="/listar3" /></Menu.Item>
              <Menu.Item key="11"  hidden={this.state.view}>Asignar<Link to="/asignar" /></Menu.Item>
              <Menu.Item key="12" hidden={this.state.viewalumno}>Notas <Link to="Alumno&urso"/></Menu.Item>
              <Menu.Item key="13" hidden={this.state.view}>Asignar Catedratico <Link to="catedratico&urso"/></Menu.Item>
              <Menu.Item key="14" hidden={this.state.view}>Cursos <Link to="menu2"/></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
    

  <Route exact path="/index" component={Profile} />
     <Route exact path="/form1" component={Formulario1} />
      <Route exact path="/form2" component={Formulario2} />
            <Route exact path="/form3" component={Formulario3} />
             <Route exact path="/listar1" component={ListarCatedraticos} />
               <Route exact path="/listar2" component={ListarAlumnos} />
               <Route exact path="/listar3" component={ListarCursos} />
               <Route exact path="/asignar" component={Asignacion} />
                <Route exact path="/Alumno&urso" component={ListarNotasAlumnos} />
                <Route exact path="/grafica" component={Grafica} />
                   <Route exact path="/reportes" component={Reportes} />
                  <Route exact path="/catedratico&urso" component={AsignacionCatedratico} />
                  <Route exact path="/menu2" component={menu2} />


      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>UMG</Footer>
  </Layout>
     </Router>
     </b>
    </div>
  );
}
}


	