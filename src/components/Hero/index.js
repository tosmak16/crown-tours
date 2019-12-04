import React from "react";

import "./Hero.scss";

const Hero = ({ children }) => {
  return <header className="defaultHero">{children}</header>;
};

export default Hero;
