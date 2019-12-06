import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import BlogCard from "../BlogCard";
import Title from "../Title";

import styles from "./blog.module.scss";

const getPosts = graphql`
  query {
    posts: allContentfulBlog(sort: { fields: published, order: DESC }) {
      edges {
        node {
          published(formatString: "MMMM Do, YYYY ")
          title
          slug
          id: contentful_id
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;
const BlogList = () => {
  const { posts } = useStaticQuery(getPosts);

  return (
    <section className={styles.blog}>
      <Title title="our" subtitle="blogs" />
      <div className={styles.center}>
        {posts.edges.map(({ node }) => {
          return <BlogCard key={node.id} blog={node} />;
        })}
      </div>
    </section>
  );
};

export default BlogList;
