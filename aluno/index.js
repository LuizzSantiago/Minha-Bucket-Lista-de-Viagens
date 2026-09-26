/*
===========================================================
PROVA PRÁTICA DE JAVASCRIPT
Arquivo que deverá ser desenvolvido pelo aluno.
===========================================================

IMPORTANTE:
- Não altere os IDs existentes no index.html.
- As viagens deverão ser inseridas dentro de #listaViagens.
- Cada viagem deverá ser uma <tr> com a classe "viagem-item".
- Dentro da linha criada, utilize obrigatoriamente:

  .viagem-foto        -> célula que contém a imagem
  .viagem-pais        -> país/destino
  .viagem-data        -> data
  .viagem-descricao   -> descrição
  .viagem-status      -> "Já fui" ou "Quero ir"
  .btn-editar         -> botão de edição
  .btn-excluir        -> botão de exclusão

Isso permite que o sistema de correção automática identifique
o resultado gerado pelo seu programa.
*/

// Desenvolva sua solução abaixo.
const inputPais = document.querySelector("#pais");
const inputFoto = document.querySelector("#foto");
const inputData = document.querySelector("#dataViagem");
const inputDescricao = document.querySelector("#descricao");
const checkboxJaFui = document.querySelector("#jaFui");
 
const btnSalvar = document.querySelector("#btnSalvar");
const btnCancelar = document.querySelector("#btnCancelar");
const mensagemErro = document.querySelector("#mensagemErro");
 
//  Elemento Listagem 
const listaViagens = document.querySelector("#listaViagens");
const listaVazia = document.querySelector("#listaVazia");
const contadorViagens = document.querySelector("#contadorViagens");
 

let linhaEditando = null;
 
//  Validação 
function camposValidos() {
  return (
    inputPais.value.trim() !== "" &&
    inputFoto.value.trim() !== "" &&
    inputData.value.trim() !== "" &&
    inputDescricao.value.trim() !== ""
  );
}
 
//  Limpar Formulario 
function limparFormulario() {
  inputPais.value = "";
  inputFoto.value = "";
  inputData.value = "";
  inputDescricao.value = "";
  checkboxJaFui.checked = false;
}
 
//  Contador E Lista vazia
function atualizarInterface() {
  const total = document.querySelectorAll(".viagem-item").length;
 
  contadorViagens.textContent = `${total} viagem(ns)`;
 
  if (total === 0) {
    listaVazia.classList.remove("d-none");
  } else {
    listaVazia.classList.add("d-none");
  }
}
 
//  Linha de viagem 
function criarLinhaViagem(pais, foto, data, descricao, status) {
  const linha = document.createElement("tr");
  linha.className = "viagem-item";
 
  linha.innerHTML = `
    <td class="viagem-foto">
      <img src="${foto}" alt="${pais}" width="100">
    </td>
    <td class="viagem-pais">${pais}</td>
    <td class="viagem-data">${data}</td>
    <td class="viagem-descricao">${descricao}</td>
    <td class="viagem-status">${status}</td>
    <td class="text-end">
      <button type="button" class="btn btn-sm btn-outline-primary btn-editar">Editar</button>
      <button type="button" class="btn btn-sm btn-outline-danger btn-excluir">Excluir</button>
    </td>
  `;
 
  return linha;
}
 
// Salvar, adicionar ou editar
btnSalvar.addEventListener("click", () => {
  if (!camposValidos()) {
    mensagemErro.classList.remove("d-none");
    return;
  }
 
  mensagemErro.classList.add("d-none");
 
  const pais = inputPais.value.trim();
  const foto = inputFoto.value.trim();
  const data = inputData.value;
  const descricao = inputDescricao.value.trim();
  const status = checkboxJaFui.checked ? "Já fui" : "Quero ir";
 
  if (linhaEditando === null) {
    // Modo adicionar: cria uma linha nova
    const novaLinha = criarLinhaViagem(pais, foto, data, descricao, status);
    listaViagens.appendChild(novaLinha);
  } else {
    // Modo editar: atualiza a linha existente, sem criar uma nova
    linhaEditando.querySelector(".viagem-foto img").src = foto;
    linhaEditando.querySelector(".viagem-foto img").alt = pais;
    linhaEditando.querySelector(".viagem-pais").textContent = pais;
    linhaEditando.querySelector(".viagem-data").textContent = data;
    linhaEditando.querySelector(".viagem-descricao").textContent = descricao;
    linhaEditando.querySelector(".viagem-status").textContent = status;
 
    linhaEditando = null;
    btnSalvar.textContent = "Adicionar viagem";
    btnCancelar.classList.add("d-none");
  }
 
  limparFormulario();
  atualizarInterface();
});
 
//  Cancelar
btnCancelar.addEventListener("click", () => {
  linhaEditando = null;
  btnSalvar.textContent = "Adicionar viagem";
  btnCancelar.classList.add("d-none");
  mensagemErro.classList.add("d-none");
  limparFormulario();
});
 
// Editar e excluir
listaViagens.addEventListener("click", (evento) => {
  const botao = evento.target;
  const linha = botao.closest(".viagem-item");
 
  if (!linha) return;
 
  if (botao.classList.contains("btn-excluir")) {
    linha.remove();
    atualizarInterface();
  }
 
  if (botao.classList.contains("btn-editar")) {
    inputPais.value = linha.querySelector(".viagem-pais").textContent;
    inputFoto.value = linha.querySelector(".viagem-foto img").src;
    inputData.value = linha.querySelector(".viagem-data").textContent;
    inputDescricao.value = linha.querySelector(".viagem-descricao").textContent;
    checkboxJaFui.checked =
      linha.querySelector(".viagem-status").textContent.trim() === "Já fui";
 
    linhaEditando = linha;
    btnSalvar.textContent = "Salvar edição";
    btnCancelar.classList.remove("d-none");
 
    inputPais.focus();
  }
});
 

atualizarInterface();
 