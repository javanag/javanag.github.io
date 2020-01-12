import React from "react"
import Icon from "./Icon"

const SectionTitle = ({ icon, text }) => (
  <h2 id={text.toLowerCase()}><Icon icon={icon}/> {text}</h2>
)
export default SectionTitle