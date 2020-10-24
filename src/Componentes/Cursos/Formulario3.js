/* eslint-disable */
import React from 'react'
import axios from 'axios';
import { Select,message, Modal} from 'antd';
import { ExclamationCircleOutlined} from '@ant-design/icons';
import a from './a.png';

const { Option } = Select;
var style={width: '50%'};

var data=[];
var pre='';
export default class Formulario3 extends React.Component {
 constructor(props) {
    super(props);

    this.state = {
      datagrid:[],
      tables:[],
      longData:null,
        searchText: '',
    searchedColumn: '',
    selectedRowKeys:[]
    };

    this.llenargrid=this.llenargrid.bind(this);
          this.onBlur2=this.onBlur2.bind(this);
    this.onFocus2=this.onFocus2.bind(this);
  this.onSearch2=this.onSearch2.bind(this);
   this.onChang2=this.onChange2.bind(this);
       this.send=this.send.bind(this);
    this.crear=this.crear.bind(this);
    this.limpiar=this.limpiar.bind(this);

 
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


componentDidMount() {
  try{

    for (var i = 0; i < 2; i++) {
this.llenargrid();
    }


    
  }catch(err){
    console.error('#ERROR Error en willMount de la pagina de formularios: ' + err);
  }
}



  limpiar()
  {

document.getElementById('curso').value='';

  }


send()
{
  var that=this;
Modal.confirm({
    title: 'Desea crear un nuevo Curso?',
    icon: <ExclamationCircleOutlined />,
    content: 'Este formulario es responsabilidad del administrador',
    okText: 'Crear',
    cancelText: 'Cancelar',
    onOk() {
   that.crear();
      message.info("El Curso se Creará",2);

    },
    onCancel() {
      message.info("Cancelado",2);
    },
  });
}



crear()
{

  try{
  var a=document.getElementById('curso').value;

   
         
var objeto={};

objeto.nombre=a;
objeto.prerequisito=parseInt(pre);



var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify(objeto);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://myinfancia.australiaeast.cloudapp.azure.com:1012/cursos", requestOptions)
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
    <div className="form-group">
    <label for="exampleInputNombre">Nombre</label>
    <input type="text" class="form-control" id="curso" aria-describedby="nombreHelp" placeholder="Ingrese el curso "/>
  </div>
<Select name="municipios" id="municipio" form="municipioform" 
    showSearch
    style={{ width: 400 }}
    placeholder="Seleccione Prerequisito"
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
height="30%"
width="50%"
/>

</>
			
					)
		}

}

