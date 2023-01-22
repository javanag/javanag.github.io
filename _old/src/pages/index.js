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
          Since May, I've been doing an internship
          at <a href="https://www.shopify.ca"><Icon icon="fas fa-shopping-cart"/> an e-commerce company</a>, ending in August.
          I'm just trying to enjoy this last "student" summer before returning
          to <a href="https://web.cs.toronto.edu/"><Icon icon="fa fa-university"/> UofT</a> in
          the fall for my final year <Icon icon="fas fa-user-graduate"/>.
        </p>

        <p>
          I took up programming as a kid, at first because <a href="https://www.minecraft.net/en-us/"><Icon icon="fas fa-gamepad"/> Minecraft</a> was
          so inspirational to me, that I wanted to know how it was made.
          Right now I'm not doing too much programming outside of work, opting to focus on outdoor activities.
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

        <div className="project-header">
          <h3><a href="https://imagefy-image-repository.herokuapp.com/"><Icon icon="fas fa-images" /> imagefy!</a></h3>
          <h4><i>Image uploading and sharing platform</i></h4>
          <h5><a href="https://github.com/javanag/imagefy"><Icon icon="fab fa-github" /> GitHub</a></h5>
        </div>
        <div className="project">
          <div className="project-description-container">
            <p>
              Users can register and upload images with metadata, and set access controls per-image.
              Open images are indexed on the homepage stream of images for all 
              users, unlisted images are viewable to all with a direct link, 
              secret images are only visible to the uploader.
              Click the surprise link to be taken to a random public image!
            </p>

            <p>
              Built with Ruby on Rails, using Postgres.
              Image uploads are stored on AWS S3.
              Containerized using Docker to make it easy to develop, and run a
              GitHub Actions test pipeline on pushes or pull requests.
              Deployed automatically from master to Heroku.
            </p>
          </div>
          <div className="project-image-container">
            <img src="imagefy.jpg" alt="A screenshot of the imagefy user interface." />
          </div>
        </div>

      </Section>

      <Section icon="fa fa-laptop-code" text="Experience">
        <WorkExperience
          company="Shopify"
          companyUrl="https://www.shopify.ca"
          subtitle="Toronto (Remote), May 2021 -"
          role="Backend Developer Intern"
        >
          <p>
            I'm working on the Fulfillment Platform team, responsible for developing
            the components modelling 
            the <a href="https://help.shopify.com/en/manual/orders/fulfillment">fulfillment processes</a>, and
            APIs for external developers that enable workflows with third party
            logistics providers for merchants. Primarily working
            in <Icon icon="fas fa-gem" /> Ruby on Rails.
          </p>

          <p>
            In addition to a main project I probably can't write about, I'll also
            be working on an independent project exploring the use case
            for <a href="https://github.com/shopify/packwerk"><Icon icon="fas fa-box" /> Packwerk</a> in
            our component, and eventually implementing it. It's a tool that helps
            enforce boundaries in your code.
          </p>
        </WorkExperience>

        <WorkExperience
          company="BlueCat Networks"
          companyUrl="https://bluecatnetworks.com/"
          subtitle="Toronto (Remote), September 2020 - April 2021"
          role="Software Engineer Co-op"
        >
          <p>
            My team was responsible for building a provisioning API which allows
            automated bulk service configuration for
            our <a href="https://bluecatnetworks.com/glossary/what-is-ddi/"><Icon icon="fas fa-server" /> DDI</a> server
            appliances (software written in <Icon icon="fab fa-java" /> Java),
            where previously, the process was manual though the UI, and only
            for individual servers.
          </p>

          <p>
            I built handlers for many of the new JSON REST API endpoints,
            and updated the existing UI to integrate them, to increase modularity.
            When writing tests I would use a mix of a JUnit and Selenium in-house combo.
          </p>

          <p>
            After release in the spring, I started to research and scope out new features
            for the next release with my team during the last month. We created
            estimates and guiding documentation for the future developers.
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
        <p>
          <OutboundLink href="https://cabbagecanfly.com">2 </OutboundLink>
          <OutboundLink href="https://www.reecemartin.ca/">0 </OutboundLink>
          <OutboundLink href="https://www.shanshan-li.com/">2 </OutboundLink>
          1
        </p>
      </div>
    </main>
  )
}