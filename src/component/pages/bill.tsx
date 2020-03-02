import React from "react";

import BillContent from "../billPage/content";
import Fade from "react-reveal/Fade";

const Bill: React.FC = (): JSX.Element => {
  return (
    <Fade fraction={0} duration={300}>
      <BillContent />
    </Fade>
  );
};

export default Bill;
