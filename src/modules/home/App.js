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
import { connect } from "react-redux";

import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';


class App extends Component {
  componentDidMount(){
    // console.log(this.props.user)
  }
  render() {
    console.log(this.props.user);
    return (
      <Router>
        <div>
          <AppBar position="static" color="default">
            <Toolbar>
              <Typography type="title" color="inherit">
                <Link to="/">Home</Link>
              </Typography>
            <div className="g-signin2" data-onsuccess="googleConnectCallback"></div>
            <div>

            {this.props.user.id ? (
                        <div>
                          <span>{this.props.user.givenName}</span>
                        </div>
                      ) : (
                        <div>
                          <span>{this.props.user.truc}</span>
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

const AppComponent = connect(getUserState)(App)
export default AppComponent;
