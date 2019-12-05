import React, { Component } from "react";
import { graphql } from "gatsby";

import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
export default class tours extends Component {
  render() {
    return (
      <Layout>
        <Hero img={this.props.data.defaultBcg.childImageSharp.fluid} />
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
