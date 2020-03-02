import React from "react";
import { Helmet } from "react-helmet";
import { message } from "antd";

import { useDispatch } from "react-redux";

import Form from "../AuthPage/form";
import Axios from "../../lib/axios";

message.config({
  duration: 3,
  maxCount: 2
});

const AuthPage: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();

  const handleSubnit = async (
    e: React.FormEvent<HTMLFormElement>,
    email: string,
    pass: string,
    setButtonDisable: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    e.preventDefault();

    const Data = {
      email,
      pass
    };
    setButtonDisable(true);

    await Axios.post("api/auth", Data)
      .then(request => {
        message.success("Вход выполнен");

        dispatch({
          type: "SESSION_TOKEN_ADD",
          token: request.data.token
        });
        //  /common/session.ts  const Time: number = 1000*60 - интерва сесии после 1 цикла
        //const date: number = new Date().getTime() + 1000*60*60 // 1 час
        const date: number = new Date().getTime() + 1000 * 60; // 1 мин
        const time: string = String(date);

        localStorage.setItem("token", request.data.token);
        localStorage.setItem("email", email);
        localStorage.setItem("pass", pass);
        localStorage.setItem("date", time);

        setButtonDisable(false);
      })
      .catch(() => {
        message.error("Введены неверные данные");
        setButtonDisable(false);
      });
  };

  return (
    <>
      <Helmet>
        <title>Домашняя бухгалтерия | Авторизация</title>
      </Helmet>
      <Form handleSubnit={handleSubnit} />
    </>
  );
};

export default AuthPage;
