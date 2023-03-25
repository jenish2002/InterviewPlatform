import React, { useState } from "react";
import Image from "../Sidebar/profileImage.jpg";

function Main() {
  const [role, setRole] = useState("interviewee");
  return (
    <div className="d-flex vh-100 vw-100 align-items-center text-dark ps-5">
      <div className="d-flex align-items-start text-container flex-column flex-fill ps-5">
        <h1 className="mb-5">Who are you?</h1>
        <div className="d-flex justify-content-center align-items-center p-2 me-3 mb-3">
          <input
            type="radio"
            id="interviewee"
            name="role"
            style={{ width: "20px", height: "20px" }}
            checked={role == "interviewee"}
            onChange={() => setRole("interviewee")}
          />
          <label className="h5 m-0 ms-2 me-5" htmlFor="interviewee">
            Interviewee
          </label>
          <input
            type="radio"
            id="interviewer"
            name="size"
            style={{ width: "20px", height: "20px" }}
            checked={role == "interviewer"}
            onChange={() => setRole("interviewer")}
          />
          <label className="h5 m-0 ms-2 me-3" htmlFor="interviewer">
            Interviewer
          </label>
        </div>
        <div className="d-flex justify-content-center me-3 my-5">
          <button className="btn btn-dark sign-in-button fs-4 ps-4 py-2 pe-4 text-light me-5">
            {role == "interviewee" ? "Join meeting" : "Create meeting"}
          </button>
          <input
            className="my-1 p-2"
            type="text"
            placeholder="Meeting Id"
            hidden={role == "interviewer"}
          />
        </div>
      </div>
      <div className="d-flex flex-fill">
        <img className="img-fluid" width={600} src={Image} alt="" />
      </div>
    </div>
  );
}

export default Main;
