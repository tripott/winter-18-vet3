import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Category from './pages/categories/show'
import Home from './pages/home'
import Resource from './pages/resources/show'
import Resources from './pages/resources'
import Categories from './pages/categories'
import AddCategory from './pages/categories/addCategory'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/resources" component={Resources} />
            <Route path="/resources/:id" component={Resource} />
            <Route exact path="/categories" component={Categories} />
            <Route exact path="/categories/new" component={AddCategory} />
            <Route path="/categories/:id" component={Category} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
