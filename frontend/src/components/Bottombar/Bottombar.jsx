import React, { useContext, useState } from "react";
import "./bottombar.css";
import CallEndIcon from "@mui/icons-material/CallEnd";
import Chatbox from "../Chatbox/Chatbox";
import Webrtcconnection from "../../context/webrtc/webrtcconnection";
import Webrtccontext from "../../context/webrtc/Webrtccontext";
import { useEffect } from "react";
const Bottombar = () => {
  const [video, setVideo] = useState(false);
  const [microphone, setMicrophone] = useState(false);
  const { videoOn, videoOff, handlemessage } = useContext(Webrtccontext);
  const turnOn = (event) => {
    let id = event.target.id;
    let icon = event.target;
    if (id == "video") {
      setVideo(!video);
    } else if (id == "microphone") {
      setMicrophone(!microphone);
    }
    if (icon.classList.contains(`fa-${id}`)) {
      icon.classList.remove(`fa-${id}`);
      icon.classList.add(`fa-${id}-slash`);
      icon.classList.add("button-icons-off");
    } else {
      icon.classList.remove(`fa-${id}-slash`);
      icon.classList.remove("button-icons-off");
      icon.classList.add(`fa-${id}`);
    }
  };
  useEffect(() => {
    video ? videoOn(video, microphone) : videoOff();
  }, [video, microphone])
  return (
    <nav className="border-3 border rounded-4 border-secondary bg-white bottombar-width px-5 navbar navbar-expand navbar-white">
      <div className="navbar-collapse justify-content-center">
        <ul className="navbar-nav">
          <li
            id="microphone"
            className="nav-link fa-solid fa-microphone-slash nav-item active rounded-pill button-icons button-icons-off me-3"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Mic"
            onClick={(event) => turnOn(event)}
          />
          <li
            id="video"
            className="nav-link fa-solid fa-video-slash nav-item rounded-pill button-icons button-icons-off me-3"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Video"
            onClick={(event) => turnOn(event)}
          />
          <li
            className="nav-link nav-item rounded-pill button-icons-off me-3"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="End"
          >
            <CallEndIcon />
          </li>
          <li
            className="nav-link nav-item rounded-pill button-icons"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Chat"
          >
            <i className="fas fa-comment-alt" onClick={handlemessage} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Bottombar;
