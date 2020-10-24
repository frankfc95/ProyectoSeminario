/* eslint-disable */
import React from 'react'
import axios from 'axios';
import { Table, Input, Button, Modal, message } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined} from '@ant-design/icons';
import Cookies from 'js-cookie';
import a from './a.png';

var exchange=[];
var data=[];
var data2=[];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var uri;

export default class ListarCursos extends React.Component {
 constructor(props) {
    super(props);

    this.state = {
      datagrid:[],
      tables:[],
        searchText: '',
    searchedColumn: '',
    selectedRowKeys:[],
    longData:null,
    modalVerAlumnos: false,
    modalVerCursos: false,
    modaldetalles: false,
    datosCursos:[],
    name:'',
    datosAlumnos:[],
    dataNombre:'',
    modalEditarNota:false,
    activ:[],
    activ2:[],
      datosinitial:[],
    };

    this.llenargrid=this.llenargrid.bind(this);
      this.onSelectChange=this.onSelectChange.bind(this);
         this.showmodal1=this.showmodal1.bind(this);
            this.getDatoCurso=this.getDatoCurso.bind(this);
            this.cerrarModal1=this.cerrarModal1.bind(this);
            this.recuestdata=this.recuestdata.bind(this);
            this.showmodal2=this.showmodal2.bind(this);
            this.cerrarModal2=this.cerrarModal2.bind(this);
            this.getDatoAlumno=this.getDatoAlumno.bind(this);
            this.editarNota=this.editarNota.bind(this);
            this.saveChanges=this.saveChanges.bind(this);
            this.showmodal3=this.showmodal3.bind(this);
            this.cerrarModal3=this.saveChanges.bind(this);
            this.initial=this.initial.bind(this);
 
  }


async initial()
{
  var rol=Cookies.get("rolNew");

//console.log(data);
 var userid=Cookies.get("userId");



if(rol=="admin")
{

uri='http://myinfancia.australiaeast.cloudapp.azure.com:1012/cursos';

    for (var i = 0; i < 2; i++) {
this.llenargrid();
    }
}

if(rol=="catedratico")
{


 await axios.get('http://myinfancia.australiaeast.cloudapp.azure.com:1012/catedraticos/'+userid+'/initial')
      .then(res => {
        this.setState({
           datosinitial: res.data
         });

const {datosinitial}=this.state;

var s=datosinitial.id;

if(s>0)
{
  uri='http://myinfancia.australiaeast.cloudapp.azure.com:1012/catedraticos/'+s+'/cursos';

    for (var i = 0; i < 2; i++) {
this.llenargrid();
    }
}




});



}





}




cerrarModal2()
{
    this.setState({modalVerAlumnos: false});
}

showmodal2()
{
  this.setState({modalVerAlumnos: true});
}


cerrarModal1()
{
    this.setState({modalVerCursos: false});
}

showmodal1()
{
  this.setState({modalVerCursos: true});
}


recuestdata()
{
this.showmodal1();
}

async getDatoCurso(id)
{
 console.log(id);
this.setState({datosCursos:[]});


 await  axios.get('http://myinfancia.australiaeast.cloudapp.azure.com:1012/cursos/'+id)
      .then(res => {
        this.setState({
           datagrid: res.data,
           longData: res.data.length
         });

var {datosCursos}=this.state;


const {datagrid}=this.state;

var a=datagrid.id;
var b=datagrid.nombre;
var c=datagrid.prerequisito;

 if(c>0)
{
  axios.get('http://myinfancia.australiaeast.cloudapp.azure.com:1012/cursos/'+c)
      .then(res => {
        this.setState({
           name: res.data.nombre
         });


      });
exchange=[];
const {name}=this.state;

for(var j=0; j<2; j++)
  {exchange=name;}

      if(name==null)
{
  console.log("no existe");
}
else{
datosCursos.push(
  <div>
  <p>
  C000{a}
  </p>
<div className="col-md-5">
<h4>{b}</h4>  
</div>
<div className="col-md-12">
Prerequisito: <h4>C000{c} {exchange}</h4>  
</div>
  </div>
  );


}

}
else{
datosCursos.push(
  <div>
  <p>
  C000{a}
  </p>
<div className="col-md-5">
<h4>{b}</h4>  
</div>
<div className="col-md-12">
Prerequisito: <h4>C000{c}</h4>  
</div>
  </div>
  );


}



      });

this.recuestdata();
}







getDatoAlumno(id)
{

for (var i = 0; i < 2; i++) {



 console.log(id);

var a;
var b;
var c;
var d;
var e;
var f;
var g;
var h;
var hj;


 axios.get('http://myinfancia.australiaeast.cloudapp.azure.com:1012/cursos/'+id+'/notas')
      .then(res => {
        this.setState({
           datosAlumnos: res.data,
           longData: res.data.length
         });

var {datosAlumnos}=this.state;
var {longData}=this.state;

//console.log(longData);
data2=[];

for (var i = 0; i <longData; i++) {

var nombres;
a=datosAlumnos[i].alumno;
b=datosAlumnos[i].parcial1;
c=datosAlumnos[i].parcial2;
d=datosAlumnos[i].parcial3;
e=datosAlumnos[i].proyecto;
f=datosAlumnos[i].actividad;
g=datosAlumnos[i].examen;
h=b+c+d+e+f+g;
hj=datosAlumnos[i].nombreA;

var xc=datosAlumnos[i].id;
//var ni;

console.log(a);
var option=(<Button onClick={this.editarNota.bind(this, xc)}>Editar</Button>);
data2.push({
"key": a,
"alumno": hj,
"parcial1": b,
"parcial2": c,
"parcial3": d,
"proyecto": e,
"actividades": f,
"examen": g,
"nota": h,
"option": option

});

}      });

}

this.showmodal2();
}


editarNota(id)
{
  console.log(id);

  axios.get('http://myinfancia.australiaeast.cloudapp.azure.com:1012/notas/'+id)
      .then(res => {
        this.setState({
          activ: res.data,
         });

           const {activ}=this.state;

     console.log(activ[0].parcial1);

var total=activ[0].parcial1+activ[0].parcial2+activ[0].parcial3+activ[0].proyecto+activ[0].actividad+activ[0].examen;

document.getElementById('input1').value=activ[0].parcial1;
document.getElementById('input2').value=activ[0].parcial2;
document.getElementById('input3').value=activ[0].parcial3;
document.getElementById('input4').value=activ[0].proyecto;
document.getElementById('input5').value=activ[0].actividad;
document.getElementById('input6').value=activ[0].examen;
document.getElementById('input7').value=total;
document.getElementById('input8').value=id;
});





this.showmodal3();

}

showmodal3()
{
  this.setState({modalEditarNota: true});
}

cerrarModal3()
{
  this.setState({modalEditarNota: false});
}

saveChanges()
{
  this.setState({modalEditarNota: false});

var a=parseInt(document.getElementById('input1').value);
var b=parseInt(document.getElementById('input2').value);
var c=parseInt(document.getElementById('input3').value);

var d=parseInt(document.getElementById('input4').value);//proyecto

var e=parseInt(document.getElementById('input5').value);//actividad
var f=parseInt(document.getElementById('input6').value);//examen

var g=parseInt(document.getElementById('input7').value);//nota final
var xc=parseInt(document.getElementById('input8').value);

var total=a+b+c+d+e+f;

console.log("total:"+total);
if(total>100)
{
  message.info("Los valores ingresados no son validos...")
}
else
{


  message.loading("Guardando...")


  axios.get('http://myinfancia.australiaeast.cloudapp.azure.com:1012/notas/'+xc)
      .then(res => {
        this.setState({
          activ2: res.data,
         });

           const {activ2}=this.state;

     console.log(activ2[0].parcial1);





var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");


var objeto={};

objeto.parcial1=a;
objeto.parcial2=b;
objeto.parcial3=c;
objeto.proyecto=d;
objeto.actividad=e;

objeto.examen=f;
objeto.alumno=parseInt(activ2[0].alumno);
objeto.curso=parseInt(activ2[0].curso);
objeto.nombreA=activ2[0].nombreA;
objeto.nombreC=activ2[0].nombreC;




var raw = JSON.stringify(objeto);
console.log(raw);


var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://myinfancia.australiaeast.cloudapp.azure.com:1012/alumnos/"+activ2[0].alumno+'/notas/'+xc, requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .then(
  console.log("paso1")

    )
  .catch(error => console.log('error', error));



});


      console.log(xc);

}





}




llenargrid()
{

  try{

  axios.get(uri)
      .then(res => {
        this.setState({
           datagrid: res.data,
           longData: res.data.length
         });

//console.log(this.state.datagrid);

const {longData ,datagrid}=this.state;
data=[];

for (var i = 0; i < longData; i++) {

var option=(<Button onClick={this.getDatoCurso.bind(this, datagrid[i].id)} >Ver</Button>)
var option2=(<Button onClick={this.getDatoAlumno.bind(this, datagrid[i].id)} >Detalles</Button>)

data.push(
{
  key: datagrid[i].id,
  id: "C000"+datagrid[i].id,
  nombre: datagrid[i].nombre,
  prerequisito: "C000"+datagrid[i].prerequisito,
  option: option,
  alumnos: option2
});

}



      });
}
catch(err)
{
  console.error(err);
}
         
}


 onSelectChange(selectedRowKeys) {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };


componentWillMount() {
  try{


this.initial();

    
  }catch(err){
    console.error('#ERROR Error en willMount de la pagina de formularios: ' + err);
  }
}


 getColumnSearchProps = dataIndex => ({




    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div className="container" style={{ padding: 20 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          icon={<SearchOutlined />}
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };





		render(){


const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };


const columns2=[
  {
        title: 'Alumno',
        dataIndex: 'alumno',
        key: 'alumno',
        width: '30%',
        ...this.getColumnSearchProps('alumno'),
      },
        {
        title: 'Parcial 1',
        dataIndex: 'parcial1',
        key: 'parcial1',
        width: '11%',
      },
     {
        title: 'Parcial 2',
        dataIndex: 'parcial2',
        key: 'parcial2',
        width: '11%',
      },
    {
        title: 'Parcial 3',
        dataIndex: 'parcial3',
        key: 'parcial3',
        width: '11%',
      },
          {
        title: 'Proyecto',
        dataIndex: 'proyecto',
        key: 'proyecto',
        width: '11%',
      },
        {
        title: 'Actividades',
        dataIndex: 'actividades',
        key: 'actividades',
        width: '11%',
      },
       {
        title: 'Examen Final',
        dataIndex: 'examen',
        key: 'examen',
        width: '11%',
      },
          {
        title: 'Nota',
        dataIndex: 'nota',
        key: 'nota',
        width: '2%',
      },
         {
        title: 'Editar',
        dataIndex: 'option',
        key: 'option',
        width: '2%',
      },
];



    const columns = [
       {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
        width: '10%',
        ...this.getColumnSearchProps('id'),
      },
      {
        title: 'Nombre',
        dataIndex: 'nombre',
        key: 'nombre',
        width: '35%',
        ...this.getColumnSearchProps('nombre'),
      },
      {
        title: 'Prerequisito',
        dataIndex: 'prerequisito',
        key: 'prerequisito',
        width: '35%',
        ...this.getColumnSearchProps('prerequisito'),
      }, 
         {
        title: 'Detalles',
        dataIndex: 'option',
        key: 'option',
        width: '10%',
     
      }, 
       {
        title: 'Alumnos',
        dataIndex: 'alumnos',
        key: 'alumnos',
        width: '10%',
     
      }, 
   
    ];



			return( 
				<div className="container">
<Modal visible={this.state.modalVerCursos} okText="Crear" width={900} cancelText="Cancelar" onCancel={this.cerrarModal1} onOk={this.cerrarModal1}>
{this.state.datosCursos}
</Modal>

<Modal visible={this.state.modalVerAlumnos} okText="Crear" width={1500} cancelText="Cancelar" onCancel={this.cerrarModal2} onOk={this.cerrarModal2}>
<Table columns={columns2} dataSource={data2} />
</Modal>

<Modal visible={this.state.modalEditarNota} okText="Crear" width={500} cancelText="Cancelar" onCancel={this.cerrarModal3} onOk={this.saveChanges}>


 <div className="form-group">
    <label for="exampleInputNombre">Parcial 1</label>
    <input type="number" class="form-control" id="input1" aria-describedby="nombreHelp" placeholder=""/>
  </div>
   <div className="form-group">
    <label for="exampleInputNombre">Parcial 2</label>
    <input type="number" class="form-control" id="input2" aria-describedby="nombreHelp" placeholder=""/>
  </div>

 <div className="form-group">
    <label for="exampleInputNombre">Parcial 3</label>
    <input type="number" class="form-control" id="input3" aria-describedby="nombreHelp" placeholder=""/>
  </div>

 <div className="form-group">
    <label for="exampleInputNombre">Proyecto</label>
    <input type="number" class="form-control" id="input4" aria-describedby="nombreHelp" placeholder=""/>
  </div>

 <div className="form-group">
    <label for="exampleInputNombre">Actividades</label>
    <input type="number" class="form-control" id="input5" aria-describedby="nombreHelp" placeholder=""/>
  </div>

<div className="form-group">
    <label for="exampleInputNombre">Examen Final</label>
    <input type="number" class="form-control" id="input6" aria-describedby="nombreHelp" placeholder=""/>
  </div>

  <div className="form-group">
    <label for="exampleInputNombre">Nota Final</label>
    <input type="number" class="form-control" id="input7" aria-describedby="nombreHelp" placeholder="" disabled/>
    <input type="number" class="form-control" id="input8" aria-describedby="nombreHelp" placeholder="" hidden={true}/>
  </div>


</Modal>



<Table rowSelection={rowSelection}  columns={columns} dataSource={data} />

     <img
      
src={a}
height='40%'
width='40%'
/>
</div>
			
					)
		}

}
