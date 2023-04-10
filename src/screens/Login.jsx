import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./LoginStyle.css";

const Login = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const { handleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAuth = (e) => {
    e.preventDefault();
    console.log(values);
    handleLogin();
    navigate("/");
  };

  return (
    <div id="login-container">
      <form onSubmit={handleAuth} id="loginform">
        <h2 id="headerTitle">Login</h2>
        <div>
          <div className="row">
            <label>Username</label>
            <input
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              type="email"
              placeholder="Ingresa tu email"
            />
          </div>
          <div className="row">
            <label>Password</label>
            <input
              value={values.password}
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              type="password"
              placeholder="Ingresa tu Password"
            />
          </div>
          <div id="button" className="row">
            <button type="submit">Enviar</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Login;