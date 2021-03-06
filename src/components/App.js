import React from "react"
import Signup from "./Signup"
import { AuthProvider } from "../contexts/AuthContext"
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import Orders from "./Orders"
import Recomendations from "./Recomendations"
import Menu from "./Menu"

function App() {
  return (
      <div>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <PrivateRoute path="/orders" component={Orders} />
              <PrivateRoute path="/recomendations" component={Recomendations} />
              <PrivateRoute path="/menu" component={Menu} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              
            </Switch>
          </AuthProvider>
        </Router>
      </div>
  )
}

export default App
