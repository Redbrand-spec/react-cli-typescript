import React from "react";

import HistoryContent from "../HistoryPage/content";
import Fade from "react-reveal/Fade";

const History: React.FC = (): JSX.Element => {
  return (
    <Fade fraction={0} duration={300}>
      <HistoryContent />
    </Fade>
  );
};

export default History;
