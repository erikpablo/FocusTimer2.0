const audioFiles = {
  forest: './assets/forest.mp3',
  rain: './assets/rain.mp3',
  cafeteria: './assets/cafeteria.mp3',
  fireplace: './assets/fireplace.mp3',
};

let currentAudio = null;

function playThemeAudio(theme) {
  if (currentAudio) {
    currentAudio.pause()
    currentAudio.currentTime = 0
  }

  if (audioFiles[theme]) {
    currentAudio = new Audio(audioFiles[theme]);
    currentAudio.loop = true
    currentAudio.play()
  }
}


document.querySelectorAll('.themes button').forEach(button => {
    button.addEventListener('click', () => {
      const theme = button.getAttribute('data-action');
      document.body.className = theme; 
      playThemeAudio(theme)
    });
  });