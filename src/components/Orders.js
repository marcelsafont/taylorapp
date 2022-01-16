import React, { useEffect, useState } from 'react'
import { useAuth } from "../contexts/AuthContext"
import { Container, ListGroup } from 'react-bootstrap'
import Layout from './Layout'
import Loader from './Loader'

export default function Orders() {
  const { currentUser } = useAuth()
  const [orders, setOrders] = useState(null);
  useEffect(()=>{
  fetch(process.env.REACT_APP_FIREBASE_USERORDERS,{
      method: 'POST',
      body: JSON.stringify({'email': currentUser.email})
    })
    .then(response => response.json())
    .then(setOrders)
  }, [currentUser.email]);
  if (!orders) {
    return (
      <div><Layout><Loader /></Layout></div>
    )
  }
  return (
      <Layout>
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
    </Layout>
  )
}
