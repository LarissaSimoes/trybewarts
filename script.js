/* eslint-disable no-bitwise */
const email = document.getElementById('email');
const Senha = document.getElementById('password');
const button = document.getElementById('entrar');

function trybewartsLogin() {
  if (email.value !== 'tryber@teste.com' && Senha.value !== 123456) {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}
// console.log('trybewartsLogin');
trybewartsLogin();

button.addEventListener('click', trybewartsLogin);
