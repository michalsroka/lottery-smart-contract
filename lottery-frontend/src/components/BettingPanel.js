import React from "react";
import "../css/betting-panel.css";
import NumberForm from "./NumberForm";
import ResultInfo from "./ResultInfo";

const BettingPanel = props => {
  return (
    <div className="main-frame">
      <NumberForm />
      <button onClick>bet</button>
      <ResultInfo show={false} />
    </div>
  );
};

export default BettingPanel;
