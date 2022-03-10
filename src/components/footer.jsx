import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <footer className="mx-3 mt-20 px-2 pt-8 pb-6 sm:mx-0 sm:px-0 border-t border-gray-600 text-sm">
      <ul className="flex space-x-12">
        <li>
          <Link to="/" className="no-underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/works" className="no-underline">
            Works
          </Link>
        </li>
        <li>
          <Link to="/contact" className="no-underline">
            Contact
          </Link>
        </li>
      </ul>
      <div className="mt-12 text-xs text-gray-600">&#169;2022 Ben Cheah</div>
    </footer>
  );
};

export default Footer;
