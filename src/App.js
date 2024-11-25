import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Count from "./Components/Count/Count";
import Jokes from "./Components/Jokes/Jokes";
import WeatherApp from "./Components/Weatherapp/Weatherapp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Wrapper from "./Components/Wrapper/Wrapper";
import Login from "./Components/Login/Login";
import UserList from "./Components/UserList/UserList";

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/jokes" element={<Jokes />} />
          <Route path="/weatherapp" element={<WeatherApp />} />
          <Route path="/count" element={<Count />} />
          <Route path="/userlist" element={<UserList />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
