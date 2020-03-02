/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useSelector } from "react-redux";
import { Menu, Dropdown } from "antd";
import { Session } from "../../../common/session";

const Exit: React.FC = (): JSX.Element => {
  const { DeleteSesion } = Session();
  const name: string = useSelector(
    (state: { User: { name: string } }) => state.User.name
  );
  const Exit = () => {
    DeleteSesion();
  };
  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={() => Exit()}>
        Выход
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        <i
          style={{ fontSize: "20px" }}
          className="fas fa-angle-double-down"
        ></i>{" "}
        &nbsp;
        {name ? "Здравствуйте, " + name : "---------------------"}
      </a>
    </Dropdown>
  );
};

export default Exit;
