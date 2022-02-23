import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <footer className="mx-3 mt-20 px-2 pt-6 pb-8 sm:mx-0 sm:px-0 border-t border-gray-600 text-gray-700 text-sm">
      <ul className="flex space-x-12">
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
      <div className="mt-6 text-gray-500">&#169;2022 Ben Cheah</div>
    </footer>
  );
};

export default Footer;
