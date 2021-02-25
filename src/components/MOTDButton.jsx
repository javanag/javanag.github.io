import React, { useState } from "react"

const MOTDButton = () => {
  const [motd, setMotd] = useState("cs student")
  const [motdList, setMotdList] = useState(require("../../static/motd.json"))

  const updateWithRandomMOTD = (motdList, setMotd, setMotdList) => {
    const sampleIndex = Math.floor(Math.random() * motdList.length)
    if (motdList.length > 0) {
      setMotd(motdList[sampleIndex])
      motdList.splice(sampleIndex, 1)
      setMotdList(motdList)
    } else {
      setMotd("that's all folks ;)")
    }
  }

  return (
    <button
      className="motd"
      type="button"
      onClick={() => {
        updateWithRandomMOTD(motdList, setMotd, setMotdList)
      }}
    >
      software developer / <i>{motd}</i>
    </button>
  )
}
export default MOTDButton
