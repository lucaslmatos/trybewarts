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
  if (concordar.value === 'checked') {
    botaoSubmit.disabled = true;
  } else {
    botaoSubmit.disabled = false;
  }
});
