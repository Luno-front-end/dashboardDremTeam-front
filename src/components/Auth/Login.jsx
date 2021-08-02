import { useState } from "react";
import logo from "../../img/logo.svg";
// import sprite from "../../img/sprite.svg";
import { NotVisible, Visible, Mail } from "../SvgComponent";

const Login = () => {
  const [visiblePass, setVisiblePass] = useState(false);
  const [valueType, setValueType] = useState("password");
  const onClick = (e) => {
    setVisiblePass(!visiblePass);
    if (valueType === "password") {
      setValueType("text");
    } else {
      setValueType("password");
    }
  };

  return (
    <div className="auth-container">
      <div className="circle"></div>
      <div className="oblique-top"></div>
      <div className="left-container">
        <img className="logo-auth" src={logo} alt="DevDashboard" width="250" />
        <div className="welcome-container">
          <h1 className="header-auth">Добро пожаловать!</h1>
          <div className="conteiner-info-auth">
            <p className="par-info-auth">в "Dev Dashboard".</p>
            <p className="par-info-auth">Введите ваши данные ниже</p>
          </div>
          <div className="form-container">
            <form className="form-auth">
              <div className="container-input">
                <input className="login" type="text" placeholder="Логін" />
                <Mail className={"icon-mail"} />
              </div>
              <div className="container-input">
                <input className="pass" type={valueType} placeholder="Пароль" />
                {visiblePass ? (
                  <div onClick={onClick}>
                    <Visible className={"icon-visible"} />
                  </div>
                ) : (
                  <div onClick={onClick}>
                    <NotVisible className={"icon-visible "} />
                  </div>
                )}
              </div>
              <button className="btn-login" type="submit">
                Войти
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="right-container"></div>
    </div>
  );
};

export default Login;
