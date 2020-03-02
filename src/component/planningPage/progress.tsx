import React from "react";
import { Planing } from "../../constants";

interface Props {
  planing: Planing;
}

const Progress: React.FC<Props> = (props): JSX.Element => {
  const { planing } = props;
  const math: number = Math.round(planing.balance / (planing.total / 100));
  const percent: number = math > 100 ? 100 : math;

  let StyleBar: string = "";
  let StyleText: string = "";

  if (percent <= 30) {
    StyleBar = "danger";
    StyleText = "text-danger";
  }
  if (percent > 30 && percent <= 70) {
    StyleBar = "warning";
    StyleText = "text-warning";
  }
  if (percent > 70) {
    StyleBar = "success";
    StyleText = "text-success";
  }
  return (
    <div className="row">
      <div className="col-xs-6">
        <div className="n-progress">
          <div
            className={"progress-bar " + StyleBar}
            style={{ width: percent + "%" }}
          >
            <span>{planing.name}</span>
          </div>
        </div>
      </div>
      <div className="col-xs-6">
        <p>
          <span className={StyleText}>{planing.balance}</span>
          &nbsp; из &nbsp;
          <span className="text-primary">{planing.total}</span>
          &nbsp; | осталось &nbsp;
          <span className={StyleText}>{planing.total - planing.balance}</span>
          &nbsp;(руб.)
        </p>
      </div>
    </div>
  );
};

export default Progress;
