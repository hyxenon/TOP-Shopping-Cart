import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Collection from "./Pages/Collection";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Login from "./Pages/Login";
import Navbar from "./components/Navbar/Navbar";
import About from "./Pages/About";
import Footer from "./components/Footer";

const App = () => {
  const [isLogIn, setLogIn] = useState(
    localStorage.getItem("login") || "false"
  );
  const [userName, setUserName] = useState(
    localStorage.getItem("username") || ""
  );

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

  useEffect(() => {
    localStorage.setItem("login", isLogIn);
  }, [isLogIn]);

  useEffect(() => {
    localStorage.setItem("username", userName);
  }, [userName]);

  return (
    <div className="flex flex-col justify-between  min-h-screen">
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
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
