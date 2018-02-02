import React,{Component} from 'react';
import {fetchCategories} from '../../utils/categories.services';

import { connect } from "react-redux";
import { updateCategories } from "../../store/categories/actions";
import { getCategoriesState } from "../../store/categories/selectors";
import ProductList from '../productList/ProductList';

import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import "./Categories.css"
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ListSubheader from 'material-ui/List/ListSubheader';

class Categories extends Component {
  componentDidMount(){

    this.props.selectCategory("");

    fetchCategories()
    .then(categories => this.props.fetchCategories(categories))
    .catch(error => console.warn(error));
  }

  render() {
    return (
      <div className="catalog-container">
        <div className="categories-list">
          <List className="categories-header">
            <ListItem >
              <ListItemText primary={"Product categories"} />
            </ListItem>
          </List>
          <List className="categories-details">
              {this.props.categories.categories.map((category, index) => (
                <ListItem key={index} onClick={() => this.props.selectCategory(category.id)}>
                  <ListItemText secondary={category.label} />
                </ListItem>
              ))}
          </List>
        </div>

        <div className="products-container">
          {(this.props.categories.categoryId ==="")?
            <div></div>:
            <ProductList/>
            }

        </div>
      </div>
    )
  }
}

const CategoriesComponent = connect(getCategoriesState, updateCategories)(Categories)
export default CategoriesComponent;
