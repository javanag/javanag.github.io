document.getElementById("motd").addEventListener("click", generateUpdateNextDescription());

function generateUpdateNextDescription() {
  const descriptions = [
    "amateur guitarist",
    "anime viewer",
    "blockchain baller",
    "dumpster (treasure) diver",
    "ex dollarama cashier",
    "fervent recycler",
    "high school jazz trumpeter",
    "meal prepper",
    "night walker",
    "plant protector",
    "present-day present-time hair dangler",
    "regular gymgoer",
    "retired barber",
    "rusty german speaker",
    "semi-frequent reader",
    "slightly washed jogger",
    "soundcloud producer",
    "startup dreamer",
    "ttc rider",
    "twitch streamer",
    "ultimate frisbee player",
    "veteran gamer",
    "vex world championship participant",
    "wadoryu shodan",
  ];

  return function updateNextDescription(event) {
    if (descriptions.length === 0) {
      event.target.textContent = "-ll out of things to say";
      return;
    }

    const sampleIndex = Math.floor(Math.random() * descriptions.length);
    const [ description ] = descriptions.splice(sampleIndex, 1);

    console.log(description);
    event.target.textContent = description;
  };
}
