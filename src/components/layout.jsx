import React from 'react';
import { Link } from 'gatsby';

const Layout = ({ children }) => {
  return (
    <div className="container text-base">
      <div className="mx-auto max-w-3xl">
        <nav className="font-serif flex justify-between pt-10 pb-6 px-1 mb-6 border-b border-gray-600">
          <Link to="/" className="font-bold text-lg">
            Ben Cheah
          </Link>
          <ul className="flex text-base text-gray-700 space-x-12">
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
        <main className="grid grid-cols-8 gap-4 text-gray-800">{children}</main>
        <footer className="px-1 pt-6 mt-20 border-t border-gray-600 text-gray-700 text-sm">
          <ul className="flex space-x-8">
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
    </div>
  );
};

export default Layout;
