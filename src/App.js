import React from 'react';
import MenuCompleto from './Componentes/Menu.js';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import 'bootstrap/dist/css/bootstrap.min.css';
import Keycloak from './keycloak';
import Cookies from 'js-cookie';
import ReactDOM from 'react-dom';







export default class App extends React.Component {
 constructor(props) {
    super(props);

    this.state = {
    authenticated: false,
	userName:null,
	keycloak:null,
	roles:null,

keycloakConfig: {
		"url": "http://52.154.246.211:8080/auth/",
		"clientId": "INFANCIA",
		  "ssl-required": "external",
		   "verify-token-audience": true,
		"realm": "INFANCIA",
				  "credentials": {
    "secret": "75b4930e-353f-4894-b3cb-642a43d03e85"
  }

	}

    };


	this.loginDeKeycloak = this.loginDeKeycloak.bind(this);
	this.updateToken = this.updateToken.bind(this);
	this.getUserInfo = this.getUserInfo.bind(this);
	this.actualizarToken = this.actualizarToken.bind(this);
	this.print=this.print.bind(this);

  }





print(data)
{



	var roles = Cookies.get("userRoles");
		
		roles = roles.replace(/'/g, '"');
		roles = JSON.parse(roles);
	
//console.log(roles[0]);
//		var userid=Cookies.get("userId");
//console.log(userid);

Cookies.set("rolNew",roles[0]);


Cookies.set("userData",data);
//console.log(data);


 var userid=Cookies.get("userId");

ReactDOM.render(
  <React.StrictMode>
    <MenuCompleto rol={roles[0]} user={data} userId={userid}  />
  </React.StrictMode>,
   document.getElementById('root')

);




}





updateToken(){

	try{
		this.state.keycloak.updateToken(5).success(function() {
//			Cookies("token",this.state.keycloak.token);

			

		});
	}catch(err){
		console.error("Fallo el update del token: "+err);
	}
}



actualizarToken(){
	try{
		Cookies("token",this.state.keycloak.token);
	}catch(err){
		console.error("Fallo el update de la cookie del token: "+err);
	}

}





loginDeKeycloak(){



	const keycloak = Keycloak(this.state.keycloakConfig);
	keycloak.init({onLoad: 'login-required',"checkLoginIframe": false,refreshToken:30})
	.then(authenticated => {
	
		Cookies.set("userId",keycloak.subject);
		Cookies.remove("userRoles");
		//var userName = keycloak.profile.username.toString();
		this.setState({
			userName:"UserName"
		});


	
		Cookies.set("userRoles",keycloak.realmAccess.roles);
		this.setState({roles:keycloak.realmAccess.roles});

	this.setState({keycloak:keycloak});


		Cookies.set("token",keycloak.token);
	
		 this.intervalID = setInterval(
          () => this.updateToken(),
          20000
        );
		this.getUserInfo();

		

		this.intervalID = setInterval(
          () => this.actualizarToken(),
          1000
        );
	
	
	});
}


getUserInfo(){
	this.state.keycloak.loadUserProfile().success((profile) => {
		this.setState({
			userName:profile.firstName.toString()+" "+profile.lastName.toString()
		});
//console.log(this.state.userName);

this.print(this.state.userName);



	}).error(() => {
	  alert('Failed to load user profile');

	});
	this.state.keycloak.loadUserInfo().success((info) => {
	}).error(() => {
	  alert('Failed to load user profile');

	});

}




componentWillMount() {
		try{
			
	//this.loginDeKeycloak();

	var a='admin';
	var b='admin';
	var c='12345678';
		ReactDOM.render(
	  <React.StrictMode>
	    <MenuCompleto rol={a} user={b} userId={c}  />
	  </React.StrictMode>,
	   document.getElementById('root')

	);

		}catch(err){
			console.error('Error en WillMount de la pagina: ' + err);
		}
	}

render()



{


  return (
    <div className="App">
Iniciando aplicación.....
    </div>
  );
}
}


