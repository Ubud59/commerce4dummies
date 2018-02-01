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

class Categories extends Component {
componentDidMount(){

  fetchCategories()
  .then(categories => this.props.fetchCategories(categories))
  .catch(error => console.warn(error));
}
render(){
  return (
    <div className="categoriesList">
      {this.props.categories.categories.map((category, index) =>
        <Card key={index} onClick={() => this.props.history.push(`/categories/${category.id}`)}>
          <CardMedia
            className="media"
            image={categoryLogo}
            title="category"
          />
          <CardContent className="card-content-bis">
            <Typography type="subheading" >
              {category.label}
            </Typography>
          </CardContent>
          <CardActions>
            <Button className="buttonCat" size="medium" color="primary">
              Click here
            </Button>
          </CardActions>
        </Card>
      )
    }

    </div>
  )
}
}
const CategoriesComponent = connect(getCategoriesState, updateCategories)(Categories)
export default CategoriesComponent;
