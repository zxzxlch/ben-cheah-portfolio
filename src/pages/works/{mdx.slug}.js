import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../../components/layout';

function WorkPost({ data }) {
  const { title } = data.mdx.frontmatter;
  return (
    <Layout>
      <div className="col-span-7">
        <h1 className="font-serif text-3xl leading-relaxed text-gray-600 mt-6 mb-4">
          {title}
        </h1>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
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
