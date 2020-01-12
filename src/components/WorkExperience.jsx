import React from "react"
import { Link } from "gatsby"
import Icon from "./Icon"

const WorkExperience = ({ company, companyUrl, subtitle, children }) => (
  <div>
    <h2><a href={companyUrl}>{company}</a></h2>
    <h3 class="subtitle"><Icon icon="fas fa-map-marker-alt"/> {subtitle}</h3>
    {children}
  </div>
)
export default WorkExperience