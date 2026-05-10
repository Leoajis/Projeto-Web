const formDuvidas = document.getElementById('form-duvidas');
const nomeInput = document.getElementById('nome');
const mensagemInput = document.getElementById('mensagem');

formDuvidas.addEventListener('submit', function(event) {
  event.preventDefault();
  const nome = nomeInput.value;
  const mensagem = mensagemInput.value;
  const email = document.getElementById('email').value;
  alert(`Obrigado, ${nome}! Sua dúvida foi enviada com sucesso.\nNossa equipe entrará em contato em breve para ajudar você.`);
  nomeInput.value = "";
  mensagemInput.value = "";
  document.getElementById('email').value = "";
});