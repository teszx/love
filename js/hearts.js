document.addEventListener('DOMContentLoaded', function() {
  // Configura os botões
  const btnYes = document.getElementById('sim');
  const btnNo = document.getElementById('nao');
  
  if (btnYes) {
    btnYes.addEventListener('click', handleYesClick);
  }
  
  if (btnNo) {
    btnNo.addEventListener('mouseover', moveNoButton);
    btnNo.addEventListener('touchstart', function(e) {
      e.preventDefault();
      moveNoButton();
    });
  }

  // Função para criar corações flutuantes
  function createFloatingHeart() {
    const heart = document.createElement('div');
    const emojis = ['❤️', '💕', '💖', '💘', '💗', '💞', '💓', '💝'];
    
    heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    heart.style.position = 'fixed';
    heart.style.fontSize = (20 + Math.random() * 30) + 'px';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.bottom = '0';
    heart.style.opacity = '0.8';
    heart.style.zIndex = '1000';
    heart.style.animation = 'floatUp ' + (3 + Math.random() * 2) + 's linear forwards';
    heart.style.pointerEvents = 'none';
    heart.style.userSelect = 'none';
    heart.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';
    
    document.body.appendChild(heart);
    
    // Remove o coração após a animação
    setTimeout(function() {
      heart.remove();
    }, 5000);
  }

  // Função para quando clica no SIM
  function handleYesClick() {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const heartCount = isMobile ? 30 : 50;
    const delay = isMobile ? 200 : 100;
    
    // Cria vários corações
    for(let i = 0; i < heartCount; i++) {
      setTimeout(function() {
        createFloatingHeart();
      }, i * delay);
    }
    
    // Mostra mensagem
    setTimeout(function() {
      alert('🎉 Ebaaa! Você me fez a pessoa mais feliz do mundo! ❤️');
    }, heartCount * delay / 2);
  }

  // Função para mover o botão NÃO
  function moveNoButton() {
    const btn = document.getElementById('nao');
    if (!btn) return;
    
    btn.style.transition = 'all 0.3s ease-out';
    btn.style.position = 'absolute';
    btn.style.left = (10 + Math.random() * 70) + '%';
    btn.style.top = (10 + Math.random() * 70) + '%';
  }
});
