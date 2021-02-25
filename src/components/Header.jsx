import React, { useState } from "react"
import Icon from "./Icon"

const Header = () => {
  const [navRowsClassName, setNavRowsClassName] = useState("hidden")

  const toggleNavRowsClassName = (navRowsClassName, setNavRowsClassName) => {
    if (navRowsClassName === "hidden") {
      setNavRowsClassName("container nav navrows")
    } else {
      setNavRowsClassName("hidden")
    }
  }

  return (
    <div className="header">
      <div className="container nav">
        <div>
          <h3>javan.graham</h3>
        </div>
        <div className="navlinks">
          <button 
            className="navbutton"
            onClick={() => {
              toggleNavRowsClassName(navRowsClassName, setNavRowsClassName)
            }}
          >
            <Icon icon="fas fa-bars"></Icon>
          </button>

          <a href="#about">about</a>
          <a href="#projects">projects</a>
          <a href="#experience">experience</a>
        </div>
      </div>
      
      <div className={navRowsClassName}>
        <a
          href="#about"
          onClick={() => {
            toggleNavRowsClassName(navRowsClassName, setNavRowsClassName)
          }}
        >about</a>

        <a
          href="#projects"
          onClick={() => {
            toggleNavRowsClassName(navRowsClassName, setNavRowsClassName)
          }}
        >projects</a>

        <a
          href="#experience"
          onClick={() => {
            toggleNavRowsClassName(navRowsClassName, setNavRowsClassName)
          }}
        >experience</a>
      </div>
    </div>
  )
}
export default Header
