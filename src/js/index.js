const botaoEnviar = document.getElementById("botao");

const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputTelefone = document.getElementById("telefone");
const areaMensagem = document.getElementById("mensagem");

const erroNome = document.getElementById('erro-nome');
const erroEmail = document.getElementById('erro-email');
const erroTelefone = document.getElementById('erro-telefone');
const erroMensagem = document.getElementById('erro-mensagem');

botaoEnviar.addEventListener('click', event => {
  if (inputNome.value == '' || inputNome.value == ' ') {
    inputNome.classList.add('input-erro');
    inputNome.classList.remove('input-ok')
    erroNome.classList.remove('ok')
    event.preventDefault();
  }else{
    inputNome.classList.add('input-ok')
    erroNome.classList.add('ok')
    event.preventDefault();
  }

  if (inputEmail.value == '' || inputEmail.value == ' ') {
    inputEmail.classList.add('input-erro');
    inputEmail.classList.remove('input-ok')
    erroEmail.classList.remove('ok')
    event.preventDefault();
  }else{
    inputEmail.classList.add('input-ok')
    erroEmail.classList.add('ok')
    event.preventDefault();
  }

  if (inputTelefone.value == '' || inputTelefone.value == ' ') {
    inputTelefone.classList.add('input-erro');
    inputTelefone.classList.remove('input-ok')
    erroTelefone.classList.remove('ok')
    event.preventDefault();
  }else{
    inputTelefone.classList.add('input-ok')
    erroTelefone.classList.add('ok')
    event.preventDefault();
  }

  if (areaMensagem.value == '' || areaMensagem.value == ' ') {
    areaMensagem.classList.add('input-erro');
    areaMensagem.classList.remove('input-ok')
    erroMensagem.classList.remove('ok')
    event.preventDefault();
  }else{
    areaMensagem.classList.add('input-ok')
    erroMensagem.classList.add('ok')
    event.preventDefault();
  }
});
// }