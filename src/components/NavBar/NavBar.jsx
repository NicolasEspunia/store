import React from "react";

import{Navbar,Nav,NavDropdown,Container,Offcanvas} from "react-bootstrap"
import {Link} from "react-router-dom";
import CartWidget from './CartWidget';



const NavBar =()=>{
    return(
      
    

<Navbar bg="light" expand={false} fixed="top">
  <Container fluid>
    <Navbar.Brand href="#">Ecommerce</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
      >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Ecommerce</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
        <Nav>
                            <Link to="/cart">
                                <CartWidget />
                            </Link>                            
                        </Nav>

          <Link to ="/"><Nav.Link href="#action1">inicio</Nav.Link></Link>
          
          <NavDropdown title="Categorias" id="offcanvasNavbarDropdown">
          <Link to ="/categoria/monitores"><Nav.Link  href="categoria">Monitores</Nav.Link ></Link>
          <Link to ="/categoria/pcgamer"><Nav.Link  href="categoria">PcGamer</Nav.Link ></Link>
          <Link to ="/categoria/gabinetes"><Nav.Link  href="categoria">Gabinetes</Nav.Link ></Link>
           
          </NavDropdown>
        </Nav>
    
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
  )
    }

export default NavBar