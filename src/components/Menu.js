
import React, {useState, useEffect} from "react"
import { useAuth } from "../contexts/AuthContext"
import Layout from './Layout'
import { Container } from "react-bootstrap"
import Loader from './Loader'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function Menu() {
  const { currentUser } = useAuth()
  const query = `
  {
    userCollection(where: {email: "${currentUser.email}"}){
      items{
        menu {
          url
        }
        listaDeLaCompra{
          json
        }
      }
    }
  }
  `
  const [user, setUser] = useState(null);

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/vxd1robh2rz8/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: "Bearer K6FL4jswbVbURRyh8G8jrKvAGc6ZfPsLRbUEUqGuPOQ",
        },
        // send the GraphQL query
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }
        // rerender the entire component with new data
        setUser(data.userCollection.items[0]);
      });
  }, []);

  if (!user) {
    return (
      <div><Layout><Loader /></Layout></div>
    )
  }
  return (
    <div>
      <Layout>
        <Container>
          <h1>Menú</h1>
          
          <div className="">
            <h2>Descargar menú</h2>
            <a href={ user.menu.url } download>Menu</a>
          </div>
          <div className="list-compra">
            <h2>Listado de la compra</h2>
          { documentToReactComponents(user.listaDeLaCompra.json) }
          </div>
        </Container>
      </Layout>
    </div>
    
  )
  
}


