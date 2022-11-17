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

// const page = document.getElementsByTagName('main')[0];
// const buttonSubmit = document.getElementById('submit-btn');

// function createForm() {
//   const formData = document.createElement('div');
//   formData.id = 'form-data';
//   page.innerHTML = '';
//   page.appendChild(formData);
//   for (let i = 0; i < 4; i+= 1) {
//     const phraseElement = document.createElement('p');
//     formData.appendChild(phraseElement);
//     const phrasesForm = formData.children;
//   }
// }

// function saveInfos() {
//   const nameUser = `${document.getElementById('input-name').value} ${document.getElementById('input-last-name')}`;
//   const emailUser = document.getElementById('email').value;
//   const homeUser = document.getElementById('house').value
//   const savedInfo = [`Nome: ${nameUser}`, `Email: ${emailUser}`, `Casa: ${homeUser}`, `Família: ${}`, `Matérias: ${}`];

// }

// function buttonEvent() {
//   createForm();
//   saveInfos();
// }

// button.addEventListener('click', buttonEvent);
