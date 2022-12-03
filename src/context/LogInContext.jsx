import { createContext, useState, useEffect } from "react";

const LogInContext = createContext();

export function LogInProvider({ children }) {
  const [isLogIn, setLogIn] = useState(
    localStorage.getItem("login") || "false"
  );
  const [userName, setUserName] = useState(
    localStorage.getItem("username") || ""
  );

  useEffect(() => {
    localStorage.setItem("login", isLogIn);
  }, [isLogIn]);

  useEffect(() => {
    localStorage.setItem("username", userName);
  }, [userName]);

  const formSubmit = (e) => {
    e.preventDefault();
    setLogIn("true");
  };

  const handleOnChange = (e) => {
    const value = e.target.value;
    setUserName(value);
  };

  const logOut = () => {
    setLogIn("false");
  };

  return (
    <LogInContext.Provider
      value={{ isLogIn, userName, formSubmit, handleOnChange, logOut }}
    >
      {children}
    </LogInContext.Provider>
  );
}

export default LogInContext;
