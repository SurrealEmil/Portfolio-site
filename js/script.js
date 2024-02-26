let pressedKeys = '';

window.addEventListener('keyup', (e) => {
  pressedKeys += e.key;
  pressedKeys = pressedKeys.slice(-4);
  if (pressedKeys === "1337") {
    alert("Why do programmers prefer dark mode?\nBecause light attracts bugs!");
  }
});

// Check if the Easter egg state is stored in local storage
let isEasterEggActive = localStorage.getItem('isEasterEggActive') === 'true';

// Update the background image based on the stored state
if (isEasterEggActive) {
    document.body.style.backgroundImage = 'url(https://picsum.photos/2560/1300)';
}

const eastereggLink = document.getElementById('easteregg1');

eastereggLink.addEventListener('click', function(event) {
    event.preventDefault();

    // Toggle the Easter egg state
    isEasterEggActive = !isEasterEggActive;

    // Update the background image
    if (isEasterEggActive) {
        document.body.style.backgroundImage = 'url(https://picsum.photos/2560/1300)';
    } else {
        document.body.style.backgroundImage = 'none';
    }

    // Store the Easter egg state in local storage
    localStorage.setItem('isEasterEggActive', isEasterEggActive);
});
