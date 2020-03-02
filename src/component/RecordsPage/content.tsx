/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Select from "./select";
import Radio from "./radio";
import InputSum from "./InputSum";

import InputCategory from "./InputCategory";
import Form1Loading from "./_load/Form1Loading";
import Form2Loading from "./_load/Form2Loading";
import { Form1add } from "./form1add";
import { Form2add } from "./form2add";

import Fade from "react-reveal/Fade";
import { message } from "antd";

interface CategoryValue {
  value: string | number;
  status: boolean;
}

const Content: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  // форма Добавить событие
  const [SelectValue, setSelectValue] = useState<string>("");
  const [RadioValue, setRadioValue] = useState<string>("");
  const [InputSumValue, setInputSumValue] = useState<number | string>(0);
  // форма Добавить категорию
  const [InputCategoryValue, setInputCategoryValue] = useState<CategoryValue>({
    value: "",
    status: false
  });
  const [InputLimitValue, setInputLimitValue] = useState<CategoryValue>({
    value: "",
    status: false
  });

  // форма отправки событие
  const [StatusSubmit1, setStatusSubmit1] = useState<boolean>(false); // блок кнопки
  const [StatusForm1, setStatusForm1] = useState<boolean>(false); // анимация обновления
  const Form1 = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (SelectValue && RadioValue && InputSumValue) {
      Form1add(
        SelectValue,
        RadioValue,
        Number(InputSumValue),
        setStatusForm1,
        setStatusSubmit1,
        dispatch
      );
    } else {
      message.warning("Введите коректные данные");
    }
  };
  // форма отправки категории
  const [StatusSubmit2, setStatusSubmit2] = useState<boolean>(false); // блок кнопки
  const [StatusForm2, setStatusForm2] = useState<boolean>(false); // анимация обновления
  const Form2 = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (InputCategoryValue.status && InputLimitValue.status) {
      Form2add(
        String(InputCategoryValue.value),
        Number(InputLimitValue.value),
        setStatusForm2,
        setStatusSubmit2,
        dispatch
      );
    } else {
      message.warning("Введите коректные данные");
    }
  };

  return (
    <article className="content">
      <div className="title-block">
        <h3 className="title">
          Страница записей <span className="sparkline bar"></span>
        </h3>
      </div>

      <section className="section">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bordered">
                <div className="header-block">
                  <h3 className="title">Добавить событие</h3>
                </div>
              </div>
              <div className="card-block">
                {/* Форма Добавить событие */}
                {StatusForm1 !== true ? (
                  <form onSubmit={e => Form1(e)} style={{ minHeight: "250px" }}>
                    <Select setSelectValue={setSelectValue} />
                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="control-label">Выберите тип</label>
                    </div>
                    <Radio setRadioValue={setRadioValue} />
                    <div className="form-group">
                      <label className="control-label" htmlFor="amount">
                        Введите сумму
                      </label>
                      <InputSum setInputSumValue={setInputSumValue} />
                    </div>
                    <button
                      type="submit"
                      disabled={StatusSubmit1}
                      className="btn btn-primary"
                    >
                      Добавить
                    </button>
                  </form>
                ) : (
                  <Form1Loading />
                )}
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="card-header bordered">
                <div className="header-block">
                  <h3 className="title">Добавить категорию</h3>
                </div>
              </div>
              <div className="card-block">
                {/* форма Добавить категорию */}
                <form onSubmit={e => Form2(e)} style={{ minHeight: "250px" }}>
                  {StatusForm2 !== true ? (
                    <>
                      <Fade fraction={0} duration={300}>
                        <InputCategory
                          changeinput={setInputCategoryValue}
                          title="Введите название"
                          type="text"
                          id={"category-name"}
                        />
                        <InputCategory
                          changeinput={setInputLimitValue}
                          title="Введите лимит"
                          type="number"
                          id={"category-limit"}
                        />
                      </Fade>
                    </>
                  ) : (
                    <>
                      {" "}
                      {/* для сброса */}
                      <Form2Loading />
                    </>
                  )}
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={StatusSubmit2}
                  >
                    Добавить
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Content;
