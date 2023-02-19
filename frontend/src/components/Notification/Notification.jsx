import React ,{useContext}from 'react'
import Webrtccontext from "../../context/webrtc/Webrtccontext";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
// const Notifications = () => {
    const Notification = () => {
const { answerCall, call, callAccepted,videoOn } = useContext(Webrtccontext);
        return (
    <>
    {/* {call.isReceivingCall && !callAccepted && (
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <h1>{call.name} is calling:</h1>
         <button className='dark' onClick={()=>{videoOn();answerCall();}}>
Answer
         </button>
      </div>
    )} */}
      {call.isReceivingCall && !callAccepted && toast(
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <p>{call.name} is calling:</p>
         <button className='dark' onClick={()=>{videoOn();answerCall();}}>
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
pauseOnHover/>
  </>

  )
}

export default Notification