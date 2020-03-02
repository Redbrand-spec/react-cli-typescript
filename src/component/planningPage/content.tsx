import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Progress from "./progress";
import { Categories, Planing } from "../../constants";

const Content = () => {
  const user = useSelector(
    (state: { User: { categories: Categories | [] } }) => state.User
  );
  const categories: Categories | [] = user.categories;
  const [planing, setPalning] = useState([]);

  let TotalBalance: number = 0;
  planing.forEach(val => {
    TotalBalance = Number(TotalBalance + (val.balance - val.total));
  });

  useEffect(() => {
    const Arr: [Planing?] = [];

    categories.forEach(Value => {
      let Sum: number = 0;

      Value.events.forEach(Value => {
        if (Value.type === "Доход") {
          Sum = Sum + Value.amount;
        } else {
          Sum = Sum - Value.amount;
        }
      });

      const Categ: Planing = {
        name: Value.name,
        total: Value.capacity,
        balance: Sum,
        left: Value.capacity - Sum
      };
      Arr.push(Categ);
    });
    setPalning(Arr);
    // eslint-disable-next-line
  }, [categories]);

  return (
    <article className="content">
      <div className="title-block">
        <h3 className="title">
          Страница планирования <span className="sparkline bar"></span>
        </h3>
      </div>
      <section className="section">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header card-header-sm bordered">
                <div className="header-block">
                  <h3 className="title">Расходы</h3>
                </div>
                <h5 className="planning-expenses pull-right">
                  Общий остаток:{" "}
                  <span className="text-primary">{TotalBalance}</span>
                </h5>
              </div>
              <div className="card-block">
                {/* ------------- */}
                {planing.map((val, index) => {
                  return <Progress key={index} planing={val} />;
                })}

                {/* ------------- */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Content;
