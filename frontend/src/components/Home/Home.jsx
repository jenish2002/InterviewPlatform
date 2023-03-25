import React, { useContext, useEffect } from "react";
import Bottombar from "../Bottombar/Bottombar";
import Chatbox from "../Chatbox/Chatbox";
import Header from "../Header/Header";
import Main from '../Main/Main'
import Webrtccontext from "../../context/webrtc/Webrtccontext";
import "./home.css";
const Home = () => {
  const {
    name,
    connectionRef,
    callAccepted,
    myVideo,
    videoOn,
    userVideo,
    callEnded,
    stream,
    call,
  } = useContext(Webrtccontext);
  useEffect(() => {
    const init = async () => {
      await videoOn();

      if (connectionRef.current) {
        connectionRef.current.on("stream", (currentStream) => {
          userVideo.current.srcObject = currentStream;
        });
      }
    };
  }, [connectionRef.current]);
  return (
    <>
    <Main />
      {/* <div className="mx-2 w-100 d-flex flex-column align-items-center p-2 container">
        <Header />
        <Chatbox />
        <Bottombar />
      </div> */}
    </>
  );
};

export default Home;
