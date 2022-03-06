import './App.css';
import React, { useState } from 'react';
import Registration from './component/Registration';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar_Top from './component/Navbar_Top';
import { Container, Nav, Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      {/* =========  Navbar  ======== */}
      <Navbar_Top />

      {/* =========  Registration  ======== */}
      <div className="inner">
        <Registration />
      </div>
    </div>
  );
}

export default App;
