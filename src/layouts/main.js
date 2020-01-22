import React from 'react';
import { Link } from 'react-router-dom';

function MainLayout(props) {
  const { children, name } = props;

  return (
    <div>
      {/* <div><Link to='/follows'>Follows</Link></div>
      <div><Link to='/likes'>Likes</Link></div> */}      
      <h1 className='layout__name'>{name}</h1>

      {children}    
    </div>
  );
}

export default MainLayout;
