/* eslint-disable */
import React from 'react'
import axios from 'axios';
import { Table, Input, Button, Modal } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined} from '@ant-design/icons';
import Cookies from 'js-cookie';

var exchange=[];
var data=[];
var data2=[];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



export default class ListarNotasAlumnos extends React.Component {
 constructor(props) {
    super(props);

    this.state = {
      datagrid:[],
      tables:[],
        searchText: '',
    searchedColumn: '',
    selectedRowKeys:[],
    longData:null,
    datosCursos:[],
    name:'',
    datosAlumnos:[],
    dataNombre:'',
    activ:[],
    activ2:[],
    };


  
      
            this.getDatoAlumno=this.getDatoAlumno.bind(this);
            this.init=this.init(this);
   
 
  }



 async init()
  {
   var a=Cookies.get("userId");


 await axios.get('http://myinfancia.australiaeast.cloudapp.azure.com:1012/alumnos/'+a+'/initial')
      .then(res => {
        this.setState({
           tables: res.data.id,

         });


const {tables}=this.state;


console.log(tables);

if(tables>0)
{

  for (var i = 0; i < 2; i++) {
     this.getDatoAlumno(tables);
  }

}

 



});

  }



async getDatoAlumno(id)
{



var a;
var b;
var c;
var d;
var e;
var f;
var g;
var h;
var hj;
 await axios.get('http://myinfancia.australiaeast.cloudapp.azure.com:1012/alumnos/'+id.toString()+'/notas')
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
hj=datosAlumnos[i].nombreC;

var xc=datosAlumnos[i].id;
//var ni;

console.log(a);

data2.push({
"key": a,
"alumno": hj,
"parcial1": b,
"parcial2": c,
"parcial3": d,
"proyecto": e,
"actividades": f,
"examen": g,
"nota": h

});

}      });



}









componentDidMount() {
  try{
this.init();
    
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


const columns2=[
  {
        title: 'Curso',
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
     
];




			return( 
				<div className="container">
        <Table columns={columns2} dataSource={data2} />
        </div>
			
					)
		}

}
