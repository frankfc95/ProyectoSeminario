/* eslint-disable */
import React from 'react';

import axios from 'axios';

import { Modal,Button, message} from 'antd';

import { PDFViewer } from '@react-pdf/renderer';

import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

import pdf from './pdf.png';

import umg from './umg.png';


const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 15,
    padding: 10,
    flexGrow: 20
  }
});


var data=[];
var data2=[];

export default class Reportes extends React.Component {
 constructor(props) {
    super(props);

    this.state = {
    	datagrid:[],
      datagrid2:[],
    	tables:[],
    	visible: false,
        visible2: false,
    };
    this.llenarGridData=this.llenarGridData.bind(this);
this.cerrarshowInforme=this.cerrarshowInforme.bind(this);
    this.abrir=this.abrir.bind(this);
        this.llenarGridData2=this.llenarGridData2.bind(this);
this.cerrarshowInforme2=this.cerrarshowInforme2.bind(this);
    this.abrir2=this.abrir2.bind(this);
  }






//Funcion que se ejecuta antes del renderizado de la pagina para llenar la tabla de datos
componentWillMount() {
	try{


		
	}catch(err){
		console.error('#ERROR Error en willMount de la pagina de formularios: ' + err);
	}
}












abrir()
{

  message.loading("Generando...",5)
  message.loading("Generando...",5)
  message.loading("Generando...",5)


	this.setState({visible: true})

}


cerrarshowInforme()
{
	this.setState({visible: false})
}


abrir2()
{

  message.loading("Generando...")
  this.setState({visible2: true})
}


cerrarshowInforme2()
{
  this.setState({visible2: false})
}






llenarGridData()
{
	try{








	axios.get('http://localhost:1012/alumnos',{
			headers: {
				//'Authorization': 'Bearer ' + Cookies("token")
				//'Authorization' : 'Basic ZWxhc3RpYzpZcDlFaU9PVDZjOWY2V2lqMVlWNUlaMmI='
			}
		})
			.then(res => {
				this.setState({
					 datagrid: res.data

				});

				//console.log(res.data.hits);

const {datagrid}=this.state;
console.log(datagrid);


data=[];



for (var i = 0; i < datagrid.length; i++) {

//console.log(datagrid[i]._source.message);
//datagrid[i]._source.nombre_imagen,


var estado=datagrid[i].estado;
var tg;

if(estado===0)
{
	tg="Inactivo";
}
if(estado===1)
{
	tg="Activo";
}



data.push(
<View style={styles.section}>
<Text style={{ fontSize: '14px' }} >{datagrid[i].nombre} {datagrid[i].apellido}</Text>
<Text style={{ fontSize: '12px' }} >{datagrid[i].carrera}     {datagrid[i].telefono}    {tg}</Text>
<Text style={{ fontSize: '12px' }} >_______________________________________</Text>
    </View>
);





}



this.setState({ tables: data });
			})

	}
	catch(err)
	{
		console.error(err);
	}
}





llenarGridData2()
{
  try{








  axios.get('http://localhost:1012/catedraticos',{
      headers: {
        //'Authorization': 'Bearer ' + Cookies("token")
        //'Authorization' : 'Basic ZWxhc3RpYzpZcDlFaU9PVDZjOWY2V2lqMVlWNUlaMmI='
      }
    })
      .then(res => {
        this.setState({
           datagrid2: res.data

        });

        //console.log(res.data.hits);

const {datagrid2}=this.state;
console.log(datagrid2);


data2=[];



for (var i = 0; i < datagrid2.length; i++) {

//console.log(datagrid[i]._source.message);
//datagrid[i]._source.nombre_imagen,


var estado=datagrid2[i].estado;
var tg;

if(estado===0)
{
  tg="Inactivo";
}
if(estado===1)
{
  tg="Activo";
}



data2.push(
<View style={styles.section}>
<Text style={{ fontSize: '14px' }} >{datagrid2[i].nombre} {datagrid2[i].apellido}</Text>
<Text style={{ fontSize: '12px' }} >{datagrid2[i].telefono}    {tg}</Text>
<Text style={{ fontSize: '12px' }} >_______________________________________</Text>
    </View>
);





}



this.setState({ tables: data });







      })

  }
  catch(err)
  {
    console.error(err);
  }
}








componentDidMount()
{





	for (var i = 0; i < 2; i++) {
	this.llenarGridData();
  this.llenarGridData2();
	}

//	console.log(datas);
}


render()
{



var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;





	return(
		<>
    <div className="container" >
		<div className="align-items-center"> <div className="row">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
<p><div className="container" style={{ background: 'black', opacity: '0.5', width: '1000' }} >
<img
src={umg}
height={200}
width={900}
/>
</div></p>
<p>
<Button onClick={this.abrir} className="rounded-pill text-info">Generar Informe de Alumnos</Button>
   
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button onClick={this.abrir2} className="rounded-pill text-info">Generar Informe de Catedraticos</Button>
</p>

</div>
</div>


</div>

<img
src={pdf}
height={500}
/>



<Modal visible={this.state.visible} okText="Guardar" width={900} cancelText="Cerrar" onCancel={this.cerrarshowInforme} onOk={this.cerrarshowInforme}>
      <PDFViewer width={900} height={700}>
<Document title="Informe de Alumnos">
    <Page size="Letter" style={styles.page}>

 <View style={{
   color: 'black', margin: 30 
    }
  }>  


  <Text style={{textAlign: 'center'}}>Universidad Mariano Galvez.</Text>
   <Text style={{textAlign: 'center'}}>Informe de Alumnos</Text>
               <Text style={{textAlign: 'center'}}>__________</Text>
      <View style={styles.section}>
<Text style={{textAlign: 'center'}}>Fecha: {today}</Text>
              <Text style={{ fontSize: '12px' }}>______________________________________________________________</Text>
       {data}
          <Text style={{ fontSize: '12px' }}>______________________________________________________________</Text>
      </View>
   </View>
    </Page>
  </Document>
  </PDFViewer>		
</Modal>


<Modal visible={this.state.visible2} okText="Guardar" width={900} cancelText="Cerrar" onCancel={this.cerrarshowInforme2} onOk={this.cerrarshowInforme2}>      <PDFViewer width={900} height={700}>
<Document title="Informe de Catedraticos">
    <Page size="Letter" style={styles.page}>

 <View style={{
   color: 'black', margin: 30 
    }
  }>  


  <Text style={{textAlign: 'center'}}>Universidad Mariano Galvez.</Text>
   <Text style={{textAlign: 'center'}}>Informe de Catedraticos</Text>
               <Text style={{textAlign: 'center'}}>_________________</Text>
      <View style={styles.section}>
<Text style={{textAlign: 'center'}}>Fecha: {today}</Text>
          <Text style={{ fontSize: '12px' }}>________________________________________________________________</Text>  
       {data2}
            <Text style={{ fontSize: '12px' }}>______________________________________________________________</Text>
      </View>
   </View>
    </Page>
  </Document>
  </PDFViewer>    
</Modal>



</>
		);
}
}

