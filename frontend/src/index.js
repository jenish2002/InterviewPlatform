import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
// import{Webrtcontext} from "./context/webrtc/Webrtccontext"
import Webrtcconnection from "./context/webrtc/webrtcconnection";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Webrtcontext> */}
    <Webrtcconnection>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Webrtcconnection>
    {/* </Webrtcontext> */}
  </React.StrictMode>
);

