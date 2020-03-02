import React from "react";
import PlaningContent from "../planningPage/content";
import Fade from "react-reveal/Fade";

const Planning: React.FC = (): JSX.Element => {
  return (
    <Fade fraction={0} duration={300}>
      <PlaningContent />
    </Fade>
  );
};

export default Planning;
