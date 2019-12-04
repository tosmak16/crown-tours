import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import About from "../components/About";
import Services from "../components/Services";

export default () => (
  <div>
    <Layout>
      <Hero>
        <Banner
          title="continue exploring"
          info=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, officiis."
        >
          <Link to="/tours" className="btn-white">
            explore tours
          </Link>
        </Banner>
      </Hero>
      <About />
      <Services />
    </Layout>
  </div>
);
