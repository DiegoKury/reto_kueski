import React, { useState, useEffect, useMemo } from 'react';
import DataTable, {createTheme} from 'react-data-table-component';
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Filter from '../Filter/Filter';
import 'styled-components';
import './Table.css';


createTheme('solarized', {
    text: {
        primary: '#268bd2',
        secondary: '#2aa198',
    },
    background: {
        default: '#002b36',
    },
    context: {
        background: '#cb4b16',
        text: '#FFFFFF',
    },
    divider: {
        default: '#073642',
    },
    action: {
        button: 'rgba(0,0,0,.54)',
        hover: 'rgba(0,0,0,.08)',
        disabled: 'rgba(0,0,0,.12)',
    },
}, 'dark');


function RequestsTable() {
    // Hooks for the table
    const [requests, setRequests] = useState( [] );

    // Fetch data from the endpoint
    const getData = async (type) => {
        document.getElementById("spinner-overlay").hidden = false;   
        const response = await fetch('/api/requests?type=' + type);
        const data = await response.json();
        setRequests(data);
        document.getElementById("spinner-overlay").hidden = true;
    }

    useEffect(() => {
        getData("all");
    }, []);

    // Columns
    const columns = [
        {
            name: 'Folio',
            selector: row => row.request_id,
            sortable: true,
        },
        {
            name: 'Client ID',
            selector: row => row.client_id,
            sortable: true,
        },
        {
            name: 'ARCO right',
            selector: row => row.request_arco_right,
            sortable: true,
        },
        {
            name: 'Date',
            selector: row => row.request_date.slice(0, 10),
            sortable: true,
        },
        {
            name: "Hour",
            selector: row => row.request_date.slice(11, 19),
            sortable: true,
        },
        {
            name: 'Status',
            selector: row => row.request_status,
            sortable: true,
        },
    ];

    const [filtered, setFiltered] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

    const filteredData = requests.filter(
        item =>
            JSON.stringify(item).toUpperCase().indexOf(filtered.toUpperCase()) !== -1
    );

    const subHeader = useMemo(() => {
        const handleClear = () => {
            if (filtered) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFiltered('');
            }
        };

        return (
            <Filter
                onFilter={e => setFiltered(e.target.value)}
                onClear={handleClear}
                filterText={filtered}
            />
        );
    }, [filtered, resetPaginationToggle]);

    return (
        <div className='main'>
            <div className='fila'>
                <div className='botones-texto'>
                    <h1 className='botones-texto'>Peticiones:</h1>
                </div>
                <div className='botones'>
                    <ButtonGroup>
                        <Button variant="light" className='seleccion' onClick={() => getData('all')}>Todas</Button>
                        <Button variant="light" className='seleccion' onClick={() => getData('Pending')}>Pendientes</Button>
                        <Button variant="light" className='seleccion' onClick={() => getData("Waiting")}>En espera</Button>
                        <Button variant="light" className='seleccion' onClick={() => getData('Rejected')}>Rechazadas</Button>
                        <Button variant="light" className='seleccion' onClick={() => getData('Done')}>Completadas</Button>
                    </ButtonGroup>
                </div>
            </div>
            <div className='tabla'>
                <div className="spinner-overlay" id="spinner-overlay" hidden>
                    <div className="spinner">
                        <div className="spinner-border" role="status">
                            <span className="sr-only"></span>
                        </div>
                    </div>
                </div>
                <DataTable  
                    // title="requests"
                    columns={columns}
                    data={filteredData}
                    fixedHeader
                    fixedHeaderScrollHeight="300px"
                    pagination
                    paginationPerPage={25}
                    paginationComponentOptions={{ 
                        noRowsPerPage: true
                    }}
                    subHeader
                    subHeaderComponent={subHeader}
                    // theme="solarized"
                />
            </div>
        </div>
        
    )
}

export default RequestsTable