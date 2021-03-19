import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import HomePage from "../Pages/HomePage"
import LoginPage from "../Pages/LoginPage"
import NotFoundPage from "../Pages/NotFoundPage"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/home" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  )
}
export default App
