import React, { Component } from "react";
import { graphql } from "gatsby";

import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import ToursGallery from "../../components/ToursGallery";

export default class Tours extends Component {
  render() {
    return (
      <Layout>
        <Hero img={this.props.data.defaultBcg.childImageSharp.fluid} />
        <ToursGallery />
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
