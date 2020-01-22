import React from 'react';
import { Link } from 'react-router-dom';

function MainLayout(props) {
  const { children } = props;

  return (
    <div>
      {/* <div><Link to='/follows'>Follows</Link></div>
      <div><Link to='/likes'>Likes</Link></div> */}
      {children}    
    </div>
  );
}

export default MainLayout;
