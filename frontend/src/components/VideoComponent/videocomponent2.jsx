import React, {  useContext, useEffect, useRef } from "react";
import Webrtccontext from "../../context/webrtc/Webrtccontext";
import Bottombar from "../Bottombar/Bottombar";
import Image from '../Sidebar/profileImage.jpg'
const Videocomponent2 = () => {
  const {name,connectionRef,callAccepted,myVideo,videoOn,userVideo,callEnded,stream,call} = useContext(Webrtccontext);
  return (
    <>
      {stream && (
          <video
            className="me-3 w-25 img-fluid rounded-4 float-end position-absolute bottom-0 end-0"
            style={{ marginBottom: "90px" }}
            ref={myVideo}
            playsInline
            autoPlay
          />
        )}
    </>
  );
};




export default Videocomponent2;