import React, { useContext, useEffect } from "react";
import Bottombar from "../Bottombar/Bottombar";
import Chatbox from "../Chatbox/Chatbox";
import Header from "../Header/Header";
import Main from '../Main/Main'
import Webrtccontext from "../../context/webrtc/Webrtccontext";
import "./home.css";
import Videocomponent from "../VideoComponent/Videocomponent";
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
    {/* <Main /> */}
      <div className="d-flex flex-column vw-100">
        <Videocomponent />
        {/* <Header />
        <Chatbox /> */}
        {/* <Bottombar />  */}
      </div>
    </>
  );
};

export default Home;
