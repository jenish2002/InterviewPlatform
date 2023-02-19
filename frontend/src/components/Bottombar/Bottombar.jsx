import React ,{useContext} from "react";
import "./bottombar.css"
import Button from '@mui/material/Button';
import CallEndIcon from '@mui/icons-material/CallEnd';
import tel from "./telephone.png"
import Chatbox from "../Chatbox/Chatbox";
import Webrtcconnection from "../../context/webrtc/webrtcconnection";
import Webrtccontext from "../../context/webrtc/Webrtccontext";
const Bottombar = () => {
  const {videoOn,handlemessage} = useContext(Webrtccontext);
  return (
    <div className="border-3 border rounded-4 border-secondary bg-white bottombar-width ps-5 pe-5">
      <nav className="navbar navbar-expand navbar-white">
        <div class="navbar-collapse justify-content-center" id="navbarsExample08">
          <ul class="navbar-nav">
            <li class="nav-item active rounded-pill button-icons button-icons-off me-3">
              <a class="nav-link">
                {/* <i class="fa-solid fa-microphone"></i> */}
                <i class="fa-solid fa-microphone-slash"></i>
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item rounded-pill button-icons button-icons-off me-3">
              <a class="nav-link">
                {/* <i class="fas fa-video"></i> */}
                <i class="fa-solid fa-video-slash" onClick={videoOn}></i>
              </a>
            </li>
            <li class="nav-item rounded-pill button-icons-off me-3">
              <a class="nav-link">
                <CallEndIcon/>
                        {/* <img src={tel} className="img-fluid" alt="" />      */}
              </a>
            </li>
            {/* <li class="nav-item">
               <a  className="nav-link" href="">
               {/* <i class="fa-regular fa-circle-phone-hangup"></i>
               </a>
              
              <a
                class="nav-link dropdown-toggle"
                href="http://example.com"
                id="dropdown08"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdown08">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li> */}
            <li class="nav-item">
              {/* <a class="nav-link" href="#"> */}
              {/* <Chatbox/> */}
              <button class="btn btn-primary rounded-3 ps-4 pe-4 fw-semibold" type="button" onClick={handlemessage}>Chat</button>
                        {/* <img src={tel} className="img-fluid" alt="" />      */}
              {/* </a> */}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Bottombar;
