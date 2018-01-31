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
import {getUserState} from '../../store/users/selectors';
import { signOut } from '../../store/users/actions'
import { connect } from "react-redux";

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

class App extends Component {

  render() {

    return (
      <Router>
        <div>
          <AppBar position="static" color="default">
            <Toolbar>
              <Typography type="title" color="inherit">
                <Link to="/">Home</Link>
              </Typography>
            <div>
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
            </div>
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

const AppComponent = connect(getUserState, signOut)(App)
export default AppComponent;
