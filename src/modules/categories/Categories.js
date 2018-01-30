import React,{Component} from 'react';
import fetchCategories from '../../utils/categories.services';

class Categories extends Component {
componentDidMount(){
  fetchCategories()
  .then(categories => console.log(categories))
  .catch(error => console.warn(error));
}
render(){
  return (
    <div>
      Categories
    </div>
  )
}
}

export default Categories;
