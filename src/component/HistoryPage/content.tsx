import React, { useState, useEffect } from "react";
import List from "./list";
import { useSelector } from "react-redux";
import { Menu, Dropdown, Button } from "antd";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Categories } from "../../constants";
import Fade from "react-reveal/Fade";

import { Sort } from "./sort";

interface Data {
  type: string;
  amount: number;
  name: string;
  date: number;
}

const Content: React.FC = (): JSX.Element => {
  const Categories = useSelector(
    (state: { User: { categories: Categories } }) => state.User.categories
  );

  const [ListVal, setListVal] = useState<[Data] | any>([]);
  const [status, setStatus] = useState<boolean>(false);

  const SortList = (type: string, action: string) => {
    const list = Sort(type, action, ListVal);
    setListVal(list); // обновление списка

    // анимация обновлнеия
    setStatus(true);
    window.setTimeout(() => {
      setStatus(false);
    });
  };

  useEffect(() => {
    // доставание данных для отобрадения
    const Arr = [];
    Categories.forEach(val => {
      val.events.forEach(Value => {
        const Data: Data = {
          type: Value.type,
          amount: Value.amount,
          name: val.name,
          date: Value.date
        };
        Arr.push(Data);
      });
    });
    setListVal(Arr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Categories]);

  const menu = (
    <Menu>
      <Menu.Item onClick={() => SortList("name", "plus")}>
        Сортировать категорию по возростаанию
      </Menu.Item>
      <Menu.Item onClick={() => SortList("name", "minus")}>
        Сортировать категорию по убыванию
      </Menu.Item>
      <Menu.Item onClick={() => SortList("date", "plus")}>
        Сортировать Дату по возрастанию
      </Menu.Item>
      <Menu.Item onClick={() => SortList("date", "minus")}>
        Сортировать Дату по убыванию
      </Menu.Item>
      <Menu.Item onClick={() => SortList("type", "plus")}>
        Сортировать по Типу сначала Доход
      </Menu.Item>
      <Menu.Item onClick={() => SortList("type", "minus")}>
        Сортировать по Типу сначала Расход
      </Menu.Item>
      <Menu.Item onClick={() => SortList("amount", "plus")}>
        Сортировать Сумму по возрастанию
      </Menu.Item>
      <Menu.Item onClick={() => SortList("amount", "minus")}>
        Сортировать Сумму по убыванию
      </Menu.Item>
    </Menu>
  );

  return (
    <article className="content">
      <div className="title-block">
        <h3 className="title">
          Страница истории <span className="sparkline bar"></span>
        </h3>
      </div>
      <section className="section">
        <div className="row">
          <div className="col-md-12">
            <div className="card flex_space">
              <div className="card-header bordered flex_space">
                <div className="header-block">
                  <h3 className="title">Список событий</h3>
                </div>
                <Dropdown overlay={menu} placement="bottomLeft">
                  <Button style={{ position: "absolute", right: "30px" }}>
                    Параметры
                  </Button>
                </Dropdown>
              </div>
              {status === false ? (
                <Fade fraction={0} duration={300}>
                  <List list={ListVal} />
                </Fade>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Content;
