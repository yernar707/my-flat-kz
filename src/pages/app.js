import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/admin-layout"
import PrivateRoute from "../components/privateRoute"
import Houses from "../components/catalog"
import Smi from "../components/admin-smi"
import NewHouse from "../components/new-house"
import EditHouse from "../components/edit-house"
import Login from "../components/login"
import Queries from "../components/queries"


const App = () => {
  return (
    <Layout>
      <Router>
        <PrivateRoute path="/app/catalog" component={Houses} />
        <PrivateRoute path="/app/smi" component={Smi} />
        <PrivateRoute path="/app/new-house" component={NewHouse} />
        <PrivateRoute path="/app/queries" component={Queries} />
        <PrivateRoute path="/app/edit-house" component={EditHouse} />
        <Login path="/app/login" />
      </Router>
    </Layout>
  )
}

export default App
