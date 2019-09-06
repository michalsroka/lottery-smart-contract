import React from "react";

import NumberForm from "./NumberForm";
import ResultInfo from "./ResultInfo";

import "../css/betting-panel.css";


const BettingPanel = props => {
  return (
    <div className="main-frame">
      <NumberForm />
      <div className="bet-button" onClick>bet</div>
      <ResultInfo show={false} />
    </div>
  );
};

export default BettingPanel;
