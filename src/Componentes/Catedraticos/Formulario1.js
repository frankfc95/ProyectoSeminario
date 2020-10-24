/* eslint-disable */
import React from 'react'

import { message, Modal} from 'antd';
import { ExclamationCircleOutlined} from '@ant-design/icons';
import logo2 from './logo2.png';
import './style.css';

var style={ width: '50%'};

export default class Formulario1 extends React.Component {
 constructor(props) {
    super(props);

    this.state = {
      datagrid:[],
      tables:[]
    };

    this.send=this.send.bind(this);
    this.crear=this.crear.bind(this);
    this.limpiar=this.limpiar.bind(this);
  }


  limpiar()
  {

document.getElementById('dpi').value='';
 document.getElementById('nombre').value='';
    document.getElementById('apellido').value='';
        document.getElementById('telefono').value=undefined;
         document.getElementById('idusuario').value='';
  }


send()
{
  var that=this;
Modal.confirm({
    title: 'Desea crear un nuevo Catedratico?',
    icon: <ExclamationCircleOutlined />,
    content: 'Este formulario es responsabilidad del administrador',
    okText: 'Crear',
    cancelText: 'Cancelar',
    onOk() {
   that.crear();
      message.info("El Catedratico se Creará",2);

      message.info(
       <body>
  <div class="box-canvas">
    <div class="wheel-leg left"></div>
    <div class="wheel-leg right"></div>
    <div class="wheel">
    </div>
    <div class="hamster">
        <div class="body">
          <div class="eye"></div>
          <div class="nose"></div>
        </div>
        <div class="ear"></div>
        <div class="tail"></div>
        <div class="leg front"></div>
        <div class="leg back"></div>
      </div>
  </div>
</body>,2);

    },
    onCancel() {
      message.info("Cancelado",2);
    },
  });
}

crear()
{

  try{
  var a=document.getElementById('dpi').value;
    var b=document.getElementById('nombre').value;
      var c=document.getElementById('apellido').value;
        var d=document.getElementById('telefono').value;
          var e=document.getElementById('idusuario').value;
          var f=1;
var objeto={};

objeto.dpi=a;
objeto.nombre=b;
objeto.apellido=c;
objeto.telefono=d;
objeto.idkey=e;
objeto.estado=f;


var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify(objeto);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://myinfancia.australiaeast.cloudapp.azure.com:1012/catedraticos", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .then(
this.limpiar()
    )
  .catch(error => console.log('error', error));



 message.info('Creado');
}
catch(err)
{
  console.error(err);
}
         
}



componentWillMount() {
  try{


    
  }catch(err){
    console.error('#ERROR Error en willMount de la pagina de formularios: ' + err);
  }
}






		render(){
			return( 
				<>
<div className="container" style={style}>
  <div className="row">

<div className="col-md">
  	<div className="form-group ">
    <label for="dpi">DPI</label>
    <input type="number format" class="form-control" id="dpi" aria-describedby="dpiHelp" placeholder="Ingrese su número de Dpi"/>
    
  </div>

    <div class="form-group">
    <label for="nombre">Nombre</label>
    <input type="text" className="form-control" id="nombre" aria-describedby="nombreHelp" placeholder="Ingrese su Nombre "/>
  </div>

  	<div class="form-group">
    <label for="apellido">Apellido</label>
    <input type="text" className="form-control" id="apellido" placeholder="Ingrese su apellido"/>
  </div>

   	<div class="form-group">
    <label for="telefono">Número de Teléfono o Celular</label>
    <input type="number" className="form-control" id="telefono" placeholder="Ingrese su número de Teléfono o Celular"/>
  </div>

    <div class="form-group">
    <label for="idusuario">Id de Registro</label>
    <input type="phone" className="form-control" id="idusuario" placeholder="Id de Registro"/>
  </div>

 

  <button onClick={this.send} class="btn btn-primary">Guardar</button>
</div>
</div>
</div>
          

  <img
      
src={logo2}
height="20%"
width="30%"
/>
</>
			
					)
		}

}
