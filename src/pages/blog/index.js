import React from "react";
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import { graphql } from "gatsby";
import BlogList from "../../components/BlogList";
const blog = ({ data }) => {
  return (
    <Layout>
      <Hero img={data.blogBcg.childImageSharp.fluid} />
      <BlogList />
    </Layout>
  );
};

export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default blog;
