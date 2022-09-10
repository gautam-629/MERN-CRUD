import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Edit from "./Pages/Edit";
const App = () => {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/edit/:_id" element={<Edit/>}></Route>
          </Routes>
        </BrowserRouter>
     
    </>
  );
};

export default App;
