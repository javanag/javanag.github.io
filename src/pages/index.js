import React, { useState } from "react"
import { Helmet } from "react-helmet"
import "../styles/global.css"
import "../styles/fontawesome.min.css"
import Header from "../components/Header"
import Section from "../components/Section"
import Icon from "../components/Icon"
import WorkExperience from "../components/WorkExperience"
import { OutboundLink } from 'gatsby-plugin-google-analytics'

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
          the <Icon icon="fa fa-university"/> University of Toronto. Starting May 2019, after having completed my
          third year, I spent a year working as a software developer at a fintech startup as part of 
          my <a href="https://web.cs.toronto.edu/undergraduate/pey"><Icon icon="fas fa-user-tie" /> PEY</a>.

          This summer I am taking some courses, trying my hand at contracting, and having fun with personal projects.
        </p>

        <p>
          I first got into programming as a kid by playing <a href="https://www.minecraft.net/en-us/">Minecraft</a> and
          being inspired to learn how to create a game
          like that. <i>Click around to discover some easter eggs and links on the page!</i> Check out my
          <a href="https://github.com/javanag"> <Icon icon="fab fa-github-alt" /> GitHub</a> to
          see more, my <a href="https://ca.linkedin.com/in/javan-graham-baabb1195">
          <Icon icon="fab fa-linkedin" /> LinkedIn</a> (if you are into that), and send me an email
          at <span className="email"><Icon icon="fa fa-envelope" /><b> javan.graham (at) mail.utoronto.ca</b></span> if
          you'd like to discuss anything!
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
          subtitle="Toronto, May 2019 - May 2020"
          role="Full Stack Developer"
        >
          <p>
            Due to being on such a small team, I took the opportunity to gain broad experience by wearing many hats:
          </p>
          <ul>
            <li>Implementing internal and client requested/demo features for main <Icon icon="fas fa-gem" /> Ruby on Rails web application, with a <Icon icon="fab fa-react" /> React front end, feeding from a <Icon icon="fas fa-database" /> Postgres database, all deployed on <Icon icon="fas fa-server" /> Heroku.</li>
            <li>Built ETL applications in <Icon icon="fab fa-python" /> Python, containerized with <Icon icon="fab fa-docker" /> Docker and running as Kubernetes pods, to capture real time financial data before forwarding through <Icon icon="fab fa-aws" /> Kinesis for further processing, eventually being stored in <Icon icon="fas fa-database" /> RDS.</li>
            <li>Participated in hiring other software developer applicants by <Icon icon="fas fa-chalkboard-teacher" /> conducting interviews, <Icon icon="fas fa-tasks" /> grading online assessment submissions, and <Icon icon="fas fa-lightbulb" /> creating new assessments tailored to evaluate the desired skill sets.</li>
            <li>Other developer tasks, like writing <Icon icon="fas fa-file-alt" /> design docs, maintaining other <Icon icon="fas fa-book" /> documentation wikis, and <Icon icon="fas fa-running" /> planning sprints.</li>
          </ul>
        </WorkExperience>

        <WorkExperience
          company="Rotary Club Burlington Lakeshore"
          companyUrl="https://rotaryburlington.com/"
          subtitle="Burlington, July 2018 - August 2018"
        >
          <p>
            I created a static site as part of a marketing campaign for a pilot event the Rotary
            Club was hosting the night before <a href="http://www.canadaslargestribfest.com/">Canada's Largest Ribfest</a>.
          </p>

          <p>
            After interpreting the club's needs for web page, I worked with the marketing team to implement the design
            using <Icon icon="fa fa-code" /> HTML, CSS and JavaScript with Bootstrap. After publishing,
            we tracked ad campaign impact on web page traffic with Google Analytics.
          </p>

          <p>
            In August, the page was <Icon icon="fas fa-eye" /> viewed by thousands of unique visitors.
            I'm glad that my first user-facing site, and first attempt at consulting-style
            work, had a chance to provide real impact.
          </p>
        </WorkExperience>
      </Section>

      <div className="footer">
        <p>©
          2020 <OutboundLink href="https://cabbagecanfly.com">J</OutboundLink>
          <OutboundLink href="https://reecemartin.github.io/">a</OutboundLink>
          <OutboundLink href="https://www.shanshan-li.com/">v</OutboundLink>an Graham
        </p>
      </div>
    </main>
  )
}