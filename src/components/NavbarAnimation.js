import React from "react";
import "./NavbarAnimation.css"; // External CSS file for styles

const NavbarAnimation = () => {
  return (
    <div className="navbar-container">
      {/* Animated Code Snippets */}
      <div className="code" style={{ animationDelay: "0s" }}>function test() {}</div>
      <div className="code" style={{ animationDelay: "2s" }}>let y = 5;</div>
      <div className="code" style={{ animationDelay: "4s" }}>for (let i=0; i&lt;10; i++) {}</div>

      {/* Processing Machine */}
      <div className="machine">MACHINE</div>

      {/* Output Containers */}
      <div className="output-container" style={{ animationDelay: "0s" }}>
        <div className="output tree">
          <div className="tree-node">A</div>
          <div className="tree-branches">
            <div className="tree-node">B</div>
            <div className="tree-node">C</div>
          </div>
        </div>

        <div className="output array">
          <div className="array-box">1</div>
          <div className="array-box">2</div>
          <div className="array-box">3</div>
        </div>
      </div>

      <div className="output-container" style={{ animationDelay: "2s" }}>
        <div className="output linked-list">
          <div className="ll-node">5</div>
          <div className="arrow"></div>
          <div className="ll-node">10</div>
          <div className="arrow"></div>
          <div className="ll-node">15</div>
        </div>

        <div className="output stack">
          <div className="stack-box">X</div>
          <div className="stack-box">Y</div>
          <div className="stack-box">Z</div>
        </div>
      </div>

      <div className="output-container" style={{ animationDelay: "4s" }}>
        <div className="output queue">
          <div className="queue-box">Q1</div>
          <div className="queue-box">Q2</div>
          <div className="queue-box">Q3</div>
        </div>

        <div className="output graph">
          <div className="graph-node">1</div>
          <div className="graph-node">2</div>
          <div className="graph-node">3</div>
        </div>
      </div>
    </div>
  );
};

export default NavbarAnimation;
