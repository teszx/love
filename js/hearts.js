function handleYesClick() {
  for (let i = 0; i < 50; i++) {
    setTimeout(() => createFloatingHeart(), i * 100);
  }
  alert('🎉 Ebaaa! Você me fez a pessoa mais feliz do mundo! ❤️');
}

function moveNoButton() {
  const btn = document.getElementById('nao');
  btn.style.position = 'absolute';
  btn.style.left = Math.random() * 80 + '%';
  btn.style.top = Math.random() * 80 + '%';
}

function createFloatingHeart() {
  const heart = document.createElement('img');
  heart.src = 'fotos/4.gif';
  heart.className = 'pixel-heart';
  heart.style.position = 'fixed';
  heart.style.width = (30 + Math.random() * 20) + 'px';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.bottom = '0';
  heart.style.opacity = '0.8';
  heart.style.zIndex = '1000';
  document.body.appendChild(heart);

  let pos = 0;
  const speed = 1 + Math.random() * 3;
  const id = setInterval(frame, 20);

  function frame() {
    if (pos >= window.innerHeight) {
      clearInterval(id);
      heart.remove();
    } else {
      pos += speed;
      heart.style.bottom = pos + 'px';
      heart.style.opacity = 1 - (pos / window.innerHeight);
      heart.style.transform = `rotate(${pos / 5}deg)`;
    }
  }
}
