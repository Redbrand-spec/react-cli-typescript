/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Button } from "antd";
import Score from "./score";
import Cource from "./course";

import Axios from "../../lib/axios";
import Fade from "react-reveal/Fade";

interface Curr {
  YandexDolar: string;
  YandexEuro: string;
}

const Bill: React.FC = (): JSX.Element => {
  const token = localStorage.getItem("token");
  const headers = { headers: { Authorization: "Bearer " + token } };

  const [currency, setCurrency] = useState<Curr>();
  useEffect(() => {
    Axios.get("api/parsing", headers).then(_res => {
      setCurrency(_res.data);
    });
  }, [true]);

  const CurrencyUpdate = async () => {
    setCurrency(null);
    await Axios.get("api/parsing", headers).then(_res => {
      setCurrency(_res.data);
    });
  };
  console.log(currency);
  return (
    <article className="content dashboard-page">
      <div className="title-block">
        <h3 className="title pull-left">
          Страница счета <span className="sparkline bar"></span>
        </h3>
        <div className="pull-right">
          <Button shape="circle" onClick={() => CurrencyUpdate()}>
            <i className="fa fa-refresh"></i>
          </Button>
        </div>
      </div>

      <section className="section">
        <div className="row">
          {!!currency === true ? (
            <Fade fraction={0} duration={300}>
              <Score
                YandexDolar={currency.YandexDolar}
                YandexEuro={currency.YandexEuro}
              />
              <Cource
                YandexDolar={currency.YandexDolar}
                YandexEuro={currency.YandexEuro}
              />
            </Fade>
          ) : null}
        </div>
      </section>
    </article>
  );
};

export default Bill;
