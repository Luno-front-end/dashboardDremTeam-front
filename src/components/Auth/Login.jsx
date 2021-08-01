import logo from "../../img/logo.svg";

const Login = () => {
  return (
    <div className="auth-container">
      <div className="circle"></div>
      <div className="oblique-top"></div>
      <div className="left-container">
        <img className="logo-auth" src={logo} alt="" width="250" />
      </div>
      <div className="right-container">
        <div className="qweqwe">
          <div className="welcome-container">
            <h1 className="header-auth">Добро пожаловать!</h1>
            <div className="conteiner-info-auth">
              <p className="par-info-auth">в "Dev Dashboard".</p>
              <p className="par-info-auth">Введите ваши данные ниже</p>
            </div>
            <div className="form-container">
              <form className="form-auth">
                <input className="login" type="text" placeholder="Логін" />
                <input className="pass" type="text" placeholder="Пароль" />
                <button className="btn-login" type="submit">
                  Войти
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
