import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Menu } from './styles';

function Header() {
  return (
    <Container>
      <Link to="/">
        <h1>Computer Force </h1>
      </Link>

      <Menu>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
      </Menu>
    </Container>
  );
}

export default Header;
