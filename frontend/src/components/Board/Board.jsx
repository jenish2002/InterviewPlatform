
import React, { useContext, useEffect, useState } from 'react'
import { useRef } from 'react';
import Webrtccontext from '../../context/webrtc/Webrtccontext';
import "./board.css";
const Board = (props) => {
    const { socket, otherUser } = useContext(Webrtccontext);
    // const ctx=useRef(null);
    // const [color, setColor] = useState(props.color);
    // const [size, setSize] = useState(props.size);
  var timeout;
  // ctx;
  // var ctx;
  // useEffect(() => {
  //   ctx.current.lineWidth = props.size;
  //   ctx.current.strokeStyle = props.color;
  // }, [props])
  
    useEffect(() => {
        const drawoncanvas = () => {
            var canvas = document.querySelector('#board');
            var ctx = canvas.getContext('2d');
            // var ctx=ctx.current;
            var sketch = document.querySelector('#sketch');
            var sketch_style = getComputedStyle(sketch);
            canvas.width = parseInt(sketch_style.getPropertyValue('width'));
            canvas.height = parseInt(sketch_style.getPropertyValue('height'));
    

            var mouse = { x: 0, y: 0 };
            var last_mouse = { x: 0, y: 0 };
    
            /* Mouse Capturing Work */
            canvas.addEventListener('mousemove', function (e) {
                last_mouse.x = mouse.x;
                last_mouse.y = mouse.y;
    
                mouse.x = e.pageX - this.offsetLeft;
                mouse.y = e.pageY - this.offsetTop;
            }, false);
    
    
            /* Drawing on Paint App */
            ctx.lineWidth = props.size;
            ctx.lineJoin = 'round';
            ctx.lineCap = 'round';
            ctx.strokeStyle = props.color;
    
            canvas.addEventListener('mousedown', function (e) {
                canvas.addEventListener('mousemove', onPaint, false);
            }, false);
    
            canvas.addEventListener('mouseup', function () {
                canvas.removeEventListener('mousemove', onPaint, false);
            }, false);
    
            var onPaint = function () {
                ctx.beginPath();
                ctx.moveTo(last_mouse.x, last_mouse.y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.closePath();
                ctx.stroke();
                if(timeout!==undefined) clearTimeout(timeout);
              timeout=setTimeout(() => {
                var base64IMgData = canvas.toDataURL("image/png");
                 const data={
                    base64IMgData,
                    otherUser
                 }
                 socket.current.emit("canvas-data",data)
              }, 1000);
            };
    
        }
    
        drawoncanvas();
    }, [])
    
   
    useEffect(() => {

        if (socket.current) {
          socket.current.on("canvas-data", (data) => {
             var image=new Image();
             var canvas=document.querySelector('#board');
             var ctx=canvas.getContext('2d');
             image.onload=()=>{
                ctx.drawImage(image,0,0);
             }
             image.src=data.base64IMgData;
          });
        }

      }, [socket.current]);

   
    return (
        <div className='sketch' id='sketch'>
            <canvas className="board border rounded-3 border-dark" id="board"></canvas>
        </div>
    )
}

export default Board



