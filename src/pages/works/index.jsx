import React from 'react';
import Layout from '../../components/layout';

function Index() {
  return (
    <Layout>
      <div className="col-span-7">
        <h1 className="font-serif text-3xl leading-relaxed text-gray-600 mt-6 mb-4">
          Selected Works
        </h1>
        <ul>
          <li>
            <p>
              <strong>My Legacy</strong>
            </p>
            <p>
              Lead designer for a government website that helps people to do
              their end-of-life planning and settle the death of a loved one.
            </p>
          </li>
          <li>
            <p>
              <strong>MSF Case Management System</strong>
            </p>
            <p>
              Conducted research, designed a mobile app and web CMS for MSF
              officers to log cases on the move and review the cases later.
            </p>
          </li>
          <li>
            <p>
              <strong>Yomap</strong>
            </p>
            <p>
              Build an indie iPhone app for travellers to map their places.
            </p>
          </li>
        </ul>
        <p>Download my CV for my full work experience.</p>
        <h2 id="side-projects">Side Projects</h2>
        <ul>
          <li>GE2015 Visualisations</li>
        </ul>
      </div>
    </Layout>
  );
}

export default Index;
