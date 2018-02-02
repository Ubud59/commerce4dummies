import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';
import Categories from '../categories/Categories';
import Product from '../product/Product';
import ProductList from '../productList/ProductList';
import CheckoutComponent from '../checkout/Checkout'
import PayementSuccessComponent from '../checkout/PaymentSuccess'
import PayementErrorComponent from '../checkout/PaymentError'
import GoogleConnect from '../authentication/GoogleConnect'

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
import Avatar from 'material-ui/Avatar';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText, ListItemAvatar } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';



class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <AppBar color="default">
            <Toolbar className="bar" >
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

                        <List component="div" disablePadding>

                            <ListItem>
                            <ListItemText inset primary={this.props.user.givenName} onClick={this.props.signOut}/>
                              <Avatar alt="Remy Sharp" src={this.props.user.avatar} />
                            </ListItem>

                        </List>


                    </div>
                    ) : (
                      <GoogleConnect></GoogleConnect>
                  )}

                  <CartIcon/>
                </div>
              </div>
            </Toolbar>
          </AppBar>
          <div className="body-container">

            <Switch>
              <Route exact path="/" component={Categories}/>
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
