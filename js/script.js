let pressedKeys = '';

window.addEventListener('keyup', (e) => {
  pressedKeys += e.key;
  pressedKeys = pressedKeys.slice(-4);
  if (pressedKeys === "1337") {
    alert("Why do programmers prefer dark mode?\nBecause light attracts bugs!");
  }
});

let isEasterEggActive = false; // Variable to track the state of the Easter egg

const eastereggLink = document.getElementById('easteregg1');

eastereggLink.addEventListener('click', function(event) {
    // Prevent default behavior of the link
    event.preventDefault();

    // Toggle the Easter egg state
    isEasterEggActive = !isEasterEggActive;

    // Change the background image of the body based on the state
    if (isEasterEggActive) {
        document.body.style.backgroundImage = 'url(https://picsum.photos/2560/1200)'; // Using the provided URL
    } else {
        document.body.style.backgroundImage = 'none'; // Revert to the default background
    }
});
