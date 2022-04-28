import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/admin-layout"
import PrivateRoute from "../components/privateRoute"
import Houses from "../components/catalog"
import Smi from "../components/admin-smi"
import NewHouse from "../components/new-house"
import Login from "../components/login"


const App = () => {
  return (
    <Layout>
      <Router>
        <PrivateRoute path="/app/catalog" component={Houses} />
        <PrivateRoute path="/app/smi" component={Smi} />
        <PrivateRoute path="/app/new-house" component={NewHouse} />
        <Login path="/app/login" />
      </Router>
    </Layout>
  )
}

export default App
