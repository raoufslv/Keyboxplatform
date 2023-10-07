import React from "react";
import { Routes, Route } from "react-router-dom";
import { MyProvider } from "./../utils/MyContext.jsx";
import Home from "../pages/Home.jsx";
import Signin from "../pages/Signin.jsx";
import Signup from "../pages/Signup.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Profile from "../pages/Profile.jsx";
import Course from "../pages/Course.jsx";

const Routers = () => {
  return (
    <MyProvider>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/course" element={<Course />}></Route>
      </Routes>
    </MyProvider>
  );
};

export default Routers;
