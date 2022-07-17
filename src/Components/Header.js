import React from 'react'
import '../css/header.scss'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from "../Assets/logo.png"


const link_text = {
  
  color: "black",
 
}


export default function Header() {
    return (
        <Navbar collapseOnSelect expand="md" className='bar' >
      <Container fluid>
      <Navbar.Brand className="brand" href="#home"><img alt="Fatima TZ" className="logo-icon" src={logo} /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        
        <Nav className='main-nav d-flex flex-grow-1 flex-md-row-reverse'>
            
           <a  className='navbar-link' href="#projects" ><Navbar.Text style={link_text}>Projects</Navbar.Text></a>
           <a className='navbar-link' href="#education" ><Navbar.Text style={link_text}>Education</Navbar.Text></a>
           <a className='navbar-link' href="#work" ><Navbar.Text style={link_text}>Work Experience</Navbar.Text></a>
           <a className='navbar-link' href="#skills"><Navbar.Text style={link_text}>Skills</Navbar.Text></a>
          
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
      )
}
