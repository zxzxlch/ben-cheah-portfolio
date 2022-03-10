import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/layout';

const Index = () => {
  const Work = ({ title, linkUrl, children }) => {
    const workTitle = linkUrl ? <Link to={linkUrl}>{title}</Link> : title;
    return (
      <li className="pl-1">
        <div className="mb-2">{workTitle}</div>
        <p>{children}</p>
      </li>
    );
  };

  return (
    <Layout>
      <div className="col-span-7">
        <h1 className="title mb-6">Selected works</h1>
        <ul className="pl-5 list-disc">
          <Work title="My Legacy" linkUrl="./my-legacy">
            Led multiple features and helped set up the design system. My Legacy
            is a government website that guides Singaporeans in matters of
            end-of-life planning, death, funerals and inheritance.
          </Work>
          <Work title="MSF Case Management System">
            As part of a UX team, I conducted field research and interviews, and
            designed the user interface for a mobile app and web CMS for MSF
            officers to log cases on the move and review the cases later.
          </Work>
          <Work title="Yomap">
            Independently designed and developed an iPhone app for travellers to
            save places to their personal map.
          </Work>
        </ul>
        <p>
          <Link to="#">Download my CV.</Link>
        </p>
      </div>
    </Layout>
  );
};

export default Index;
