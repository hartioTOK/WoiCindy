
const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('mouseover', () => {
  const randomX = Math.floor(Math.random() * (window.innerWidth - 100));
  const randomY = Math.floor(Math.random() * (window.innerHeight - 50));
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});
