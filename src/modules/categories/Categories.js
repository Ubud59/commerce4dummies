import React,{Component} from 'react';
import fetchCategories from '../../utils/categories.services';

import { connect } from "react-redux";
import { updateCategories } from "../../store/categories/actions";
import { getCategoriesState } from "../../store/categories/selectors";

import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

class Categories extends Component {
componentDidMount(){

  console.log(this.props);

  fetchCategories()
  .then(categories => this.props.fetchCategories(categories))
  .catch(error => console.warn(error));
}
render(){
  return (
    <div>
      {this.props.categories.categories.map((category, index) =>
        <Card key={index} onClick={() => this.props.history.push(`/categories/${category.id}`)}>
          <CardContent>
            <Typography type="headline" component="h2">
              {category.label}
            </Typography>
          </CardContent>
        </Card>
      )
    }

    </div>
  )
}
}
const CategoriesComponent = connect(getCategoriesState, updateCategories)(Categories)
export default CategoriesComponent;
