import React from "react"
import Icon from "./Icon"

const WorkExperience = ({ company, companyUrl, subtitle, children }) => (
  <div className="entry">
    <h3><a href={companyUrl}>{company}</a></h3>
    <h4 className="subtitle"><Icon icon="fas fa-map-marker-alt"/> {subtitle}</h4>
    {children}
  </div>
)
export default WorkExperience