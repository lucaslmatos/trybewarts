const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const botaoEntrar = document.querySelector('#botaoEntrar');
const concordar = document.querySelector('#agreement');
const botaoSubmit = document.querySelector('#submit-btn');

botaoEntrar.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

concordar.addEventListener('change', () => {
  console.log(concordar.value);
  if (concordar.value === 'on') {
    botaoSubmit.toggleAttribute('disabled');
  }
});

const counter = document.getElementById('counter');
const textArea = document.getElementById('textarea');
counter.innerText = 500;
function countNumber() {
  counter.innerText = 500 - textArea.value.length;
}

textArea.addEventListener('keyup', countNumber);
