import React from "react";
import { NavLink } from "react-router-dom";
import Fade from "react-reveal/Fade";

const Menu = () => {
  return (
    <Fade fraction={0} duration={300}>
      <aside className="sidebar">
        <div className="sidebar-container">
          <div className="sidebar-header">
            <div className="brand">
              <div className="logo">
                <span className="l l1"></span>
                <span className="l l2"></span>
                <span className="l l3"></span>
                <span className="l l4"></span>
                <span className="l l5"></span>
              </div>
              Бухгалтерия
            </div>
          </div>
          <nav className="menu">
            <ul className="nav metismenu">
              <li>
                <NavLink
                  to="/bill"
                  activeClassName="active"
                  activeStyle={{ color: "white", background: "#52bcd3" }}
                >
                  {" "}
                  <i className="fa fa-building-o" />
                  Счет
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/history"
                  activeClassName="active"
                  activeStyle={{ color: "white", background: "#52bcd3" }}
                >
                  {" "}
                  <i className="fa fa-flash" />
                  История
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/planning"
                  activeClassName="active"
                  activeStyle={{ color: "white", background: "#52bcd3" }}
                >
                  {" "}
                  <i className="fa fa-archive" />
                  Планирование
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/record"
                  activeClassName="active"
                  activeStyle={{ color: "white", background: "#52bcd3" }}
                >
                  {" "}
                  <i className="fa fa-plus-square" />
                  Запись
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </Fade>
  );
};

export default Menu;
