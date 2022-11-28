import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Collection from "./components/Collection";
import Men from "./components/Men";
import Women from "./components/Women";
import Login from "./components/Login";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About";

const App = () => {
  const [isLogIn, setLogIn] = useState(localStorage.getItem("login") || false);
  const [userName, setUserName] = useState(
    localStorage.getItem("username") || ""
  );

  const formSubmit = (e) => {
    e.preventDefault();
    setLogIn(true);
  };

  const handleOnChange = (e) => {
    const value = e.target.value;
    setUserName(value);
  };

  const logOut = () => {
    setLogIn(false);
  };

  useEffect(() => {
    localStorage.setItem("login", isLogIn);
  }, [isLogIn]);

  useEffect(() => {
    localStorage.setItem("username", userName);
  }, [userName]);

  return (
    <div>
      <BrowserRouter>
        <Navbar isLogIn={isLogIn} logOut={logOut} userName={userName} />
        <Routes>
          <Route path="/" element={<Collection />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route
            path="/login"
            element={
              <Login formSubmit={formSubmit} formChange={handleOnChange} />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
