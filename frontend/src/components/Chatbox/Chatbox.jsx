import React ,{useContext}from 'react'
import "./chatbox.css"
import Button from '@mui/material/Button';
import Webrtccontext from "../../context/webrtc/Webrtccontext";
// const Bottombar = () => {
 
const Chatbox = () => {
  const { message,
    setmessage,
    recivemessage,
    sendMessage} = useContext(Webrtccontext);
 const message1= recivemessage
  return (
      <>
      {/* <div class="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
      <h1>
        message:{message1}
      </h1>
   
  
      
  </div> 
  <div className="container my-3">
   <input  type="text" placeholder='Message' onChange={(event) => {
        setmessage(event.target.value);
      }} />
      <button onClick={()=>{sendMessage()}}>Send Message</button>
   </div>
  </div>   */}
 
{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header ">
        <h5 class="modal-title" id="exampleModalLabel">Chat</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <h1>
        message:{message1}
      </h1>
      <div className="container my-3">
   <input  type="text" placeholder='Message' onChange={(event) => {
        setmessage(event.target.value);
      }} />
      <button onClick={()=>{sendMessage()}}>Send Message</button>
   </div>
      </div>
      {/* <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> */}
    </div>
  </div>
</div>
    </>
  )
}

export default Chatbox