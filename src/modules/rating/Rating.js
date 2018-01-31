import React, { Component } from 'react';
import Star from 'material-ui-icons/Star';
import './Rating.css';

function Rating(props) {
    return(
      <div>
        <div className="stars-outer">
          <div className="stars-inner" style={{width: props.percent + "%"}}></div>
        </div>
      </div>
    )
}

export default Rating
