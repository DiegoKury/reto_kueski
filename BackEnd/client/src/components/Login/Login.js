import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import logo from './images/kueski.png';
import './Login.css';
import {
  MDBContainer,
  MDBInput,
  MDBBtn,
}
from 'mdb-react-ui-kit';

class Login extends Component {
    render() { 
        return (
            <div className='fondo'>
                <MDBContainer className='registro'>
                    <div className='inicio'>
                        <img width='200' height='100' src={logo} alt='kueski'/>
                    </div>
                    <div className='mensaje'>
                        <p>Bienvenido Administrador de Kueski</p>
                    </div>
                    <MDBInput wrapperClass='texto' label='Usuario' id='form1' type='email'/>
                    <MDBInput wrapperClass='texto' label='Contraseña' id='form2' type='password'/>
                    <Button href='./App.js'>Iniciar Sesion</Button>
                </MDBContainer>
            </div>
        );
    }
}
export default Login;

