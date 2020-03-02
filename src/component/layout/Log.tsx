import React, { useEffect } from "react";
import Helmet from "react-helmet";

import { useDispatch, useSelector } from "react-redux";

import Navbar from "./log/navbar";
import Menu from "./log/menu";

import { GetUserData } from "./log/GetUserData";

const LogLayout: React.FC<React.ReactNode> = ({ children }): JSX.Element => {
  const dispatch = useDispatch();
  const token: string = String(useSelector<any>(state => state.Session.token));
  useEffect(() => {
    if (!!token) {
      GetUserData(token, dispatch);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!!token]);

  return (
    <>
      <Helmet>
        <title>Домашняя бухалтерия</title>
      </Helmet>
      <div className="main-wrapper">
        <div className="app">
          <Navbar />
          <Menu />
          {children}
        </div>
      </div>
    </>
  );
};

export default LogLayout;
