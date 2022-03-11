import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <div className="col-span-7">
        <h1 className="title mb-6">Contact</h1>
        <p>
          Hey there! If you'd like to reach out, you can email me at{' '}
          <a href="mailto:benjchb@gmail.com">benjchb@gmail.com</a> or find me on{' '}
          <a
            href="https://www.linkedin.com/in/benjamincheah/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    </Layout>
  );
};

export default Index;