/* eslint-disable */
import React from 'react'
import axios from 'axios';
import { Select,message, Modal} from 'antd';
import { ExclamationCircleOutlined} from '@ant-design/icons';
import a from './a.png';
 
const { Option } = Select;
var style={width: '50%'};

var data=[];
var data2=[];
var pre='';
var pre2='';


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}




export default class Asignacion extends React.Component {
 constructor(props) {
    super(props);

    this.state = {
      datagrid:[],
      tables:[],
      longData:null,
        searchText: '',
    searchedColumn: '',
    selectedRowKeys:[],
    namecurso:[],
    namealumno:[],
    };

    this.llenargrid=this.llenargrid.bind(this);
      this.llenargrid2=this.llenargrid2.bind(this);
          this.onBlur2=this.onBlur2.bind(this);
    this.onFocus2=this.onFocus2.bind(this);
  this.onSearch2=this.onSearch2.bind(this);
   this.onChang2=this.onChange2.bind(this);
        this.onBlur=this.onBlur.bind(this);
    this.onFocus=this.onFocus.bind(this);
  this.onSearch=this.onSearch.bind(this);
   this.onChang=this.onChange.bind(this);
       this.send=this.send.bind(this);
    this.crear=this.crear.bind(this);

    this.actividad1=this.actividad1.bind(this);
    this.actividad2=this.actividad2.bind(this);
    this.actividad3=this.actividad3.bind(this);
    this.crearactividad=this.crearactividad.bind(this);


 
  }


onChange(value) {
  console.log(`selected ${value}`);

 pre2=value;

}

onBlur() {
  console.log('blur');
}

onFocus() {
  console.log('focus');
}

onSearch(val) {
  console.log('search:', val);
}


onChange2(value) {
  console.log(`selected ${value}`);

 pre=value;

}

onBlur2() {
  console.log('blur');
}

onFocus2() {
  console.log('focus');
}

onSearch2(val) {
  console.log('search:', val);
}


llenargrid()
{

  try{

      axios.get('http://myinfancia.australiaeast.cloudapp.azure.com:1012/cursos')
     .then(res => {
        this.setState({
           datagrid: res.data,
           longData: res.data.length
         });

//console.log(this.state.datagrid);

const {longData ,datagrid}=this.state;
data=[];

for (var i = 0; i < longData; i++) {

data.push(
/*{
  key: datagrid[i].id,
  id: datagrid[i].id,
  nombre: datagrid[i].nombre
}*/
 <Option value={datagrid[i].id.toString()}>{datagrid[i].nombre}</Option>);


console.log(data);

//console.log(datagrid);
}
      });
}
catch(err)
{
  console.error(err);
}
         
}

llenargrid2()
{

  try{

      axios.get('http://myinfancia.australiaeast.cloudapp.azure.com:1012/alumnos')
     .then(res => {
        this.setState({
           datagrid: res.data,
           longData: res.data.length
         });

//console.log(this.state.datagrid);

const {longData ,datagrid}=this.state;
data2=[];

for (var i = 0; i < longData; i++) {

data2.push(
/*{
  key: datagrid[i].id,
  id: datagrid[i].id,
  nombre: datagrid[i].nombre
}*/
 <Option value={datagrid[i].id.toString()}>{datagrid[i].nombre} {datagrid[i].apellido}</Option>);


console.log(data2);

}
      });
}
catch(err)
{
  console.error(err);
}
         
}


componentDidMount() {
  try{

    for (var i = 0; i < 2; i++) {
this.llenargrid();
this.llenargrid2();
    }


    
  }catch(err){
    console.error('#ERROR Error en willMount de la pagina de formularios: ' + err);
  }
}



send()
{
  var that=this;
Modal.confirm({
    title: 'Desea Asignar a éste curso?',
    icon: <ExclamationCircleOutlined />,
    content: 'Este formulario es responsabilidad del administrador',
    okText: 'Crear',
    cancelText: 'Cancelar',
    onOk() {
   that.crear();
      message.info("La relacion se creara",2);

    },
    onCancel() {
      message.info("Cancelado",2);
    },
  });
}



async crear()
{

  try{


   
         
var objeto={};

objeto.nombre=pre;
objeto.prerequisito=parseInt(pre2);

 message.info('Creado');
  message.info(JSON.stringify(objeto));



await sleep(2000);

this.actividad1();
await sleep(1000);

this.actividad3();
await sleep(4000);


alert("Finalizado");

}
catch(err)
{
  console.error(err);
}
         
}



async actividad1()
{


   await  axios.get('http://myinfancia.australiaeast.cloudapp.azure.com:1012/cursos/'+pre)
     .then(res => {
        this.setState({
           namecurso: res.data
         });

       });



   await axios.get('http://myinfancia.australiaeast.cloudapp.azure.com:1012/alumnos/'+pre2)
     .then(res => {
        this.setState({
           namealumno: res.data
         });
       });




//console.log(this.state.namecurso);

//console.log(this.state.namealumno);


var a=this.state.namecurso.nombre;
var b=this.state.namealumno.nombre;
var c=this.state.namealumno.apellido;

console.log(a);
console.log(b+" "+c);
var d=b+" "+c;

this.crearactividad(a,d);



}






crearactividad(nombre1,nombre2)
{



var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");


var objeto={};

objeto.parcial1=0;
objeto.parcial2=0;
objeto.parcial3=0;
objeto.actividad=0;
objeto.proyecto=0;
objeto.examen=0;
objeto.alumno=parseInt(pre2);
objeto.curso=parseInt(pre);
objeto.nombreA=nombre2;
objeto.nombreC=nombre1;




var raw = JSON.stringify(objeto);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://myinfancia.australiaeast.cloudapp.azure.com:1012/alumnos/"+pre2+'/notas', requestOptions)
  .then(response => response.json())
  .then(result => this.actividad2(result))
  .then(
  console.log("paso2")

    )
  .catch(error => console.log('error', error));

}






actividad2(data)
{
  console.log(data.id);

console.log("curso="+pre);
console.log("nota="+data.id);

var c=data.id;


var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");


//var raw = JSON.stringify(objeto);

var requestOptions = {
  method: 'POST'
};

fetch("http://myinfancia.australiaeast.cloudapp.azure.com:1012/cursos/"+pre+'/actividad/'+c, requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .then(
  console.log("paso3")

    )
  .catch(error => console.log('error', error));







}

actividad3()
{

  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");


//var raw = JSON.stringify(objeto);

var requestOptions = {
  method: 'POST'
};

fetch("http://myinfancia.australiaeast.cloudapp.azure.com:1012/cursos/"+pre+'/alumnos/'+pre2, requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .then(
  console.log("paso4")

    )
  .catch(error => console.log('error', error));






}











    render(){
      return( 
        <>
  <div className="container" style={style}>
  <div className="row">


<div className="col-md">
    <div className="form-group">
   <Select name="municipios" id="municipio" form="municipioform" 
    showSearch
    style={{ width: 400 }}
    placeholder="Seleccione un Alumno"
    optionFilterProp="children"
    onChange={this.onChange}
    onFocus={this.onFocus}
    onBlur={this.onBlur}
    onSearch={this.onSearch}
 
  > 

{data2}
  </Select>
  </div>
<Select name="municipios" id="municipio" form="municipioform" 
    showSearch
    style={{ width: 400 }}
    placeholder="Seleccione un Curso"
    optionFilterProp="children"
    onChange={this.onChange2}
    onFocus={this.onFocus2}
    onBlur={this.onBlur2}
    onSearch={this.onSearch2}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
  }
  > 

{data}
  </Select>

<br/>
<br/>
  <button onClick={this.send} className="btn btn-primary">Guardar</button>
</div>
</div>
</div>
            <img
      
src={a}
height={300}
width={500}
/>
</>
      
          )
    }

}

