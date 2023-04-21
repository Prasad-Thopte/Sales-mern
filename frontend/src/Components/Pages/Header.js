import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import {
  
  
  
  Link,

  Outlet
} from "react-router-dom";



function Header({setLoginUser}) {
  return (
    <>
      
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to={"/AddSales"}>Sales App</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/AddSales"}> ADD SALES </Nav.Link>
                <Nav.Link as={Link} to={"/Top"}>TOP 5 SALES</Nav.Link>
                <Nav.Link as={Link} to={"/Revenue"}>TODAY'S TOTAL REVENUE</Nav.Link>
                <Nav.Link as={Link} to={"/Logout"} >LOGOUT</Nav.Link>
              
              
  
  
                

              </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>

      
      <Outlet/>
    </>
  )
}

export default Header