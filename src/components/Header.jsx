import React from "react"

const Header = () => (
  <div>
    <div style={{float: "left"}}>
      <h1>Javan Graham</h1>
      <h4 class="subtitle">software developer / soundcloud producer</h4>
    </div>

    <div style={{float: "right"}}>
      <ul class="nav">
        <li><a class="link" href="#about">about</a></li>
        <li><a class="link" href="#projects">projects</a></li>
        <li><a class="link" href="#experience">experience</a></li>
      </ul>
    </div>
    
    <div style={{clear: "both"}}></div>
  </div>
)
export default Header