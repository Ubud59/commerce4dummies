import React from 'react';
import { Link } from 'react-router-dom';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import "./Home.css";

function Home (props) {
  return (
    <div className="home-container">
      <div className="catalog">
        <Card>
        <Link to="/categories">
          <CardMedia className="card-categories"
            image="https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bec383ba2033f5fed5db39b769dd8d5a&auto=format&fit=crop&w=2850&q=80"
          />
        </Link>
          <CardContent>
            <Typography type="headline" component="h4">
              Product Catalog
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Home;
