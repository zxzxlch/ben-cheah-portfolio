import React from 'react';
import { Link } from 'gatsby';
import { Bars as BarsIcon } from '@styled-icons/fa-solid/Bars';

const Navbar = () => {
  return (
    <nav className="flex flex-col sm:flex-row justify-between mx-3 mb-6 px-2 pt-5 pb-2 sm:pt-10 sm:pb-6 sm:px-1 sm:mx-0 space-y-4 sm:space-y-0 border-b border-gray-600 font-serif ">
      <div className="w-full flex justify-between">
        <Link to="/" className="font-bold text-lg leading-9">
          Ben Cheah
        </Link>
        <button className="sm:hidden w-12 h-12 -mr-2 -mt-2 flex justify-center items-center">
          <span className="sr-only">Toggle navigation</span>
          <BarsIcon size="16" />
        </button>
      </div>
      <ul className="hidden sm:flex flex-col sm:flex-row pb-6 sm:pb-0 sm:space-y-0 sm:space-x-12 text-base text-gray-700 space-y-6">
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
  );
};

export default Navbar;
