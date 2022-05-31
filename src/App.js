import React from "react";
import { Routes, Route } from 'react-router-dom'
import About from "./About/About";
import Blog from "./Blog/Blog";
import Emergency from "./Emergency/Emergency";
import { Home } from "./home/home";
import { SignIn } from "./Registration/Login";
import { Regis } from "./Registration/Regis";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/emergency" element={<Emergency />}></Route>
        <Route path="/covid" element={<Home />}></Route>
        <Route path="/regis" element={<Regis />}></Route>
        <Route path="/regis/signin" element={<SignIn />}></Route>
      </Routes>
    </div>
  )};
export default App;