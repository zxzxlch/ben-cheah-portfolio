import React from 'react';
import Layout from '../components/layout';

const Index = () => {
  return (
    <Layout>
      <div className="col-span-7">
        <h1 className="title mb-6 font-sans">Page not found</h1>
        <p>Oops, this page doesn't exist.</p>
        <p>
          If there should be something here, please <a href="mailto:benjchb@gmail.com">email me</a> so I can fix it.
        </p>
      </div>
    </Layout>
  );
};

export default Index;
