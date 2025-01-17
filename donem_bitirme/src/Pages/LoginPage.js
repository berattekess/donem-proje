import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Css/LoginPage.css";
import { useAuth } from "../Context";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/home");
    login({ isAdmin: true });
    // Giriş kontrolü buraya eklenebilir
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>İSTE YEMEKHANE</h1>
        <form onSubmit={handleLogin}>
          <div className="input-container">
            <label htmlFor="username">Kullanıcı Adı</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Şifre</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
