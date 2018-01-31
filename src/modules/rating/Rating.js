import React, { Component } from 'react';
import Star from 'material-ui-icons/Star';
import './Rating.css';

class Rating extends Component {
  render() {
    console.log(this.props)
    return(
      <div>
        <div className="stars-outer">
          <div className="stars-inner" style={{width: this.props.percent + "%"}}></div>
        </div>
      </div>
    )
  }
}


export default Rating
