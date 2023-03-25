import React, { useState, useRef } from "react";
import { Stage, Layer, Line, Text } from "react-konva";

const Board = (props) => {
  const tool = props.tool;
  const [lines, setLines] = useState([]);
  const isDrawing = useRef(false);

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { tool, points: [pos.x, pos.y] }]);
  };

  const handleMouseMove = (e) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    // add point
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    // replace last
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  return (
    <div>
      <Stage
        width={window.innerWidth - 90}
        height={890}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
      >
        <Layer>
          <Text x={5} y={30} />
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke={props.color}
              strokeWidth={props.size}
              tension={0.5}
              lineCap="round"
              lineJoin="round"
              globalCompositeOperation={
                line.tool === "eraser" ? "destination-out" : "source-over"
              }
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

// import React, { useContext, useEffect, useState } from 'react'
// import { useRef } from 'react';
// import Webrtccontext from '../../context/webrtc/Webrtccontext';
// import "./board.css";
// const Board = (props) => {
//     const { socket, otherUser } = useContext(Webrtccontext);
//     // const ctx=useRef(null);
//     // const [color, setColor] = useState(props.color);
//     // const [size, setSize] = useState(props.size);
//   var timeout;
//   // ctx;
//   // var ctx;
//   // useEffect(() => {
//   //   ctx.current.lineWidth = props.size;
//   //   ctx.current.strokeStyle = props.color;
//   // }, [props])

//     useEffect(() => {
//         const drawoncanvas = () => {
//             var canvas = document.querySelector('#board');
//             var ctx = canvas.getContext('2d');
//             // var ctx=ctx.current;
//             var sketch = document.querySelector('#sketch');
//             var sketch_style = getComputedStyle(sketch);
//             canvas.width = parseInt(sketch_style.getPropertyValue('width'));
//             canvas.height = parseInt(sketch_style.getPropertyValue('height'));

//             var mouse = { x: 0, y: 0 };
//             var last_mouse = { x: 0, y: 0 };

//             /* Mouse Capturing Work */
//             canvas.addEventListener('mousemove', function (e) {
//                 last_mouse.x = mouse.x;
//                 last_mouse.y = mouse.y;

//                 mouse.x = e.pageX - this.offsetLeft;
//                 mouse.y = e.pageY - this.offsetTop;
//             }, false);

//             /* Drawing on Paint App */
//             ctx.lineWidth = props.size;
//             ctx.lineJoin = 'round';
//             ctx.lineCap = 'round';
//             ctx.strokeStyle = props.color;

//             canvas.addEventListener('mousedown', function (e) {
//                 canvas.addEventListener('mousemove', onPaint, false);
//             }, false);

//             canvas.addEventListener('mouseup', function () {
//                 canvas.removeEventListener('mousemove', onPaint, false);
//             }, false);

//             var onPaint = function () {
//                 ctx.beginPath();
//                 ctx.moveTo(last_mouse.x, last_mouse.y);
//                 ctx.lineTo(mouse.x, mouse.y);
//                 ctx.closePath();
//                 ctx.stroke();
//                 if(timeout!==undefined) clearTimeout(timeout);
//               timeout=setTimeout(() => {
//                 var base64IMgData = canvas.toDataURL("image/png");
//                  const data={
//                     base64IMgData,
//                     otherUser
//                  }
//                  socket.current.emit("canvas-data",data)
//               }, 1000);
//             };

//         }

//         drawoncanvas();
//     }, [])

//     useEffect(() => {

//         if (socket.current) {
//           socket.current.on("canvas-data", (data) => {
//              var image=new Image();
//              var canvas=document.querySelector('#board');
//              var ctx=canvas.getContext('2d');
//              image.onload=()=>{
//                 ctx.drawImage(image,0,0);
//              }
//              image.src=data.base64IMgData;
//           });
//         }

//       }, [socket.current]);

//     return (
//         <div className='sketch' id='sketch'>
//             <canvas className="board border rounded-3 border-dark" id="board"></canvas>
//         </div>
//     )
// }

export default Board;
