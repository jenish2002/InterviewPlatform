import React, {  useContext, useEffect, useRef } from "react";
import Webrtccontext from "../../context/webrtc/Webrtccontext";
import Bottombar from "../Bottombar/Bottombar";
const Videocomponent = () => {

  
  const {name,connectionRef,callAccepted,myVideo,videoOn,userVideo,callEnded,stream,call} = useContext(Webrtccontext);
  return (
    <>
    <div className="d-flex flex-column position-relative  me-2 mt-3" style={{"height":95+"vh" }}>
        {callAccepted && !callEnded && <video
        className="img-fluid border-3 border rounded-4 border-dark float-end"
        ref={userVideo}
        playsInline
        autoPlay
        
      ></video>}
      {stream &&<video
        className="me-3 w-50 img-fluid border-3 border rounded-4 border-dark float-end position-absolute bottom-0 end-0"
        ref={myVideo}
        playsInline
        autoPlay
        
      ></video>}
        {/* <div className="row">
      <Bottombar/>
    </div> */}
    </div>
 
    </>
  );
};




export default Videocomponent;
