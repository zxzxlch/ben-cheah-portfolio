import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../../components/layout';
import PageTitle from '../../components/page-title';
import { post } from '../../styles/post.module.css';

function WorkPost({ data }) {
  const { title, description } = data.mdx.frontmatter;
  const backLink = (
    <Link to=".." className="-ml-0.5 text-primary">
      &#8592;{' '}
      <span className="underline text-primary decoration-primary">
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
        <div className="mb-10">{backLink}</div>
        <article id="main" className={post}>
          <PageTitle>{title}</PageTitle>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </article>
        <div className="mt-10">{backLink}</div>
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
