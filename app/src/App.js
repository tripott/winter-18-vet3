import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Category from './pages/categories/show'
import Home from './pages/home'
import Resource from './pages/resources/show'
import Resources from './pages/resources'
import Categories from './pages/categories'
import AddCategory from './pages/categories/addCategory'
import EditCategory from './pages/categories/edit'
import Search from './pages/search'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/search" component={Search} />
            <Route exact path="/resources" component={Resources} />
            <Route path="/resources/:id" component={Resource} />
            <Route exact path="/categories" component={Categories} />
            <Route exact path="/categories/new" component={AddCategory} />
            <Route exact path="/categories/:id" component={Category} />
            <Route path="/categories/:id/edit" component={EditCategory} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
