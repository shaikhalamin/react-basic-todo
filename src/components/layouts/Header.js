import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Header</h1>
      <Link style={{color:'#fff'}} to="/">Home</Link> | <Link style={{color:'#fff'}} to="/about">About</Link>
    </header>
  )
}

const headerStyle = {
  textAlign:'center',
  backgroundColor:'#000',
  color:'#fff',
}

export default Header;
