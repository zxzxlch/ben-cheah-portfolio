import React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../../components/layout';

function WorkPost({ data }) {
  const { title } = data.mdx.frontmatter;
  const backLink = (
    <Link to=".." className="no-underline">
      &#8592; <span className="underline text-[#0E6173] decoration-[#0E6173]">Back to Works</span>
    </Link>
  );

  return (
    <Layout>
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
      }
      body
    }
  }
`;

export default WorkPost;
