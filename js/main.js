let currentStep = 1;
const totalSteps = 3; // messages 1, 2, 3

function nextStep() {
  const current = document.getElementById(`message${currentStep}`);
  if (current) current.classList.add('hidden');

  currentStep++;

  document.getElementById('progress').style.width = `${(currentStep - 1) / (totalSteps + 1) * 100}%`;

  const next = document.getElementById(`message${currentStep}`);
  if (next) {
    next.classList.remove('hidden');
  } else {
    document.getElementById('final-message').classList.remove('hidden');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('sim')?.addEventListener('click', handleYesClick);

  const naoBtn = document.getElementById('nao');
  if (naoBtn) {
    naoBtn.addEventListener('mouseover', moveNoButton);
  }
});
