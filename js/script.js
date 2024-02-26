let pressedKeys = '';
const jokes = [
  "Why do programmers prefer dark mode?\nBecause light attracts bugs!",
  "Why did the web developer go broke?\nBecause he lost all his cache!",
  "How do you comfort a JavaScript bug?\nYou console it!",
  "Why was the JavaScript developer sad?\nBecause he didn't know how to \"null\" his emotions!",
  "Why did the web developer go to therapy?\nBecause he had too many issues to resolve!",
  "Why do front-end developers always seem so calm?\nBecause they can handle the CSS!",
  "What do you call a group of hackers discussing their latest project?\nA byte club!",
  "Why did the HTML file break up with the CSS file?\nBecause it caught him \"styling\" with another sheet!",
  "Why don't programmers like nature?\nIt has too many bugs!",
  "Why was the website cold?\nBecause it left its CSS in the stylesheets!"
];

window.addEventListener('keyup', (e) => {
  pressedKeys += e.key;
  pressedKeys = pressedKeys.slice(-4);
  if (pressedKeys === "1337") {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    alert(jokes[randomIndex]);
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
