import React, { useState } from "react"

const updateWithRandomMotd = (motdList, setMotd, setMotdList) => {
  const sampleIndex = Math.floor(Math.random() * motdList.length)
  if (motdList.length > 0) {
    setMotd(motdList[sampleIndex])
    motdList.splice(sampleIndex, 1)
    setMotdList(motdList)
  } else {
    setMotd("that's all folks ;)")
  }
}

const Header = () => {
  const [motd, setMotd] = useState("cs student")
  const [motdList, setMotdList] = useState(require("../../static/motd.json"))

  return (
    <div>
      <div style={{ float: "left", marginBottom: "1.25em" }}>
        <h1 style={{ marginBottom: 0 }}>Javan Graham</h1>
        <button
          className="motd"
          type="button"
          onClick={() => {
            updateWithRandomMotd(motdList, setMotd, setMotdList)
          }}
        >
          software developer / <i>{motd}</i>
        </button>
      </div>

      <div style={{ float: "right" }}>
        <ul className="nav">
          <li><a className="link" href="#about">about</a></li>
          <li><a className="link" href="#projects">projects</a></li>
          <li><a className="link" href="#experience">experience</a></li>
        </ul>
      </div>

      <div style={{ clear: "both" }}></div>
    </div>
  )
}
export default Header