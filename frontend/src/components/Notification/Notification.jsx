import React, { useContext } from "react";
import Webrtccontext from "../../context/webrtc/Webrtccontext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Notification = () => {
  const { answerCall, call, callAccepted, videoOn } = useContext(Webrtccontext);
  const user = localStorage.getItem("user");
  return (
    <>
      {call.isReceivingCall &&
        !callAccepted &&
        toast(
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <p>{call.name.name} is calling:</p>
            <button
              className="dark"
              onClick={() => {
                videoOn();
                answerCall();
              }}
            >
              Answer
            </button>
          </div>
        )}
      <ToastContainer
        position="top-center"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Notification;
