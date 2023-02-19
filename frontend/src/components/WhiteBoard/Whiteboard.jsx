import React,{useState} from 'react'
import Board from '../Board/Board'
import "./whiteboard.css"
const Whiteboard = () => {
  const [color, setColor] = useState("#000000");
  const [size, setSize] = useState("5");


  return (
   <div className="mx-2 row w-100 mh-100 ">
    <div className="tool-section">
    <div className="color-picker-container">
      Select Broush Color : &nbsp;
      <input type="color" value={color} onChange={(e)=>{setColor(e.target.value)}} />
     </div>
     <div className="brushsize-container">
      Select Brush Size: &nbsp;
      <select name="" id="" value={size} onChange={(e)=>{setSize(e.target.value)}}>
        <option >5</option>
        <option >10</option>
        <option>15</option>
        <option>20</option> 
        <option>25</option>
        <option> 30</option>
      </select>
     </div>
    </div>
    
     <div className="board-container">
        <Board color={color} size={size}/>
     </div>
   </div>
  )
}

export default Whiteboard