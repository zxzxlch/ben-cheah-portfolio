import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../../components/layout';

function WorkPost({ data }) {
  const { title, description } = data.mdx.frontmatter;
  const backLink = (
    <Link to=".." className="no-underline">
      &#8592;{' '}
      <span className="underline text-[#0E6173] decoration-[#0E6173]">
        Back to Works
      </span>
    </Link>
  );

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <div className="col-span-7">
        {backLink}
        <h1 className="font-serif text-3xl leading-relaxed text-gray-600 mt-6 mb-4">
          {title}
        </h1>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
        {backLink}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        description
      }
      body
    }
  }
`;

export default WorkPost;
