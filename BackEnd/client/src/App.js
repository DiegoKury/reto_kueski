import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import Table from './components/Table/Table';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Table />
    </div>
  );
}

export default App;
