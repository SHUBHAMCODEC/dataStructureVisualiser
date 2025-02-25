import React, { useState } from "react";
import "./Visualizer.css";

const Visualizer = () => {
  const [code, setCode] = useState("");
  
  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <div className="visualizer-container">
      <div className="editor-section">
        <h3>Code Editor</h3>
        <textarea
          className="code-editor"
          value={code}
          onChange={handleCodeChange}
          placeholder="Write your code here..."
        />
      </div>
      <div className="output-section">
        <h3>Output</h3>
        <div className="output-box">
          {/* Visualized output will be displayed here */}
          <pre>{code}</pre>
        </div>
      </div>
    </div>
  );
};

export default Visualizer;
