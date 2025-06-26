
const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('mouseover', () => {
  const buttonWidth = noBtn.offsetWidth;
  const buttonHeight = noBtn.offsetHeight;

  const maxX = window.innerWidth - buttonWidth - 20;
  const maxY = window.innerHeight - buttonHeight - 20;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.transition = 'transform 0.2s ease';
  noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});
