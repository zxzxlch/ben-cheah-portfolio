import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import PageTitle from '../components/page-title';
import '../styles/index.css';
import '@fontsource/pt-serif';
import '@fontsource/mulish/400.css';
import '@fontsource/mulish/700.css';

function Index() {
  return (
    <Layout>
      <Helmet>
        <title>UX Designer</title>
        <meta
          name="description"
          content="Hi, I'm Ben, a UX designer who is fluent in design and code. I lead with best practices in design research, usability testing, prototyping, and accessibility."
        />
      </Helmet>
      <div id="main" className="col-span-4 sm:col-span-6">
        <PageTitle>
          Bridging design and tech to build better products.
        </PageTitle>
      </div>
      <div className="col-span-4 sm:col-span-7">
        <p>I’m a UX designer who is fluent in both design and code.</p>
        <p>
          As the lead designer in a product team, I led with best practices in
          design research, usability testing, prototyping, and accessibility.
        </p>
        <p>
          I believe in research and continuous testing to build great products
          that solve real needs.
        </p>
        <p>
          I live with my partner and our two cats. Some of my favourite things
          include swimming, drinking tea, and bullet journaling.
        </p>
      </div>
    </Layout>
  );
}

export default Index;
