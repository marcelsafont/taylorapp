import React, { useEffect, useState } from 'react'
import { useAuth } from "../contexts/AuthContext"
import { Container, Navbar, Nav, ListGroup } from 'react-bootstrap'

export default function Orders() {
  const { currentUser } = useAuth()
  const [orders, setOrders] = useState([]);
  useEffect(()=>{
  fetch(process.env.REACT_APP_FIREBASE_USERORDERS,{
      method: 'POST',
      body: JSON.stringify({'email': currentUser.email})
    })
    .then(response => response.json())
    .then(setOrders);
  }, [currentUser.email]);
  return (
      <>
        <Navbar bg="light" expand="lg">
         
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/dashboard">Home</Nav.Link>
                <Nav.Link href="/update-profile">Update Profile</Nav.Link>
                <Nav.Link href="/orders">Orders</Nav.Link>
              </Nav>
            </Navbar.Collapse>
         
        </Navbar>
        <Container>
          <ListGroup>
            {orders.map(item => 
               <ListGroup.Item>
                  <div>{ item.title }</div>
                  <div>{ item.createdAt }</div>
                </ListGroup.Item>

            )}
          </ListGroup>
        </Container>
    </>
  )
}
