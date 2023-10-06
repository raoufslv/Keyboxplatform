import React from "react";
import { Routes, Route } from 'react-router-dom'
import { MyProvider } from './../utils/MyContext.jsx'
import Home from '../pages/Home.jsx'
import Signin from '../pages/Signin.jsx'
import Signup from '../pages/Signup.jsx'



const Routers = () => {
    return (
    <MyProvider>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
    </MyProvider>
    );
}

export default Routers;
