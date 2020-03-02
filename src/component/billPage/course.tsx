import React from "react";
import Data from "./date";

interface Props {
  YandexDolar: string;
  YandexEuro: string;
}

const Cource: React.FC<Props> = props => {
  return (
    <div className="col col-xs-12 col-sm-12 col-md-6 col-xl-7 history-col">
      <div className="card">
        <div className="card-block">
          <div className="title-block">
            <h4 className="title">Курс</h4>
          </div>
          <div className="row row-sm stats-container">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Валюта</th>
                  <th>Курс</th>
                  <th>Дата</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>доллар</td>
                  <td>{props.YandexDolar}</td>
                  <td>
                    <Data />
                  </td>
                </tr>
                <tr>
                  <td>евро</td>
                  <td>{props.YandexEuro}</td>
                  <td>
                    <Data />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cource;
