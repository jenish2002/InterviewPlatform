import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Webrtccontext from "./context/webrtc/Webrtccontext";

import Webrtcconnection from "./context/webrtc/webrtcconnection";
import CodeIDE from "./components/CodeIDE/CodeIDE";
import Sidebar from "./components/Sidebar/Sidebar";
import "./app.css";
import Whiteboard from "./components/WhiteBoard/Whiteboard";
import Contect from "./components/contect/Contect";
import Videocomponent from "./components/VideoComponent/Videocomponent";
import { useContext } from "react";
function App() {
  const {name,connectionRef,callAccepted,myVideo,videoOn,userVideo,callEnded,stream,call} = useContext(Webrtccontext);
  return (
    <>
      <Webrtcconnection>
        <div className='d-flex mh-100'>
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

      </Webrtcconnection>
    </>
  );
}

export default App;
