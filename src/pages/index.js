import React, { useState } from "react"
import { Helmet } from "react-helmet"
import "../styles/global.css"
import "../styles/fontawesome.min.css"
import Header from "../components/Header"
import Section from "../components/Section"
import Icon from "../components/Icon"
import WorkExperience from "../components/WorkExperience"

const updateColourClock = (setClockColour) => {
  const colourScale = 2
  const today = new Date()

  const hexHours = convertTimeToHex(today.getHours())
  const hexMinutes = convertTimeToHex(Math.ceil(today.getMinutes() / colourScale))
  const hexSeconds = convertTimeToHex(Math.ceil(today.getSeconds() / colourScale))

  const hexColour = `#${hexHours}${hexMinutes}${hexSeconds}`
  setClockColour(hexColour)
}

const convertTimeToHex = (value) => {
  const result = value.toString();
  return result.length < 2 ? '0' + result : result;
}

export default () => {
  const [clockColour, setClockColour] = useState("#000000")
  setInterval(() => {
    updateColourClock(setClockColour)
  }, 1000)

  return (
    <main className="container">
      <Helmet style={[{
        "cssText": `
            html {
                background-color: ${clockColour};
            }
        `
      }]}>
        <title>Javan Graham | Software Developer</title>
        <meta name="description" content="Toronto based software developer and computer science student at UofT" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-navbutton-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
      </Helmet>
      <Header />

      <Section icon="fa fa-user" text="About">
        <p>
          Howdy, I'm Javan, a student in the Computer Science Specialist program at
          the <Icon icon="fa fa-university" /> University of Toronto. After completing my third year, I have been
          on <a href="https://web.cs.toronto.edu/undergraduate/pey">PEY</a> working
          at <a href="https://www.overbond.com/"> <Icon icon="fa fa-briefcase" /> Overbond</a> since May 2019 as a
          software developer.

          After my internship I look forward to returning to school in the fall to complete my studies and graduate
          in <Icon icon="fa fa-graduation-cap" /> 2021.
        </p>

        <p>
          Read on to see some selected projects and work experience. I first got into programming as a kid by playing
          Minecraft and being inspired to learn how to create a game like that. <i>Click around to discover some easter
          eggs on the page!</i> Check out my <a href="https://github.com/javanag"> <Icon icon="fab fa-github-alt" /> GitHub</a> to
          see more, peep my <a href="https://ca.linkedin.com/in/javan-graham-baabb1195"> <Icon icon="fab fa-linkedin" /> LinkedIn</a>,
          and send me an email at <span className="email"><Icon icon="fa fa-envelope" />
            <b> javan.graham (at) mail.utoronto.ca</b></span> if you'd like to discuss anything!
        </p>
      </Section>

      <Section icon="fa fa-hammer" text="Projects">
        <blockquote className="subtitle">"What I cannot create, I do not understand."<br />
          <footer> - <a href="https://en.wikipedia.org/wiki/Richard_Feynman">Richard Feynman</a></footer>
        </blockquote>

        <p className="footer">
          (I'd like to take some more time to get this right. For now please see
          my <a href="https://github.com/javanag">GitHub</a>)
        </p>
      </Section>

      <Section icon="fa fa-laptop-code" text="Experience">
        <WorkExperience
          company="Overbond"
          companyUrl="https://www.overbond.com/"
          subtitle="Toronto, May 2019 - Now"
        >
          <p>
            I recently started an ongoing internship here as a <Icon icon="fa fa-briefcase" /> <b>Full Stack Developer</b>.
            Responsibilities include:
          </p>
          <ul>
            <li>Implementing features for flagship <Icon icon="fas fa-gem" /> Ruby on Rails and <Icon icon="fab fa-react" /> React web app</li>
            <li>Creating applications to intake data from financial APIs into <Icon icon="fas fa-database" />  Postgres using <Icon icon="fab fa-python" /> Python</li>
            <li>Writing design docs, planning sprints, maintaining documentation and tests together with code changes</li>
          </ul>
        </WorkExperience>

        <WorkExperience
          company="Rotary Club Burlington Lakeshore"
          companyUrl="https://rotaryburlington.com/"
          subtitle="Burlington, July 2018 - August 2018"
        >
          <p>
            I got the opportunity to create a static site as part of a marketing campaign for a pilot event the Rotary
            Club was hosting the night before <a href="http://www.canadaslargestribfest.com/">Canada's Largest Ribfest</a>.
            I learned how to:
          </p>

          <ul>
            <li>
              Interpret club needs for web page, worked with marketing team to implement design as
              static site using <Icon icon="fa fa-code" /> HTML, CSS and JavaScript with Bootstrap
            </li>
            <li>Track ad campaign impact on web page traffic with Google Analytics</li>
          </ul>

          <p>
            Once published, it was <Icon icon="fas fa-eye" /> viewed by thousands of unique visitors
            during the month of August. I'm glad that my first user-facing site (and first attempt at consulting-style
            work) had a chance to provide real impact.
          </p>
        </WorkExperience>
      </Section>

      <div className="footer">
        <p>© 2020 Javan Graham</p>
      </div>
    </main>
  )
}