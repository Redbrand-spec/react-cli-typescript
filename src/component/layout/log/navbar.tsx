import React from "react";
import Fade from "react-reveal/Fade";

import Exit from "./exit";

import Clock from "./clock";

const Navbar: React.FC<React.ReactNode> = (): JSX.Element => {
  return (
    <Fade fraction={0} duration={300}>
      <header className="header">
        <div className="header-block header-block-search">
          <Clock />
        </div>
        <div className="header-block header-block-nav">
          <ul className="nav-profile">
            <Exit />
          </ul>
        </div>
      </header>
    </Fade>
  );
};

export default Navbar;
