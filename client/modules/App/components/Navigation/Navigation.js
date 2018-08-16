import React from 'react';
import { Link } from 'react-router';

import styles from './Navigation.css';

const Navigation = props => {
  return (
    <nav className={styles['main-nav']}>
      <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/">Posts</Link></li>
        <li><Link to="/About">About</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
