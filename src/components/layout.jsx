import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './navbar';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <>
      <Helmet
        defaultTitle="Ben Cheah &middot; UX Designer"
        titleTemplate="Ben Cheah &middot; %s"
      >
        <html lang="en" />
        <meta charSet="utf-8" />
      </Helmet>
      <div className="text-base">
        <div className="mx-auto container max-w-3xl">
          <Navbar />
          <main className="px-5 sm:px-0 grid grid-cols-4 sm:grid-cols-8 gap-4 antialiased">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
