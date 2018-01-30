import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';
import Categories from '../categories/Categories';
import Home from './Home';
import Product from '../product/Product';
import ProductList from '../productList/ProductList';

import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <AppBar position="static" color="default">
            <Toolbar>
              <Typography type="title" color="inherit">
                Commerce4Dummies
              </Typography>
            </Toolbar>
          </AppBar>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/categories" component={Categories}/>
            <Route path="/categories/:id" component={ProductList}/>
            <Route path="/product/:id" component={Product}/>

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
