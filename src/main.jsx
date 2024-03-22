import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/Navbar.jsx';
import Home from './Components/Home.jsx'
import SupplierTable from './Components/SupplierTable.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
     <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SupplierTable" element={<SupplierTable/>} />
          
        </Routes>
     </Router>
 );
