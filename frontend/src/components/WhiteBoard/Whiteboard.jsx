import React, { useState } from "react";
import Board from "../Board/Board";
import "./whiteboard.css";
const Whiteboard = () => {
  const [tool, setTool] = useState("pen");
  const [color, setColor] = useState("#000000");
  const [size, setSize] = useState(5);
  return (
    <div className="mx-0 row w-100 mh-100">
      <div className="d-flex justify-content-center align-items-center tool-section bg-dark bg-opacity-10 py-2">
        <div className="d-flex justify-content-center align-self-center color-picker-container me-4">
          <div
            className="d-flex justify-content-center align-items-center bg-dark bg-opacity-25 p-3 rounded-3 me-4"
            data-toggle="tooltip"
            title="Pen"
            onClick={() => setTool("pen")}
          >
            <i className="fa fa-pencil fa-xl" />
          </div>
          <div
            className="d-flex justify-content-center align-items-center bg-dark bg-opacity-25 p-3 rounded-3 me-4"
            data-toggle="tooltip"
            title="Eraser"
            onClick={() => setTool("eraser")}
          >
            <i className="fa fa-eraser fa-2xl" />
          </div>
          <div
            className="d-flex justify-content-center align-items-center bg-dark bg-opacity-25 p-3 rounded-3 me-4"
            data-toggle="tooltip"
            title="Color"
          >
            <input
              type="color"
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
              }}
            />
          </div>
          <div
            className="d-flex justify-content-center align-items-center bg-dark bg-opacity-25 p-3 rounded-3 me-3"
            data-toggle="tooltip"
            title="Size"
          >
            <input
              type="radio"
              id="small"
              name="size"
              style={{ width: "20px", height: "20px" }}
              checked={size == 5}
              onChange={() => setSize(5)}
            />
            <label className="h5 m-0 ms-2 me-3" htmlFor="small">
              Small
            </label>
            <input
              type="radio"
              id="medium"
              name="size"
              style={{ width: "20px", height: "20px" }}
              checked={size == 13}
              onChange={() => setSize(13)}
            />
            <label className="h5 m-0 ms-2 me-3" htmlFor="medium">
              Medium
            </label>
            <input
              type="radio"
              id="large"
              name="size"
              checked={size == 20}
              style={{ width: "20px", height: "20px" }}
              onChange={() => setSize(20)}
            />
            <label className="h5 m-0 ms-2" htmlFor="large">
              Large
            </label>
          </div>
        </div>
      </div>
      <div className="p-0 board-container m-0 flex-fill">
        <Board tool={tool} color={color} size={size} />
      </div>
    </div>
  );
};

export default Whiteboard;
