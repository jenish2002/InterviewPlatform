import React, { useContext, useState } from "react";
import Webrtccontext from "../../context/webrtc/Webrtccontext";
import { CopyToClipboard } from "react-copy-to-clipboard";
const Contect = () => {
  const { me, callAccepted, name, setname, callEnded, leaveCall,videoOn, callUser } =
    useContext(Webrtccontext);
  console.log(me);
  console.log("HIi");
  const [idToCall, setidToCall] = useState("");
  return (
    <div>
      <CopyToClipboard text={me} className="">
        <button>copy your ID</button>
      </CopyToClipboard>
      <div className="container">
        <h1>Make a Call</h1>
        <input
          type="text"
          value={idToCall}
          onChange={(e) => {
            setidToCall(e.target.value);
           
          }}
        />
         {
              callAccepted && !callEnded ? (
                <button onClick={leaveCall}>Hang up</button>
              ) : (
                <button
                  onClick={() => {
                    callUser(idToCall);videoOn();
                  }}
                >
                  call
                </button>
              )
            }
        
      </div>
    </div>
  );
};

export default Contect;
