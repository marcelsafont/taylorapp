import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import Orders from "./Orders"

function App() {
  return (
    <Container>
      <div>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/taylorapp" component={Dashboard} />
              <PrivateRoute path="/taylorapp/update-profile" component={UpdateProfile} />
              <Route path="/taylorapp/signup" component={Signup} />
              <Route path="/taylorapp/login" component={Login} />
              <Route path="/taylorapp/forgot-password" component={ForgotPassword} />
              <Route path="/taylorapp/orders" component={Orders} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App
