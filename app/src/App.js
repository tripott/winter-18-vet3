import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Category from './pages/categories/show'
import Home from './pages/home'
import Resource from './pages/resource'
import Resources from './pages/resources'
import Categories from './pages/categories'
import NewResource from './pages/resources/new-resource'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/resources" component={Resources} />
            <Route
              exact
              path="/resources/new"
              render={props => <NewResource {...props} />}
            />
            <Route exact path="/resources/:id" component={Resource} />
            <Route exact path="/categories" component={Categories} />
            <Route path="/categories/:id" component={Category} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
