import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import TourList from "./TourList";

const getTours = graphql`
  query {
    tours: allContentfulTours {
      edges {
        node {
          name
          price
          slug
          country
          contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

const ToursGallery = () => {
  const { tours } = useStaticQuery(getTours);

  return <TourList tours={tours} />;
};

export default ToursGallery;
