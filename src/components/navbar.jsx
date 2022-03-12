import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Bars as BarsIcon } from '@styled-icons/fa-solid/Bars';
import SiteLogo from '../images/site-logo.svg';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuLinks = [
    ['Home', '/'],
    ['Works', '/works'],
    ['Contact', '/contact'],
  ].map(([label, url]) => (
    <li key={label} className="block">
      <Link
        to={url}
        className="block py-2 sm:-my-2 text-gray-800 no-underline focus:underline hover:underline active:underline"
      >
        {label}
      </Link>
    </li>
  ));

  return (
    <header>
      <a
        className="absolute left-0 top-0 m-2 -translate-y-96 focus:translate-y-0 p-4 rounded bg-primary text-white font-bold text-lg underline"
        href="#main"
      >
        Skip to main content
      </a>
      <nav
        className="flex flex-col sm:flex-row justify-between mx-3 mb-6 px-2 pt-5 pb-2 sm:pt-10 sm:pb-6 sm:px-1 sm:mx-0 border-b border-gray-600 text-gray-900/90 font-serif"
        aria-label="Global"
      >
        <div className="w-full flex justify-between">
          <Link to="/" className="font-bold text-lg  leading-9 no-underline">
            <SiteLogo className="mt-1 w-auto h-[28px] fill-black" />
            <span className="sr-only">Ben Cheah Home</span>
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="sm:hidden w-12 h-12 -mr-2 -mt-2 flex justify-center items-center"
          >
            <span className="sr-only">Toggle navigation</span>
            <BarsIcon size="16" />
          </button>
        </div>
        <ul
          className={`${
            open ? '' : 'hidden'
          } sm:flex flex-col sm:flex-row mt-3 pb-4 space-y-3 sm:mt-0 sm:pb-0 sm:space-y-0 sm:space-x-12 text-base`}
        >
          {menuLinks}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
