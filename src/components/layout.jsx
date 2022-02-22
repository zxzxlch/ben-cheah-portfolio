import React from 'react';
import { Link } from 'gatsby';

const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <Link>Ben Cheah</Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/works">Works</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
      <footer>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/works">Works</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Layout;
