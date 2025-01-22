document.getElementById("motd").addEventListener("click", generateUpdateNextDescription());

function generateUpdateNextDescription() {
  const descriptions = [
    "amateur guitarist",
    "anime viewer",
    "apprentice animator",
    "blockchain baller",
    "certified hooper",
    "dumpster-adjacent diver",
    "eternal circadian rhythm disrupter",
    "ex dollarama cashier",
    "fervent recycler",
    "former (acting) co-CTO",
    "grapheneos pixel toter",
    "high school jazz trumpeter",
    "meal prepper",
    "meaning seeker",
    "minimalist",
    "morning and night walker",
    "not so rusty german speaker",
    "plant protector",
    "present-day present-time hair dangler",
    "regularish gymgoer",
    "retired barber",
    "self (and other) improver",
    "semi-frequent reader",
    "semi-unretired twitch streamer",
    "slightly washed jogger",
    "soundcloud producer who may also rap",
    "startup dreamer and nightmarer",
    "ttc passenger",
    "ultimate frisbee player",
    "veteran gamer",
    "vex world championship participant",
    "wadoryu shodan",
  ];

  const motdArticleElement = document.getElementById("motd-article");

  return function updateNextDescription(event) {
    if (descriptions.length === 0) {
      motdArticleElement.remove();
      event.target.textContent = " all out of things to tell you";
      return;
    }

    const sampleIndex = Math.floor(Math.random() * descriptions.length);
    const [ description ] = descriptions.splice(sampleIndex, 1);

    if (["a", "e", "i", "o", "u"].some((vowel) => description.startsWith(vowel))) {
      motdArticleElement.textContent = " an "
    } else {
      motdArticleElement.textContent = " a "
    }

    event.target.textContent = description;
  };
}

