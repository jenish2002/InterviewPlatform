import React, {  useContext, useEffect, useRef } from "react";
import Webrtccontext from "../../context/webrtc/Webrtccontext";
import Bottombar from "../Bottombar/Bottombar";
import Image from '../Sidebar/profileImage.jpg'
import Videocomponent2 from "./videocomponent2";
const Videocomponent = () => {
  const {myVideo, userVideo, stream} = useContext(Webrtccontext);
  console.log(stream);
  return (
    <>
      <div className="d-flex flex-column justify-content-center vw-100">
        {stream ? (
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
        <Videocomponent2 />
        <Bottombar />
      </div>
    </>
  );
};

export default Videocomponent;