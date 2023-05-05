import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../index.css';
import Table from '../Table/Table';
import Navigation from '../Navigation/Navigation';


function Main() {
    return (
        <div className="App">
            <Navigation />
            <Table />
        </div>
    );
}

export default Main;