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




export default class AsignacionCatedratico extends React.Component {
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




actividad3()
{

  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");


//var raw = JSON.stringify(objeto);

var requestOptions = {
  method: 'POST'
};

fetch("http://myinfancia.australiaeast.cloudapp.azure.com:1012/cursos/"+pre+'/catedraticos/'+pre2, requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .then(
  console.log("paso4"),

  message.info("Asignado")

    )
  .catch(error => console.log('error', error));


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
   that.actividad3();
      message.info("La relacion se creara",2);

    },
    onCancel() {
      message.info("Cancelado",2);
    },
  });
}



llenargrid2()
{

  try{

      axios.get('http://myinfancia.australiaeast.cloudapp.azure.com:1012/catedraticos')
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
    placeholder="Seleccione un Catedratico"
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

