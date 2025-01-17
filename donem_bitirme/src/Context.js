import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [isAdmin, setIsAdmin] = useState(true);

  const login = ({isAdmin}) => {
    alert("Giriş Yapıldı");
    console.log(isAdmin)
    setIsAdmin(isAdmin)
  };

  const logout = () => {};

  return (
    <AuthContext.Provider value={{ isAdmin, setIsAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
