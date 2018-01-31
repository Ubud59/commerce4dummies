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
import CartIcon from '../cart/CartIcon';
import Cart from '../cart/Cart';

import { getUserState } from '../../store/users/selectors';
import { signOut } from '../../store/users/actions'
import { connect } from "react-redux";

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';

import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <AppBar position="static" color="default">
            <Toolbar>
              <div className="bar-container">
                <div className="bar-item bar-item-left">
                  <IconButton color="primary" aria-label="Home button">
                    <Link to="/"><Icon className="home-icon">home</Icon></Link>
                  </IconButton>
                </div>
                <div className="bar-item">
                  <h2>Commerce4Dummies</h2>
                </div>
                <div className="bar-item bar-item-right">

                  {this.props.user.id ? (
                    <div>
                      <span>{this.props.user.givenName}</span>
                      <Button raised onClick={this.props.signOut}>
                        Sign Out
                      </Button>
                    </div>
                    ) : (
                    <div>
                      <div className="g-signin2" data-onsuccess="googleConnectCallback"></div>
                    </div>
                  )}

                  <CartIcon/>
                </div>
              </div>
            </Toolbar>
          </AppBar>

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/categories" component={Categories}/>
            <Route path="/categories/:id" component={ProductList}/>
            <Route path="/product/:id" component={Product}/>
            <Route path="/cart" component={Cart}/>
          </Switch>

        </div>
      </Router>
    );
  }
}

const AppComponent = connect(getUserState, signOut)(App)
export default AppComponent;
export { App }
