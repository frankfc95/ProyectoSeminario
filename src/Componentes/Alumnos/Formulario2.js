/* eslint-disable */
import React from 'react'

import { Select,message, Modal} from 'antd';
import { ExclamationCircleOutlined} from '@ant-design/icons';
import logo2 from './logo2.png';

const { Option } = Select;
var style={width: '50%'};




var carrera='';
var municipio='';
var semestre='';
export default class Formulario2 extends React.Component {
 constructor(props) {
    super(props);

    this.state = {
    
  
    };

    this.send=this.send.bind(this);
    this.crear=this.crear.bind(this);
    this.limpiar=this.limpiar.bind(this);
    this.onBlur=this.onBlur.bind(this);
      this.onBlur2=this.onBlur2.bind(this);
       this.onBlur3=this.onBlur3.bind(this);
      this.onFocus=this.onFocus.bind(this);
      this.onFocus2=this.onFocus2.bind(this);
      this.onFocus3=this.onFocus3.bind(this);
      this.onSearch=this.onSearch.bind(this);
       this.onSearch2=this.onSearch2.bind(this);
        this.onSearch3=this.onSearch3.bind(this);
        this.onChange=this.onChange.bind(this);
           this.onChang2=this.onChange2.bind(this);
              this.onChang3=this.onChange3.bind(this);


  }




onChange(value) {
  console.log(`selected ${value}`);
carrera=value;

}
onChange2(value) {
  console.log(`selected ${value}`);

 municipio=value;

}
onChange3(value) {
  console.log(`selected ${value}`);


  semestre=value;
}

onBlur() {
  console.log('blur');
}
onBlur2() {
  console.log('blur');
}
onBlur3() {
  console.log('blur');
}

onFocus() {
  console.log('focus');
}
onFocus2() {
  console.log('focus');
}
onFocus3() {
  console.log('focus');
}

onSearch(val) {
  console.log('search:', val);
}

onSearch2(val) {
  console.log('search:', val);
}

onSearch3(val) {
  console.log('search:', val);
}





  limpiar()
  {

document.getElementById('dpi').value='';
 document.getElementById('nombre').value='';
    document.getElementById('apellido').value='';
        document.getElementById('telefono').value=undefined;
         document.getElementById('carnet').value='';
          //    document.getElementById('municipio').value='';
            //document.getElementById('carrera').value='';
            //document.getElementById('semestre').value='';
  }


send()
{
  var that=this;
Modal.confirm({
    title: 'Desea crear un nuevo Alumno?',
    icon: <ExclamationCircleOutlined />,
    content: 'Este formulario es responsabilidad del administrador',
    okText: 'Crear',
    cancelText: 'Cancelar',
    onOk() {
   that.crear();
      message.info("El Alumno se Creará",2);

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
          var e=document.getElementById('carnet').value;
            var f=1;
      
  
            console.log(municipio+carrera+semestre);
         
var objeto={};

objeto.dpi=a;
objeto.nombre=b;
objeto.apellido=c;
objeto.telefono=d;
objeto.idkey=e;
objeto.estado=f;
objeto.municipio=parseInt(municipio);
objeto.carrera=carrera;
objeto.semestre=parseInt(semestre);


var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify(objeto);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://myinfancia.australiaeast.cloudapp.azure.com:1012/alumnos", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .then(
this.limpiar()
    )
  .catch(error => console.log('error', error));



 message.info('Creado');


  message.info(JSON.stringify(objeto));
}
catch(err)
{
  console.error(err);
}
         
}




		render(){
			return( 
				<>
	<div className="container" style={style}>
  <div className="row">

<div className="col-md">
  	<div className="form-group ">
  <label for="exampleInputCarnet">Carnet</label>
  <input type="text" class="form-control" id="carnet" aria-describedby="carnetHelp" placeholder="Ingrese su número de carnet"/> 
  </div>

  <div class="form-group">
  <label for="exampleInputDpi">Dpi</label>
  <input type="text" className="form-control" id="dpi" placeholder="Ingrese su Dpi"/>
  </div>

  <div class="form-group">
  <label for="exampleInputNombre">Nombre</label>
  <input type="text" className="form-control" id="nombre" aria-describedby="nombreHelp" placeholder="Ingrese su nombre "/>
  </div>
  <div class="form-group">
  <label for="exampleInputApellido">Apellido</label>
  <input type="text" className="form-control" id="apellido" placeholder="Ingrese su apellido"/>
  </div>
    <div class="form-group">
  <label for="exampleInputTelefono">Telefono</label>
  <input type="number" className="form-control" id="telefono" placeholder="Ingrese su Telefono"/>
  </div>
  <div class="form-group">
  <label for="municipio">Elige el municipio en que vives:</label> 
  <Select name="municipios" id="municipio" form="municipioform" className="col-md-5"
    showSearch
    style={{ width: 200 }}
    placeholder="Seleccione un Municipio"
    optionFilterProp="children"
    onChange={this.onChange2}
    onFocus={this.onFocus2}
    onBlur={this.onBlur2}
    onSearch={this.onSearch2}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
  }
  > 
  <Option value="2">Chiquimulilla</Option>
  <Option value="1">Guazacapán</Option>
  <Option value="3">Taxisco</Option>
  <Option value="5">Pasaco</Option>
  <Option value="4">Pedro de Alvarado</Option>
  </Select>
  </div>
  <div class="form-group">
  <label for="carrera">Elige tu carrera:</label> 
  <Select name="carreras" id="carrera" form="carreraform" className="col-12"
    showSearch
    style={{ width: 500 }}
    placeholder="Seleccione una Carrera"
    optionFilterProp="children"
    onChange={this.onChange}
    onFocus={this.onFocus}
    onBlur={this.onBlur}
    onSearch={this.onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
  }
  > 
  <Option value="Ingenieria en Sistemas de Informacion">Ingeniería en Sistemas de Información</Option>
  <Option value="Licenciatura en Psicologia Clinica">Licenciatura en Psicologia Clinica</Option>
  <Option value="Licenciatura en Ciencias Juridicas">Licenciatura en Ciencias Juridicas</Option>
  <Option value="Licenciatura en Administracion de Empresas">Licenciatura en Administracion de Empresas</Option>
  </Select>
  </div>
  <div className="form-group">
  <label for="semestre">Elige tu semestre:</label> 

  <Select name="semestres" id="semestre" form="semestreform" 
    showSearch
    style={{ width: 200 }}
    placeholder="Seleccione un Semestre"
    optionFilterProp="children"
    onChange={this.onChange3}
    onFocus={this.onFocus3}
    onBlur={this.onBlur3}
    onSearch={this.onSearch3}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
  }
  > 
  <Option value="1">Primer Semestre</Option>
  <Option value="2">Segundo Semestre</Option>
  <Option value="3">Tercer Semestre</Option>
  <Option value="4">Cuarto Semestre</Option>
   <Option value="5">Quinto Semestre</Option>
  <Option value="6">Sexto Semestre</Option>
  <Option value="7">Séptimo Semestre</Option>
  <Option value="8">Octavo Semestre</Option>
   <Option value="9">Noveno Semestre</Option>
  <Option value="10">Décimo Semestre</Option>
  </Select>
  </div>
  <button onClick={this.send} class="btn btn-primary">Guardar</button>
</div>
</div>
</div>
            <img
      
src={logo2}
height={200}
width={300}
/>
</>


			
					)
		}

}
