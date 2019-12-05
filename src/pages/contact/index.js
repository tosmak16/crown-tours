import React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import ContactForm from "../../components/ContactForm";

export default function contact({ data }) {
  return (
    <Layout>
      <Hero img={data.contactBcg.childImageSharp.fluid} />
      <ContactForm />
    </Layout>
  );
}

export const query = graphql`
  query {
    contactBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
