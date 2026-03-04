const modal = document.querySelector("dialog.dialog");
const closeButton = document.querySelector("input#closeButton");
const createButton = document.querySelector("input#create");
const submitButton = document.querySelector("input#submitButton");
const titulo = document.querySelector("input#titulo");
const hora = document.querySelector("input#hora");
const diaMes = document.querySelector("input#diaMes");
const errorMessage = document.querySelector(".msg");
const listaAgendamentos = document.querySelector("section#lista-agendamentos");
let agendamentos = JSON.parse(localStorage.getItem("meusAgendamentos")) || [];

createButton.addEventListener("click", function () {
  modal.showModal();
});

closeButton.addEventListener("click", function () {
  modal.close();
});

function limparStrings(string) {
  return string.trim().toLowerCase();
}

function validarDatas() {
  const hoje = new Date();
  const diaMesHoraFormatado = new Date(diaMes.value + "T" + hora.value); //pego o dia do mes + t + hora e entao consigo criar uma variavel date no formato correto que date entende
  if (diaMesHoraFormatado < hoje) {
    return true;
  }
  return false;
}

function exibirErro(erro) {
  if (erro === "input") {
    errorMessage.textContent = "por favor preencha todos os campos";
    errorMessage.classList.add("error"); // coloco as classes de estilo que essa div de erro vai ter

    setTimeout(() => {
      errorMessage.textContent = "";
      errorMessage.classList.remove("error");
    }, 5000); //a mensagem de erro vai sumir depois de 5 segundos
  } else if (erro === "data invalida") {
    errorMessage.textContent = "por favor insira uma data valida";
    errorMessage.classList.add("error"); // coloco as classes de estilo que essa div de erro vai ter

    setTimeout(() => {
      errorMessage.textContent = "";
      errorMessage.classList.remove("error");
    }, 5000); //a mensagem de erro vai sumir depois de 5 segundos
  }
}

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  if (titulo.value === "" || hora.value === "" || diaMes.value === "") {
    exibirErro("input");
    return;
  }

  let tituloSanitizado = limparStrings(titulo.value);

  let isInvalido = validarDatas();

  if (isInvalido) {
    exibirErro("data invalida");
    return;
  }

  const diaMesFormatado = new Date(diaMes.value);

  const agendamento = {
    titulo: tituloSanitizado,
    hora: hora.value,
    diaMes: diaMesFormatado.toLocaleDateString("pt-BR"),
  };
  agendamentos.push(agendamento);
  atualizarInterface();
  modal.close();
  titulo.value = "";
  hora.value = "";
  diaMes.value = "";
});

function atualizarInterface() {
  listaAgendamentos.innerHTML = "";
  for (let i = 0; i < agendamentos.length; i++) {
    let novaDiv = document.createElement("div");
    novaDiv.classList.add("card-agendamento");
    novaDiv.innerHTML = `<h2>${agendamentos[i].titulo}</h2>
    <p>📅 ${agendamentos[i].diaMes} às ⏰ ${agendamentos[i].hora}</p>
    <button onclick="removerAgendamento(${i})" class="btn-excluir">Excluir</button>  `;
    listaAgendamentos.appendChild(novaDiv);
  }
  localStorage.setItem("meusAgendamentos", JSON.stringify(agendamentos));
}

function removerAgendamento(index) {
  agendamentos.splice(index, 1); //remove o item do array vá até a posição indicada e remova um elemento
  atualizarInterface();
}

atualizarInterface();