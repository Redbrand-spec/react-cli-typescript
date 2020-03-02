import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Axios from "../lib/axios";

const Time: number = 1000 * 60; // - интерва сесии после 1 цикла

export const Session = () => {
  const dispatch = useDispatch();
  const tokenState: string = useSelector(
    (state: { Session: { token: string } }) => state.Session.token
  );

  const token: string | null = localStorage.getItem("token");
  const email: string | null = localStorage.getItem("email");
  const pass: string | null = localStorage.getItem("pass");

  const date: number = Number(localStorage.getItem("date"));
  const dateNow: number = Number(new Date().getTime());
  const SesionTime: number = date - dateNow; //--------->> время сесии

  const [timeout, setTimeot] = useState(); //--------->> тимеоут сесии
  const [interval, setInt] = useState(); //--------->> интервал сесии
  if (tokenState === "") {
    //--------->> останавливает Timeout
    clearInterval(interval);
    clearTimeout(timeout);
  }

  const [block, setBlock] = useState<boolean>(false);
  /////////////////////////////////////////////////////
  //--------->> функция удание сесии
  /////////////////////////////////////////////////////
  const DeleteSesion = () => {
    dispatch({
      type: "SESSION_TOKEN_ADD",
      token: ""
    });
    localStorage.clear();
    console.log("удалено");
  };

  /////////////////////////////////////////////////////
  //--------->> сесcия начало и продление
  /////////////////////////////////////////////////////
  const SessionUser = () => {
    if (tokenState === "" && block !== false) {
      setBlock(false);
    }

    if (token !== null && SesionTime > 0 && block === false) {
      // прдлить сессию
      console.log("начало сесии");

      setBlock(true);
      if (tokenState === "") {
        dispatch({
          type: "SESSION_TOKEN_ADD",
          token: token
        });
      }
      setTimeot(
        window.setTimeout(() => {
          Submit(email, pass, dispatch);
          console.log("начало сесии 1 обновление");

          setInt(
            window.setInterval(() => {
              Submit(email, pass, dispatch);
              console.log("продолжение сесии интервал");
            }, Time)
          );
        }, SesionTime)
      );
    }
  };
  /////////////////////////////////////////////////////
  //--------->> остановка и удаление если пользователь не заходил больше времент сесии
  /////////////////////////////////////////////////////
  if (token !== null && SesionTime < 0 && tokenState === "") {
    DeleteSesion();
  }
  return { DeleteSesion, SessionUser };
};

const Submit = async (email: string | null, pass: string | null, dispatch) => {
  const Data = {
    email,
    pass
  };
  await Axios.post("api/auth", Data)
    .then(request => {
      dispatch({
        type: "SESSION_TOKEN_ADD",
        token: request.data.token
      });

      const date: number = new Date().getTime() + Time;
      const time: string = String(date);

      localStorage.setItem("token", request.data.token);
      localStorage.setItem("email", String(email));
      localStorage.setItem("pass", String(pass));
      localStorage.setItem("date", time);
    })
    .catch(() => {});
};
