import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import AnimatedGradient from './animated-gradient';

const Layout = ({ children }) => {
  return (
    <>
      <div className="container text-base">
        <div className="mx-auto max-w-3xl">
          <Navbar />
          <main className="px-5 sm:px-0 grid grid-cols-4 sm:grid-cols-8 gap-4 text-gray-800 antialiased">
            {children}
          </main>
          <Footer />
        </div>
      </div>
      <AnimatedGradient />
    </>
  );
};

export default Layout;
