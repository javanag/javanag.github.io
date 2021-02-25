import React, { useState } from "react"
import { Helmet } from "react-helmet"
import "../styles/global.css"
import "../styles/fontawesome.min.css"
import Header from "../components/Header"
import Section from "../components/Section"
import Icon from "../components/Icon"
import WorkExperience from "../components/WorkExperience"
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import MOTDButton from '../components/MOTDButton'

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
    <main>
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

      <div className="container">

      <div className="howdy">
        <h1>Howdy, I'm Javan, and I am a</h1>
        <MOTDButton />
      </div>

      <Section icon="fa fa-user" text="About">
        <p>
          Since September, I've been doing an internship
          at <a href="https://bluecatnetworks.com/"><Icon icon="fas fa-cat"/> a DDI company</a>, ending in April.
          This summer I'm looking for one last internship before going back
          to <a href="https://web.cs.toronto.edu/"><Icon icon="fa fa-university"/> UofT</a> in
          the fall for my final year <Icon icon="fas fa-user-graduate"/>.
        </p>

        <p>
          I took up programming as a kid, at first because <a href="https://www.minecraft.net/en-us/"><Icon icon="fas fa-gamepad"/> Minecraft</a> was
          so inspirational to me, that I wanted to know how it was made.
          Right now I'm learning <a href="https://crystal-lang.org/">Crystal</a> and looking into using <a href="https://amberframework.org/">Amber</a> for a project I'm working
          on.
        </p>

        <p>
          Here's my <a href="https://github.com/javanag"> <Icon icon="fab fa-github-alt" /> GitHub</a>,
          find me on <a href="https://ca.linkedin.com/in/javan-graham-baabb1195"><Icon icon="fab fa-linkedin" /> LinkedIn</a>,
          and talk to me at <span className="email"><Icon icon="fa fa-envelope" /><b> javan.graham (at) mail (dot) utoronto (dot) ca</b></span>.
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
          company="BlueCat Networks"
          companyUrl="https://bluecatnetworks.com/"
          subtitle="Toronto (Remote), September 2020 -"
          role="Software Engineer Co-op"
        >
          <p>
            Here I've been working on the
            main <a href="https://bluecatnetworks.com/glossary/what-is-ddi/"><Icon icon="fas fa-server" /> DDI</a> service
            control appliances written in <Icon icon="fab fa-java" /> Java.

            I built handlers for many of the new JSON REST service configuration API endpoints,
            and updated the existing UI to integrate them. Then I wrote some tests for it
            all using a mix of a JUnit and Selenium in-house combo.

            Now I am fixing <Icon icon="fas fa-bug" /> bugs as we are
            preparing for a release this Spring.
          </p>
        </WorkExperience>

        <WorkExperience
          company="Overbond"
          companyUrl="https://www.overbond.com/"
          subtitle="Toronto, May 2019 - May 2020"
          role="Full Stack Developer"
        >
          <p>
            The team was small, so I took the opportunity to gain broad experience by wearing many hats <Icon icon="fas fa-hat-cowboy" />.
            I mostly worked on the <Icon icon="fas fa-gem" /> Ruby on Rails app, using <Icon icon="fab fa-react" /> React on the front end, building features or demos.
          </p>

          <p>
            Later on I learned a lot about <Icon icon="fab fa-aws" /> cloud services when we started building a data platform with <Icon icon="fab fa-python" /> Python services inside <Icon icon="fab fa-docker" /> Docker containers.
            My component captured real time data, passed it through a <Icon icon="fas fa-project-diagram" /> Kinesis topic where it was eventually consumed and put into an <Icon icon="fas fa-database" /> RDS instance.
          </p>

          <p>
            I also hired other software developer applicants / interns by <Icon icon="fas fa-chalkboard-teacher" /> conducting interviews, <Icon icon="fas fa-tasks" /> grading online assessment submissions, and <Icon icon="fas fa-lightbulb" /> creating new assessments tailored to evaluate the desired skill sets.
          </p>
        </WorkExperience>

        <WorkExperience
          company="Rotary Club Burlington Lakeshore"
          companyUrl="https://rotaryburlington.com/"
          subtitle="Burlington, July 2018 - August 2018"
          role="Web Developer"
        >
          <p>
            I created a static site as part of a marketing campaign for a pilot event the Rotary
            Club was hosting the night before <a href="http://www.canadaslargestribfest.com/">Canada's Largest Ribfest</a>.
          </p>

          <p>
            After gathering the club's needs and designs for the web page, I implemented them
            using <Icon icon="fa fa-code" /> HTML, CSS and JavaScript with Bootstrap. After publishing,
            we tracked ad campaign impact on web page traffic with <Icon icon="fab fa-google" />  Google Analytics.
          </p>
        </WorkExperience>
      </Section>
      </div>

      <div className="footer">
        <p>©
          2021 <OutboundLink href="https://cabbagecanfly.com">J</OutboundLink>
          <OutboundLink href="https://www.reecemartin.ca/">a</OutboundLink>
          <OutboundLink href="https://www.shanshan-li.com/">v</OutboundLink>an Graham
        </p>
      </div>
    </main>
  )
}