var botaoAdicionar = document.querySelector("#adicionar-encomenda");
var tabela = document.querySelector("#tabela-clientes");

botaoAdicionar.addEventListener("click", function (e) {
  e.preventDefault();

  var nome = document.querySelector("#nome-form").value;
  var quantidade = document.querySelector("#quantidade-form").value;
  var servico = document.querySelector("#servico-form").value;
  var valorUnitario = document.querySelector("#valor-form").value;

  var total = quantidade * valorUnitario;

  var novaLinha = document.createElement("tr");
  novaLinha.classList.add("cliente");
  novaLinha.innerHTML = `
    <td class="nome">${nome}</td>
    <td class="servico">${servico}</td>
    <td class="qtde">${quantidade}</td>
    <td class="unitario">${valorUnitario}</td>
    <td class="total">${total}</td>
  `;

  tabela.appendChild(novaLinha);

  document.querySelector("#form-encomenda").reset();
});
