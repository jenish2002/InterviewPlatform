import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Webrtcconnection from "./context/webrtc/webrtcconnection";
import CodeIDE from "./components/CodeIDE/CodeIDE";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import Whiteboard from "./components/WhiteBoard/Whiteboard";
import Contect from "./components/contect/Contect";
import Videocomponent from "./components/VideoComponent/Videocomponent";
import Login from "./components/Login/Login";
import React, { useState } from "react";
function App() {
  const [isLogin, setLogin] = useState(true);
  return (
    <>
      <Webrtcconnection>
        {isLogin ? (
          <div className="d-flex vh-100">
            <Sidebar />
            <Routes>
              <Route path="/CodeIde" element={<CodeIDE />} />
              <Route path="/" element={<Home />} />
              <Route path="/WhiteBoard" element={<Whiteboard />} />
              <Route path="/contect" element={<Contect />} />
            </Routes>
            <div className="d-flex flex-column">
              <Videocomponent />
            </div>
          </div>
        ) : (
          <Login />
        )}
      </Webrtcconnection>
    </>
  );
}

export default App;
