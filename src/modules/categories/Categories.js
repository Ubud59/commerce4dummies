import React,{Component} from 'react';
import {fetchCategories} from '../../utils/categories.services';

import { connect } from "react-redux";
import { updateCategories } from "../../store/categories/actions";
import { getCategoriesState } from "../../store/categories/selectors";

import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import "./Categories.css"
import categoryLogo from './category.jpg';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ListSubheader from 'material-ui/List/ListSubheader';

class Categories extends Component {
  componentDidMount(){

    console.log(this.props);

    fetchCategories()
    .then(categories => this.props.fetchCategories(categories))
    .catch(error => console.warn(error));
  }

  render() {
    return (
      <div>
        <div>
          <List className="categories-header">
            <ListItem>
              <ListItemText primary={"Product categories"} />
            </ListItem>
          </List>
          <List className="categories-list">
              {this.props.categories.categories.map((category, index) => (
                <ListItem key={index} onClick={() => this.props.history.push(`/categories/${category.id}`)}>
                  <ListItemText secondary={category.label} />
                </ListItem>
              ))}
          </List>
        </div>

        <div>
        </div>
      </div>
    )
  }
}

const CategoriesComponent = connect(getCategoriesState, updateCategories)(Categories)
export default CategoriesComponent;
