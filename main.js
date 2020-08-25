const button = document.querySelector("button");
const mensagem = document.querySelector("p");
const img = document.querySelector("img");

let contagem = 10;
let idInterval = null;

const lancarFoguete = () => {
  img.setAttribute("src", "./assets/foguete.gif");
  button.innerText = "Reiniciar Missão!";
};

button.addEventListener("click", () => {
  if (
    button.innerText == "Iniciar contagem regressiva!" ||
    button.innerText == "Missão Abortada!"
  ) {
    button.innerText = "Abortar a missão";
    idInterval = setInterval(() => {
      if (contagem == 0) {
        lancarFoguete();
        clearInterval(idInterval);
      }
      mensagem.innerText = `Contagem regressiva: ${contagem}`;
      contagem--;
    }, 1000);
  } else if (button.innerText == "Abortar a missão") {
    clearInterval(idInterval);
    button.innerText = "Iniciar contagem regressiva!";
    mensagem.innerText = "Missão Abortada!";
    contagem = 10;
  } else if (button.innerText == "Reiniciar Missão!") {
    img.setAttribute("src", "./assets/foguete.png");
    mensagem.innerText = "Preparando para contagem regressiva";
    button.innerText = "Iniciar contagem regressiva!";
    contagem = 10;
  }
});
