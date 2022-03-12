import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import PageTitle from '../components/page-title';
import { post } from '../styles/post.module.css';

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <div className="col-span-7">
        <div id="main" className={post}>
          <PageTitle>Contact</PageTitle>
          <p>
            Hey there! If you'd like to reach out, you can{' '}
            <a href="mail&#116;o&#58;&#37;62e&#37;&#54;&#69;&#37;&#54;&#65;&#99;%68%62&#64;&#103;m&#97;il%2Ec&#37;6Fm">
              drop me an email
            </a>{' '}
            or find me on{' '}
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
      </div>
    </Layout>
  );
};

export default Index;
