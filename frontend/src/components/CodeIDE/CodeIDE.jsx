import React, { useState } from "react";
import { useRef, useEffect, useContext } from "react";
import axios from "axios";
import "./codeIDE.css";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import Codemirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";
import Webrtccontext from "../../context/webrtc/Webrtccontext";
const CodeIDE = () => {
  const editorRef = useRef(null);
  const code = useRef("");
  const input = useRef("");
  const output = useRef("");
  const [language, setLanguage] = useState("c++");
  const { socket, otherUser } = useContext(Webrtccontext);
  useEffect(() => {
    async function init() {
      //
      editorRef.current = Codemirror.fromTextArea(
        document.getElementById("realtimeEditor"),
        {
          mode: { name: "javascript", json: true },
          theme: "dracula",
          autoClosetags: true,
          autoClodeBrackets: true,
          lineNumbers: true,
        }
      );
      editorRef.current.on("change", (instance, changes) => {
        console.log("changes", changes);
        const { origin } = changes;
        const code = instance.getValue();
        console.log(code);
        if (origin !== "setValue") {
          socket.current.emit("code-change", {
            code,
            otherUser,
          });
        }
      });
    }

    init();
  }, []);

  useEffect(() => {
    console.log(socket.current);
    if (socket.current) {
      socket.current.on("code-change", (code) => {
        console.log("this is from another");
        console.log(code);
        if (code !== null) {
          editorRef.current.setValue(code);
        }
      });
    }
  }, [socket.current]);

  const setlang = (e) => {
    setLanguage(e.target.value);
  };
  console.log(language);

  const codesubmit = async (e) => {
    console.log("vat");
    e.preventDefault();

    const detail = {
      code: code.current.value,
      language: language,
      input: input.current.value,
    };
    try {
      const res = await axios.post("https://codex-api.herokuapp.com/", detail);
      console.log(res.data);
      output.current.value = res.data.output;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mh-100 my-2 mx-2 row w-100">
      <div className="row">
        <div className="col-md-9 mh-100 ">
          {/* <form onSubmit={codesubmit} style={{"height":700.4+"px"}}> */}
          <form onSubmit={codesubmit} className="mh-100">
            <i class="fa-solid fa-code"></i>

            <div
              className="container border border-dark rounded-3  row mt-2"
              style={{ backgroundColor: "#272935" }}
            >
              <textarea
                className="w-100 h-75 border border-white rounded-3"
                id="realtimeEditor"
                ref={code}
              ></textarea>
            </div>
            {/* <div className="row d-inline flex-row"> */}
            <div className="container d-flex justify-content-center mt-3">
              <select
                className="mx-2 btn btn-secondary text-white"
                onChange={setlang}
              >
                <option>cpp</option>
                <option>java</option>
                <option>py</option>
                <option>js</option>
                <option>c</option>
                <option>go</option>
                <option>cs</option>
              </select>

              <button className="mx-2 btn btn-dark " type="submit">
                <PlayCircleOutlineOutlinedIcon />
              </button>
            </div>

            {/* </div> */}
          </form>
        </div>
        <div className="col-md-3">
          <div className="container mt-2">
            Input:<textarea className="w-100 h-30" ref={input}></textarea>
            Output:
            <textarea
              value={output.current.value}
              className="w-100 h-30"
              ref={output}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeIDE;
