import React from "react"
import Icon from "./Icon"

const Section = ({ icon, text, children }) => (
  <div className="entry">
    <h2 id={text.toLowerCase()}><Icon icon={icon}/> {text}</h2>
    {children}
  </div>
)
export default Section