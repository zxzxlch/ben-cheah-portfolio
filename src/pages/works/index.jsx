import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import Layout from '../../components/layout';
import PageTitle from '../../components/page-title';
import { post } from '../../styles/post.module.css';
import cvFile from '../../assets/bencheah-cv.pdf';

const Index = () => {
  const Work = ({ title, linkUrl, children }) => {
    const link = linkUrl ? <Link to={linkUrl}>Read more&hellip;</Link> : null;
    return (
      <li className="pl-1">
        <article className="space-y-2">
          <div className="mb-2 text-lg">{title}</div>
          <p>{children}</p>
          <div>{link}</div>
        </article>
      </li>
    );
  };

  return (
    <Layout>
      <Helmet>
        <title>Selected works</title>
        <meta name="description" content="" />
        <meta property="og:type" content="article" />
      </Helmet>
      <div className="col-span-7">
        <div id="main" className={post}>
          <PageTitle>Selected works</PageTitle>
          <ul className="mt-6 mb-12 pl-5 space-y-8 list-disc">
            <Work title="My Legacy" linkUrl="./my-legacy">
              Led multiple features and helped set up the design system. My
              Legacy is a government website that guides Singaporeans in matters
              of end-of-life planning, death, funerals and inheritance.
            </Work>
            <Work title="MSF Case Management System">
              As part of a UX team, I conducted field research and interviews,
              and designed the user interface for a mobile app and web CMS for
              MSF officers to log cases on the move and review the cases later.
            </Work>
            <Work title="Yomap" linkUrl="./yomap">
              Independently designed and developed an iPhone app for travellers
              to save places to their personal map.
            </Work>
          </ul>
          <p>
            <Link to={cvFile}>Download my CV.</Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
