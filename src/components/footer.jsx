import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  const menuLinks = [
    ['Home', '/'],
    ['Works', '/works'],
    ['Contact', '/contact'],
  ].map(([label, url]) => (
    <li key={label}>
      <Link
        to={url}
        className="text-gray-800 no-underline focus:underline hover:underline active:underline"
      >
        {label}
      </Link>
    </li>
  ));
  return (
    <footer className="mx-3 mt-20 px-2 pt-8 pb-6 sm:mx-0 sm:px-0 border-t border-gray-600 text-sm">
      <ul className="flex space-x-12">{menuLinks}</ul>
      <div className="mt-12 text-xs text-gray-600">&#169;2022 Ben Cheah</div>
    </footer>
  );
};

export default Footer;
