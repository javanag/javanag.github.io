import React from "react"
import Icon from "./Icon"

const WorkExperience = ({ company, companyUrl, subtitle, role, children }) => (
  <div className="entry">
    <h3><a href={companyUrl}>{company}</a></h3>
    {role &&
      <h4 className="subtitle"><Icon icon="fa fa-briefcase"/> {role}</h4>
    }
    {subtitle &&
      <h5 className="subtitle"><Icon icon="fas fa-map-marker-alt"/> {subtitle}</h5>
    }
    {children}
  </div>
)
export default WorkExperience