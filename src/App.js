import "./App.css";
import React from "react";
import StatusBar from "./components/layout/StatusBar";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Chat from "./routes/Chat";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <StatusBar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/chat" element={<Chat />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
