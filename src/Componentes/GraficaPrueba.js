/* eslint-disable */
import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import axios from 'axios';
import {Button } from 'antd';

//var data1=[];

var ingenieria=[];
var admon=[];
var derecho=[];
var psico=[];
var ingenieria2=[];
var admon2=[];
var derecho2=[];
var psico2=[];
var ingenieria3=[];
var admon3=[];
var derecho3=[];
var psico3=[];
var ingenieria4=[];
var admon4=[];
var derecho4=[];
var psico4=[];
var ingenieria5=[];
var admon5=[];
var derecho5=[];
var psico5=[];
var pasaco;
export default class Grafica extends React.Component {
 constructor(props) {
    super(props);

    this.state = {
      datagrid:[],
      tables:[],
      datosinitial:[],
      datalength: null,
        datosinitial2:[],
      datalength2: null,
          datosinitial3:[],
      datalength3: null,
           datosinitial4:[],
      datalength4: null,
           datosinitial5:[],
      datalength5: null,
      pasa:[]
    };

this.listar=this.listar.bind(this);
  }

async listar()
{
   await axios.get('http://localhost:1012/municipios/1/total')
      .then(res => {
        this.setState({
           datosinitial: res.data,
           datalength: res.data.length
         });

        console.log(this.state.datosinitial);

const {datalength}=this.state;

const {datosinitial}=this.state;

for (var i = 0; i < datalength; i++) {



if(datosinitial[i].carrera=="Licenciatura en Administracion de Empresas")
{
admon.push(1);
}

if(datosinitial[i].carrera=="Ingenieria en Sistemas de Informacion")
{
ingenieria.push(2);
}

if(datosinitial[i].carrera=="Licenciatura en Ciencias Juridicas")
{
derecho.push(3);
}

if(datosinitial[i].carrera=="Licenciatura en Psicologia Clinica")
{
psico.push(4);
}





}



      });



await axios.get('http://localhost:1012/municipios/2/total')
      .then(res => {
        this.setState({
           datosinitial2: res.data,
           datalength2: res.data.length
         });

        console.log(this.state.datosinitial2);


const {datalength2}=this.state;

const {datosinitial2}=this.state;

for (var i = 0; i < datalength2; i++) {



if(datosinitial2[i].carrera=="Licenciatura en Administracion de Empresas")
{
admon2.push(1);
}

if(datosinitial2[i].carrera=="Ingenieria en Sistemas de Informacion")
{
ingenieria2.push(2);
}

if(datosinitial2[i].carrera=="Licenciatura en Ciencias Juridicas")
{
derecho2.push(3);
}

if(datosinitial2[i].carrera=="Licenciatura en Psicologia Clinica")
{
psico2.push(4);
}





}




      });




await axios.get('http://localhost:1012/municipios/3/total')
      .then(res => {
        this.setState({
           datosinitial3: res.data,
           datalength3: res.data.length
         });

        console.log(this.state.datosinitial3);


const {datalength3}=this.state;
const {datosinitial3}=this.state;

for (var i = 0; i < datalength3; i++) {



if(datosinitial3[i].carrera=="Licenciatura en Administracion de Empresas")
{
admon3.push(1);
}

if(datosinitial3[i].carrera=="Ingenieria en Sistemas de Informacion")
{
ingenieria3.push(2);
}

if(datosinitial3[i].carrera=="Licenciatura en Ciencias Juridicas")
{
derecho3.push(3);
}

if(datosinitial3[i].carrera=="Licenciatura en Psicologia Clinica")
{
psico3.push(4);
}





}


      });






await axios.get('http://localhost:1012/municipios/4/total')
      .then(res => {
        this.setState({
           datosinitial4: res.data,
           datalength4: res.data.length
         });

        console.log(this.state.datosinitial4);


const {datalength4}=this.state;
//for (var i = 0; i < datalength; i++) {
//}


const {datosinitial4}=this.state;

for (var i = 0; i < datalength4; i++) {



if(datosinitial4[i].carrera=="Licenciatura en Administracion de Empresas")
{
admon4.push(1);
}

if(datosinitial4[i].carrera=="Ingenieria en Sistemas de Informacion")
{
ingenieria4.push(2);
}

if(datosinitial4[i].carrera=="Licenciatura en Ciencias Juridicas")
{
derecho4.push(3);
}

if(datosinitial4[i].carrera=="Licenciatura en Psicologia Clinica")
{
psico4.push(4);
}





}

      });


await axios.get('http://localhost:1012/municipios/5/total')
      .then(res => {
        this.setState({
           datosinitial5: res.data,
           datalength5: res.data.length
         });

        console.log(this.state.datosinitial5);


const {datalength5}=this.state;

const {datosinitial5}=this.state;

for (var i = 0; i < datalength5; i++) {



if(datosinitial5[i].carrera=="Licenciatura en Administracion de Empresas")
{
admon5.push(1);
}

if(datosinitial5[i].carrera=="Ingenieria en Sistemas de Informacion")
{
ingenieria5.push(2);
}

if(datosinitial5[i].carrera=="Licenciatura en Ciencias Juridicas")
{
derecho5.push(3);
}

if(datosinitial5[i].carrera=="Licenciatura en Psicologia Clinica")
{
psico5.push(4);
}





}

      });



console.log(ingenieria.length);
console.log(ingenieria2.length);
console.log(ingenieria3.length);
console.log(ingenieria4.length);
console.log(ingenieria5.length);



pasaco=ingenieria5.length;



this.setState({
pasa: pasaco
});

}









componentDidMount() {
  try{
this.listar();

    
  }catch(err){
    console.error('#ERROR Error en willMount de la pagina de formularios: ' + err);
  }
}






		render(){

      var style={width:'30%', height:"30%"}



   


			return( 
				<>
        <div className="container">

        <div className="container">
        <div className="float-right"><Button  style={{ color: 'white', background: '#E38628'  }} >Chiquimulilla</Button><br/>
<Button style={{ color: 'black', background: '#6A2135' }} >Guazacapan</Button><br/>
<Button style={{ color: 'white', background: '#28F14A' }}>Taxisco</Button><br/>
<Button style={{ color: 'white', background: '#28CDF1' }}>Ciudad Pedro de Alvarado</Button><br/>
<Button style={{ color: 'white', background: '#fff00f' }}>Pasaco</Button>
</div>
        <div className="row" style={style}>
<label>Municipios Presentes en sede Chiquimulilla</label>  

<PieChart
   data={[
    { title: 'Chiquimulilla', value: this.state.datalength, color: '#E2A9F3' },
    { title: 'Taxisco', value: this.state.datalength2, color: '#DF01D7' },
    { title: 'Guazacapan', value: this.state.datalength3, color: '#2ECCFA' },
    { title: 'Pedro de Alvarado', value: this.state.datalength4, color: '#F7FE2E' },
     { title: 'Pasaco', value: this.state.datalength5, color: '#81F781' },
  ]}

  animate={true}
label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
  animationDuration={1000}
/>
</div>  

<div className="container" style={style}>
<label>Ingenieria en Sistemas de Información</label>  
<PieChart
  data={[
    { title: 'Chiquimulilla', value: ingenieria2.length, color: '#E38628' },
    { title: 'Taxisco', value: ingenieria3.length, color: '#28F14A' },
    { title: 'Guazacapan', value: ingenieria.length, color: '#E74C3C' },
     { title: 'Pedro de Alvarado', value: ingenieria4.length, color: '#28CDF1' },
       { title: 'Pasaco', value: this.state.pasa, color: '#fff00f' },
   
  ]}

  animate={true}
label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
  animationDuration={700}
/>

</div>
<div className="row">
<div className="container" style={style}>
<label>Licenciatura en Ciencias Juridicas</label>  
<PieChart
  data={[
 { title: 'Chiquimulilla', value: derecho2.length, color: '#E38628' },
    { title: 'Taxisco', value: derecho3.length, color: '#28F14A' },
    { title: 'Guazacapan', value: derecho.length, color: '#E74C3C' },
     { title: 'Pedro de Alvarado', value: derecho4.length, color: '#28CDF1' },
       { title: 'Pasaco', value: derecho5.length, color: '#fff00f' },
  ]}

  animate={true}
label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
  animationDuration={700}
/>
</div>

<div className="row" style={style}>
<label>Licenciatura en Administración</label>  
<PieChart
  data={[
 { title: 'Chiquimulilla', value: admon2.length, color: '#E38628' },
    { title: 'Taxisco', value: admon3.length, color: '#28F14A' },
    { title: 'Guazacapan', value: admon.length, color: '#E74C3C' },
     { title: 'Pedro de Alvarado', value: admon4.length, color: '#28CDF1' },
       { title: 'Pasaco', value: admon5.length, color: '#fff00f' },
  ]}

  animate={true}
label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
  animationDuration={700}
/>
</div>
<div className="container" style={style}>
<label>Licenciatura en Psicología Clinica</label>  
<PieChart
  data={[
   { title: 'Chiquimulilla', value: psico2.length, color: '#E38628' },
    { title: 'Taxisco', value: psico3.length, color: '#28F14A' },
    { title: 'Guazacapan', value: psico.length, color: '#E74C3C' },
     { title: 'Pedro de Alvarado', value: psico4.length, color: '#28CDF1' },
       { title: 'Pasaco', value: psico5.length, color: '#fff00f' },
  ]}

  animate={true}
label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
  animationDuration={700}
/>
</div>
</div>
</div>
</div>
</>
			
					)
		}

}
