import React from "react";

import RecordsContent from "../RecordsPage/content";
import Fade from "react-reveal/Fade";

const Records: React.FC = (): JSX.Element => {
  return (
    <Fade fraction={0} duration={300}>
      <RecordsContent />
    </Fade>
  );
};

export default Records;
