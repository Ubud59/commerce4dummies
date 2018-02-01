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
import CheckoutComponent from '../checkout/Checkout'
import PayementSuccessComponent from '../checkout/PaymentSuccess'
import PayementErrorComponent from '../checkout/PaymentError'


import CartIcon from '../cart/CartIcon';
import Cart from '../cart/Cart';

import { getUserState } from '../../store/users/selectors';

import { signOut } from '../../store/users/actions'
import { connect } from "react-redux";
import './App.css';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';;





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
                <div className="bar-item bar-title">
                  <div className="big-title">
                    Sports4All
                  </div>
                  <div className="small-title">
                    All for sports
                  </div>
                </div>
                <div className="bar-item bar-item-right">

                  {this.props.user.id ? (
                    <div>
                      <span>{this.props.user.givenName}</span>
                        <Avatar
                          src={this.props.user.avatar}
                          size={30}
                        />
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
          <div className="body-container">

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/categories" component={Categories}/>
            <Route path="/categories/:id" component={ProductList}/>
            <Route path="/product/:id" component={Product}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/checkout" component={CheckoutComponent}/>
            <Route path="/payment/success" component={PayementSuccessComponent}/>
            <Route path="/payment/error" component={PayementErrorComponent}/>

          </Switch>

          </div>
        </div>
      </Router>
    );
  }
}

const AppComponent = connect(getUserState, signOut)(App)
export {AppComponent};
export { App };
