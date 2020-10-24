/* eslint-disable */
import React from 'react';
import Cookies from 'js-cookie';
import {SmileTwoTone } from '@ant-design/icons';
import umg from './Reporteria/umg.png';
var data=[];


export default class Profile extends React.Component {
 constructor(props) {
    super(props);

    this.state = {
    	datagrid:[]

    };
    this.llenarGridData=this.llenarGridData.bind(this);

  }







llenarGridData()
{


data=Cookies.get("userData");


}

componentDidMount()
{


	for (var i = 0; i < 2; i++) {
	this.llenarGridData();

	}

//	console.log(datas);
}


render()
{




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


</div>
</div>
<p>
<h1><SmileTwoTone /></h1>
{data}
</p>

</div>






</>
		);
}
}

