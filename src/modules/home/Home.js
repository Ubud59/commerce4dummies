import React from 'react';
import { Link } from 'react-router-dom';

function Home (props) {
  return (
    <div>
      <Link to="/categories">All sports</Link>
    </div>
  )
}

export default Home;
