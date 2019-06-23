/* 2- Adicionar um botão ao html com a legenda “Cumprimentar” que, ao ser
clicado (onclick) mostre um alerta que diga “olá”. */
const exercicio2 = () => {
  let button = document.querySelector("#exercicio2");
  button.addEventListener("click", () => alert("olá mundo"));
};

/* 3. Adicionar outro botão ao html com a legenda “Alterar Fundo” que, quando
clicado (onclick) troque a cor do fundo do body para verde.*/
const exercicio3 = () => {
  let button = document.querySelector("#exercicio3");
  button.addEventListener("click", () => {
    let body = document.querySelector("body");
    body.style = "background-color: green";
  });
};

/* 4- Adicionar à página uma imagem que, ao passar do mouse em cima ela,
imprima na linha de comando (“estou vendo a imagem”); */
const exercicio4 = () => {
  let image = document.querySelector("#exercicio4");
  image.addEventListener("mouseover", () =>
    console.log("estou vendo a imagem")
  );
};
/* 5 - Adicionar outra imagem à página que, quando clicada, utilizando
addEventListener, imprima na linha de comando (“estou clicando na
imagem”). */

const exercicio5 = () => {
  let image = document.querySelector("#exercicio5");
  image.addEventListener("click", event => {
    let mouseX = event.pageX;
    let mouseY = event.pageY;
    console.log(`estou clicando na imagem X:${mouseX} Y:${mouseY}`);
  });
};

/* 6- Definir um addEventListener de forma que, quando o usuário clicar em
qualquer parte do body da página, a cor de fundo do body todo mude
para vermelho. Para isso, usar o this da função do evento. */
/* 7 - O usuário é meio chato e, agora, pediu para remover o listener que
criamos recentemente, já que ele não consegue interagir bem com a
página. */

const exercicio6 = () => {
  const tornarVermelho = () => {
    this.style.backgroundColor = "red";
  };

  let body = document.querySelector("body");
  body.addEventListener("click", tornarVermelho());
  console.log("test");

  body.removeEventListener("click", tornarVermelho());
};

/*
8 - Criar um formulário básico com um action que redirecione para
www.google.com.br. Usando JavaScript, fazer com que, quando o usuário
clicar em Enviar, o formulário não seja enviado, mas sim que seja exibido
um alert dizendo “Não é possível enviar”. 
*/
const exercicio8 = () => {
  let form = document.querySelector("#exercicio8");
  form.addEventListener("submit", event => {
    event.preventDefault();
    alert("Não é possível Enviar");
  });
};

/* 9- Fazer com que o addEventListener criado na imagem imprima em linha de
comando a localização do mouse em x e y.
*/
// Feito no exercicio 5

//2- Timers

/* 1- Em uma página HTML básica (podemos usar a mesma de Eventos), fazer
com que, se o usuário passar 10 segundos nessa página, seja exibido um
alert que diga “tempo esgotado!
*/
const exercicio21 = () => {
  let timeout = setTimeout(() => {
    alert("Tempo Esgotado");
  }, 10000);
};
/* 2- A cada 5 segundos que ele passe na página, fazer com que seja exibido
um alert que diga “hora do intervalo” */
const exercicio22 = () => {
  let intervalo = setInterval(() => {
    alert("Hora do Intervalo");
  }, 5000);
};

window.onload = () => {
  exercicio2();
  exercicio3();
  exercicio4();
  exercicio5(); // + exercicio9
  //exercicio6 // + exercicio7
  exercicio8();
  exercicio21();
  exercicio22();
};
