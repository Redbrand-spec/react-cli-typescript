import React, { useState } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

interface Props {
  handleSubnit(
    e: React.FormEvent<HTMLFormElement>,
    email: string,
    pass: string,
    setButDis: React.Dispatch<React.SetStateAction<boolean>>
  );
}

const Form: React.FC<Props> = (props): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [buttonDisable, setButtonDisable] = useState<boolean>(false);

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
              <p className="text-xs-center">Войдите для работы</p>
              <form
                onSubmit={e =>
                  props.handleSubnit(e, email, pass, setButtonDisable)
                }
              >
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    style={{ paddingLeft: "10px" }}
                    type="text"
                    className="form-control underlined"
                    id="email"
                    placeholder="Введите ваш email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Пароль</label>
                  <input
                    style={{ paddingLeft: "10px" }}
                    type="password"
                    className="form-control underlined"
                    id="password"
                    placeholder="Пароль"
                    value={pass}
                    onChange={e => setPass(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <button
                    disabled={buttonDisable}
                    type="submit"
                    className="btn btn-block btn-primary"
                  >
                    Войти
                  </button>
                </div>
                <div className="form-group">
                  <p className="text-muted text-xs-center">
                    Нет аккаунта?{" "}
                    <Link to="/register">Зарегистрироваться!</Link>
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
