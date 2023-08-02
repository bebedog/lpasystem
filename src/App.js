/*
================================================================================
FILE        : app.jsx
AUTHOR      : Jayson O. Amodia, Kathryn Marie P. Sigaya
DESCRIPTION : JS file that is used by the root id to launch the website.
COPYRIGHT   : 31 July 2023
REVISION HISTORY
Date: 			By: 		Description:
31 July 2023    Amodia      Creation of file
================================================================================
*/


import './App.css';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import client from './myTables/client'
import lpa from './myTables/lpa'
import forbidden from './myTables/forbidden'
import admin from './myTables/admin'
// import db from './myHelpers/db'
// import { Pool } from 'pg';
// import db from './myHelpers/db'

function App() {
  const [mode, setMode] = useState("admin")

  function lpaView() {
    console.log(`lpa view button clicked`)
    setMode('lpa')
  }

  function clientView() {
    console.log(`client view button clicked`)
    setMode('client')
  }

  function dontClick() {
    console.log(`you clicked foribedden`)
    setMode('forbid')
  }

  function adminView() {
    console.log(`you clicked admin`)
    setMode('admin')
  }

  function modeSwitch() {
    switch (mode) {
      case "lpa":
        return lpa()
      case 'client':
        return client();
      case 'admin':
        return admin();
      default:
        return forbidden();
    }
  }


  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img className="ms-3"
              src="https://www.lasermet.com/wp-content/uploads/2023/02/cropped-Lasermet-Logo-800x800-1.jpeg"
              height={50}
            />
          </Navbar.Brand>
          <NavbarCollapse>
            <Nav className="me-auto">
              <Nav.Link onClick={adminView}>Admin View</Nav.Link>
              <Nav.Link onClick={clientView}>Client View</Nav.Link>
              <Nav.Link onClick={lpaView}>LPA View</Nav.Link>
              <Nav.Link onClick={dontClick}>Don't Click</Nav.Link>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>


      <div>
        {
          modeSwitch()
        }
      </div>
    </>
  );
}



export default App;
