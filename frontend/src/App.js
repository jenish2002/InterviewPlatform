import Home from "./components/Home/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Webrtcconnection from "./context/webrtc/webrtcconnection";
import CodeIDE from "./components/CodeIDE/CodeIDE";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import Whiteboard from "./components/WhiteBoard/Whiteboard";
import Notification from "./components/Notification/Notification";
import InterviewPage from "./components/InterviewPage/InterviewPage";
import Main from "./components/Main/Main";
import Login from "./components/Login/Login";
import React, { useContext, useState } from "react";
import Videocomponent from "./components/VideoComponent/Videocomponent";
import Webrtccontext from "./context/webrtc/Webrtccontext";
import Videocomponent2 from "./components/VideoComponent/videocomponent2";
function App() {
  const { userVideo } = useContext(Webrtccontext);
  return (
    <>
      <Webrtcconnection>
        <Notification />
        <div className="d-flex vh-100">
          {(localStorage.getItem("token")) ? <Sidebar /> : <></>}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/codeide" element={<CodeIDE />} />
            <Route path="/whiteboard" element={<Whiteboard />} />
            <Route path="/main" element={<Main />} />
            <Route path="/InterviewPage/:id" element={<InterviewPage />} />
            <Route path="*" element={<h5 className="p-3">Page not Found</h5>} />
          </Routes>
          {userVideo && (
            <div className="d-flex flex-column">
              <Videocomponent2 />
            </div>
          )}
        </div>
      </Webrtcconnection>
    </>
  );
}

export default App;
