import React, { useState } from "react";
import { Helmet } from "react-helmet";

import Form from "../RegisterPage/form";

import { message } from "antd";

import Axios from "../../lib/axios";

message.config({
  duration: 3,
  maxCount: 2
});

interface Validation {
  value: string;
  style: string;
  label: string;
  status: boolean;
}

const RegisterPage: React.FC = (): JSX.Element => {
  const [statusReg, setStatus] = useState<boolean>(false); // сброс инпутов

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    CheckBox: boolean,
    email: Validation,
    pass: Validation,
    name: Validation,
    setButtonDisable: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    e.preventDefault();
    if (email.status && pass.status && name.status && CheckBox) {
      setButtonDisable(true);

      const Data = {
        email: email.value,
        pass: pass.value,
        name: name.value
      };

      await Axios.post("api/register", Data)
        .then(req => {
          const request: string = req.data.message;

          if (request === "создан") {
            message.success("Пользователь создан");
            setStatus(true); // сброс инпутов
            window.setTimeout(() => {
              setStatus(false);
            }, 10);
          }
          if (request === "существует") {
            message.warning("Пользователь уже существует");
          }
          setButtonDisable(false);
        })
        .catch(() => {
          message.error("Ошибка создания пользователя");
          setButtonDisable(false);
        });
    }

    if (
      email.status === false ||
      pass.status === false ||
      name.status === false
    ) {
      message.warning("Введите коректные данные");
    }

    if (CheckBox === false) {
      message.warning("Вы должны согласится с правилма пользования");
    }
  };

  return (
    <>
      <Helmet>
        <title>Домашняя бухгалтерия | Регистрация</title>
      </Helmet>
      {statusReg === false ? <Form handleSubmit={handleSubmit} /> : null}
    </>
  );
};

export default RegisterPage;
