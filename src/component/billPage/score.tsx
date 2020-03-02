import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Categories } from "../../constants";

interface Props {
  YandexDolar: string;
  YandexEuro: string;
}

const Score: React.FC<Props> = (props): JSX.Element => {
  const user = useSelector(
    (state: { User: { categories: Categories | [] } }) => state.User.categories
  );
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    let Sum = 0;
    user.forEach(Value => {
      Value.events.forEach(Value => {
        if (Value.type === "Доход") {
          Sum = Sum + Value.amount;
        } else {
          Sum = Sum - Value.amount;
        }
      });
    });

    setTotal(Sum);
  }, [user]);

  let dolar: number = null;
  let euro: number = null;

  if (props.YandexDolar && props.YandexEuro) {
    dolar = Number(props.YandexDolar.split(",")[0]);
    euro = Number(props.YandexEuro.split(",")[0]);
  }

  return (
    <div className="col col-xs-12 col-sm-12 col-md-6 col-xl-5 stats-col">
      <div className="card stats" style={{ height: "291px" }}>
        <div className="card-block">
          <div className="title-block">
            <h4 className="title">Счет</h4>
          </div>
          <div className="row row-sm stats-container">
            <div className="col-xs-12 stat-col">
              <div className="stat-icon">
                {" "}
                <i className="fa fa-rub"></i>{" "}
              </div>
              <div className="stat">
                <div className="value">{Math.round(total)}</div>
              </div>
              <progress
                className="progress stat-progress"
                value="100"
                max="100"
              >
                <div className="progress">
                  <span
                    className="progress-bar"
                    style={{ width: "100%" }}
                  ></span>
                </div>
              </progress>
            </div>
            <div className="col-xs-12 stat-col">
              <div className="stat-icon">
                {" "}
                <i className="fa fa-euro"></i>{" "}
              </div>
              <div className="stat">
                <div className="value">{Math.round(total / euro)}</div>
              </div>
              <progress
                className="progress stat-progress"
                value="100"
                max="100"
              >
                <div className="progress">
                  <span
                    className="progress-bar"
                    style={{ width: "100%" }}
                  ></span>
                </div>
              </progress>
            </div>
            <div className="col-xs-12 stat-col">
              <div className="stat-icon">
                {" "}
                <i className="fa fa-dollar"></i>{" "}
              </div>
              <div className="stat">
                <div className="value">{Math.round(total / dolar)}</div>
              </div>
              <progress
                className="progress stat-progress"
                value="100"
                max="100"
              >
                <div className="progress">
                  <span
                    className="progress-bar"
                    style={{ width: "100%" }}
                  ></span>
                </div>
              </progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Score;
