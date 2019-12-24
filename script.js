const init = () => {
  updateElements();
  setInterval(updateElements, 1000);
}

const updateElements = () => {
  today = new Date();

  hexHours = convertTimeToHex(today.getHours());
  hexMinutes = convertTimeToHex(today.getMinutes());
  hexSeconds = convertTimeToHex(today.getSeconds());

  hexColour = `#${hexHours}${hexMinutes}${hexSeconds}`;
  console.log(hexColour);

  document.querySelectorAll('.colour-clock').forEach((e) => {
    e.style.background = hexColour;
  });
}

// Add necessary zeroes to pad number of hours for hex colour value
const convertTimeToHex = (value) => {
  result = value.toString();
  return result.length < 2 ? '0' + result : result;
}