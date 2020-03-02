import React, { useState } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

import { Checkbox } from "antd";

import { FormValidation } from "./FormValidation"; // валидация

interface Validation {
  value: string;
  style: string;
  label: string;
  status: boolean;
}

interface Props {
  handleSubmit(
    e: React.FormEvent<HTMLFormElement>,
    CheckBox: boolean,
    email: Validation,
    pass: Validation,
    name: Validation,
    setButtonDisable: React.Dispatch<React.SetStateAction<boolean>>
  );
}

const Form: React.FC<Props> = (props): JSX.Element => {
  const [buttonDisable, setButtonDisable] = useState<boolean>(false); // блок кнопки

  const [CheckBox, setCheckBox] = useState<boolean>(false);

  const [email, setEmail] = useState<Validation>({
    value: "",
    style: "",
    label: "",
    status: false
  });

  const [pass, setPass] = useState<Validation>({
    value: "",
    style: "",
    label: "",
    status: false
  });

  const [name, setName] = useState<Validation>({
    value: "",
    style: "",
    label: "",
    status: false
  });

  return (
    <Fade fraction={0} duration={300}>
      <div className="auth">
        <div className="auth-container">
          <div className="card">
            <header className="auth-header">
              <h1 className="auth-title">
                <div className="logo">
                  <span className="l l1"></span>
                  <span className="l l2"></span>
                  <span className="l l3"></span>
                  <span className="l l4"></span>
                  <span className="l l5"></span>
                </div>
                Домашняя бухгалтерия
              </h1>
            </header>
            <div className="auth-content">
              <p className="text-xs-center">
                Регистрация для получения доступа
              </p>
              <form
                onSubmit={e =>
                  props.handleSubmit(
                    e,
                    CheckBox,
                    email,
                    pass,
                    name,
                    setButtonDisable
                  )
                }
              >
                <div className={"form-group " + email.style}>
                  <label htmlFor="email">Email</label>
                  <input
                    style={{ paddingLeft: "10px" }}
                    type="text"
                    className="form-control underlined"
                    id="email"
                    placeholder="Введите email"
                    value={email.value}
                    onChange={event =>
                      FormValidation(event, email, setEmail, "email")
                    }
                  />
                  <span className="form-help-text">{email.label}</span>
                </div>
                <div className={"form-group " + pass.style}>
                  <label htmlFor="password">Пароль</label>
                  <input
                    style={{ paddingLeft: "10px" }}
                    type="password"
                    className="form-control underlined"
                    id="password"
                    placeholder="Введите пароль"
                    value={pass.value}
                    onChange={event =>
                      FormValidation(event, pass, setPass, "password")
                    }
                  />
                  <span className="form-help-text">{pass.label}</span>
                </div>
                <div className={"form-group " + name.style}>
                  <label htmlFor="name">Имя</label>
                  <input
                    style={{ paddingLeft: "10px" }}
                    type="text"
                    className="form-control underlined"
                    id="name"
                    placeholder="Введите имя"
                    value={name.value}
                    onChange={event =>
                      FormValidation(event, name, setName, "name")
                    }
                  />
                  <span className="form-help-text">{name.label}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="agree">
                    <Checkbox
                      onChange={event => setCheckBox(event.target.checked)}
                    >
                      Согласен с правилами
                    </Checkbox>
                  </label>
                </div>
                <div className="form-group">
                  <button
                    disabled={buttonDisable}
                    type="submit"
                    className="btn btn-block btn-primary"
                  >
                    Зарегистрироваться
                  </button>
                </div>
                <div className="form-group">
                  <p className="text-muted text-xs-center">
                    Уже есть аккаунт?
                    <Link to="/auth">Войти!</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Form;
