import React, {  useContext, useEffect, useRef } from "react";
import Webrtccontext from "../../context/webrtc/Webrtccontext";
import Bottombar from "../Bottombar/Bottombar";
import Image from '../Sidebar/profileImage.jpg'
const Videocomponent = () => {
  const {name,connectionRef,callAccepted,myVideo,videoOn,userVideo,callEnded,stream,call} = useContext(Webrtccontext);
  return (
    <>
      <div className="d-flex flex-column justify-content-center">
        {callAccepted && !callEnded ? (
          <video
            style={{ objectFit: "cover", height: "92.8vh" }}
            ref={userVideo}
            playsInline
            autoPlay
          />
        ) : (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "92.8vh" }}
          >
            <img src={Image} height={300}></img>
          </div>
        )}
        {stream && (
          <video
            className="me-3 w-25 img-fluid rounded-4 float-end position-absolute bottom-0 end-0"
            style={{ marginBottom: "90px" }}
            ref={myVideo}
            playsInline
            autoPlay
          />
        )}
        <Bottombar />
      </div>
    </>
  );
};

export default Videocomponent;