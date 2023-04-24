import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './Table.css';


class Table extends Component {
    state = {  } 
    render() { 
        return (
            <div className='main'>
                <div className='fila'>
                    <div className='botones-texto'>
                        <h1 className='botones-texto'>Peticiones:</h1>
                    </div>
                    <div className='botones'>
                        <ButtonGroup>
                            <Button variant="light">Pendientes</Button>
                            <Button variant="light">En espera</Button>
                            <Button variant="light">Rechazadas</Button>
                            <Button variant="light">Completadas</Button>
                        </ButtonGroup>
                    </div>
                </div>
                <div className='tabla'></div>
            </div>
            
        );
    }
}
 
export default Table;