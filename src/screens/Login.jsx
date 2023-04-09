import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const {handleLogin} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAuth = (e) => {
    e.preventDefault();
    console.log(values);
    handleLogin();
    navigate("/");
  };

  return (
    <div id="login-container">
      <form onSubmit={handleAuth} id="login-form">
        <div>
          <label htmlFor="email">Email: </label>
          <input
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            type="email"
            placeholder="Ingresa tu email"
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            value={values.password}
            onChange={(e) => setValues({ ...values, password: e.target.value })}
            type="password"
            placeholder="Ingresa tu Password"
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
export default Login;
