import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap"
import { useHistory, Link } from "react-router-dom"

export default function Layout({ children }) {
  return (
    <div>
      <header>
        
          <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Profile</Nav.Link>
                <Nav.Link as={Link} to="/update-profile">Update Profile</Nav.Link>
                <Nav.Link as={Link} to="/recomendations">Recomendations</Nav.Link>
                <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
                <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
              </Nav>
              
            </Navbar.Collapse>
            </Container>
        </Navbar>
     
     </header> 
      <main>
        { children }

      </main>
      <footer></footer>
    </div>
  )
}
