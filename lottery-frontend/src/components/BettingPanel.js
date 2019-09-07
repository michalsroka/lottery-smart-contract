import React from "react";

import NumberForm from "./NumberForm";
import ResultInfo from "./ResultInfo";

import "../css/betting-panel.css";

const BettingPanel = props => {
  const betPrice = "0.1 eth";

  return (
    <div className="main-frame">
      <NumberForm
        name0={props.name0}
        name1={props.name1}
        name2={props.name2}
        name3={props.name3}
        name4={props.name4}
        value0={props.value0}
        value1={props.value1}
        value2={props.value2}
        value3={props.value3}
        value4={props.value4}
        handleChange={props.handleChange}
      />
      <div className="bet-button" onClick={() => props.onClickBet()}>
        bet {" (" + betPrice + ")"}
      </div>
      <ResultInfo show={false} />
    </div>
  );
};

export default BettingPanel;
