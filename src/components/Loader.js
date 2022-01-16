import React from 'react'
import { Container, Spinner } from "react-bootstrap"

export default function Loader() {
  return (
    <div>
      <Container>
      <Spinner animation="grow" role="status"></Spinner>
      </Container>
      
    </div>
  )
}
