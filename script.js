const answers = { /* same answer object as your original */ };

const allCategories = Object.keys(answers);
let isShaking = false;

function generateStars() {
  const container = document.getElementById('stars-container');
  for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 2 + 's';
    star.style.opacity = Math.random() * 0.5 + 0.3;
    container.appendChild(star);
  }
}

function getRandomAnswer() {
  const category = allCategories[Math.floor(Math.random() * allCategories.length)];
  const pool = answers[category];
  return pool[Math.floor(Math.random() * pool.length)];
}

function shakeTheBall() {
  if (isShaking) return;

  isShaking = true;

  const cube = document.getElementById('cube');
  const answerText = document.getElementById('answer-text');
  const shakeBtn = document.getElementById('shake-btn');

  cube.style.animation = 'shake 0.8s ease-in-out';
  shakeBtn.disabled = true;
  shakeBtn.style.opacity = '0.6';

  answerText.textContent = '🌀';
  answerText.classList.remove('answer-text');

  setTimeout(() => {
    cube.style.animation = 'mysticalGlow 3s ease-in-out infinite';
    answerText.textContent = getRandomAnswer();
    answerText.classList.add('answer-text');
    shakeBtn.disabled = false;
    shakeBtn.style.opacity = '1';
    isShaking = false;
  }, 800);
}

document.getElementById('shake-btn').addEventListener('click', shakeTheBall);
document.getElementById('cube').addEventListener('click', shakeTheBall);

generateStars();