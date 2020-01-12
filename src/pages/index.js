import React from "react"
import "../styles/global.css"
import "../styles/fontawesome.min.css"
import Header from "../components/Header"
import SectionTitle from "../components/SectionTitle"
import Icon from "../components/Icon"
import WorkExperience from "../components/WorkExperience"

export default () => (
  <main class="container">
    <Header />

    <SectionTitle icon="fa fa-user" text="About"/>

    <p>
      Howdy, I'm Javan, a student in the Computer Science Specialist program at 
      the <Icon icon="fa fa-university"/> University of Toronto. After completing my third year, I have been
      on <a href="https://web.cs.toronto.edu/undergraduate/pey">PEY</a> working
      at <a href="https://www.overbond.com/"> <Icon icon="fa fa-briefcase"/> Overbond</a> since May 2019 as a
      software developer.

      After my internship I look forward to returning to school in the fall to complete my studies and graduate
      in <Icon icon="fa fa-graduation-cap"/> 2021.
    </p>

    <p>
      Read on to see some selected projects and work experience. Check out
      my <a href="https://github.com/javanag"> <Icon icon="fab fa-github-alt"/> GitHub</a> to
      see more, and send me an email at <span class="email"><Icon icon="fa fa-envelope"/>
      <b> javan.graham (at) mail.utoronto.ca</b></span> if you'd like to discuss anything!
    </p>

    <SectionTitle icon="fa fa-hammer" text="Projects"/>
    <blockquote class="subtitle">"What I cannot create, I do not understand."<br />
      <footer> - <a href="https://en.wikipedia.org/wiki/Richard_Feynman">Richard Feynman</a></footer>
    </blockquote>

    <SectionTitle icon="fa fa-laptop-code" text="Experience"/>

    <WorkExperience
      company="Overbond"
      companyUrl="https://www.overbond.com/"
      subtitle="Toronto, May 2019 - Now"
    >
      <p>
        I recently started an ongoing internship here as a <Icon icon="fa fa-briefcase" /> <b>Full Stack Developer</b>.
        A few of my responsibilities for this role include:
        <ul>
          <li>Gather requirements, write design docs, plan and break down tasks for sprints</li>
          <li>Implement features for flagship web app built on <Icon icon="fas fa-gem" /> Ruby on Rails and <Icon icon="fas fa-atom" /> React</li>
          <li>Maintain <Icon icon="fa fa-file-alt" /> documentation and tests together with code changes</li>
          <li>Write ETL applications to intake data from financial APIs into <Icon icon="fas fa-database" />  Postgres using <Icon icon="fab fa-python" /> Python</li>
        </ul>
      </p>
    </WorkExperience>

    <WorkExperience
      company="Rotary Club Burlington Lakeshore"
      companyUrl="https://rotaryburlington.com/"
      subtitle="Burlington, July 2018 - August 2018"
    >
      <p>
        I got the opportunity to create a static site as part of a marketing campaign for a pilot event the Rotary
        Club was hosting the night before <a href="http://www.canadaslargestribfest.com/">Canada's Largest Ribfest</a>.
        It was my first foray into web development, and had to figure out many things:
      </p>

      <ul>
        <li>
          Interpreted client needs for web page, worked closely with marketing team to create and implement design as
          static site using <Icon icon="fa fa-code" /> HTML, CSS and JavaScript with Bootstrap
        </li>
        <li>Tracked ad campaign impact on web page traffic with Google Analytics</li>
      </ul>

      <p>
        Once the page was published, it was <Icon icon="fas fa-eye" /> viewed by thousands of unique visitors
        over the month of August. I'm glad that my first user-facing site (and first attempt at consulting-style work)
        was a success, and had a chance to provide real impact.
      </p>
    </WorkExperience>
    <div class="footer">
      <p>© 2020 Javan Graham</p>
    </div>
  </main>
)