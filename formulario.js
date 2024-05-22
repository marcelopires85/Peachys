const formulario = document.querySelector("form");

function formularioEnviado(resposta) {
  if (resposta.ok) {
    formulario.innerHTML =
      "<p>Mensagem enviada. Responderemos o mais breve possível. Fique de olho em sua caixa de mensagens.</p>";
  } else {
    formulario.innerHTML =
      "<p>Erro no envio. Caso não consiga reenviar, enviar mensagem direto para encomendas@peachypanties.com.br</p>";
  }
}

function enviarFormulario(event) {
  event.preventDefault();
  const botao = document.querySelector("form button");
  botao.disable = true;
  botao.inerText = "Enviando...";

  const data = new FormData(formulario);

  fetch("./enviar.php", {
    method: "POST",
    body: data,
  }).then(formularioEnviado);
}

formulario.addEventListener("submit", enviarFormulario);
