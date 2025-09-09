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
  // Adiciona a classe "cliente" nessa nova linha
  novaLinha.classList.add("cliente");
  novaLinha.innerHTML = `
    <td class="nome">${nome}</td>
    <td class="servico">${servico}</td>
    <td class="qtde">${quantidade}</td>
    <td class="unitario">${formataValor(valorUnitario)}</td>
    <td class="total">${formataValor(total)}</td>
  `;

  // Adiciona a nova linha no final da tabela
  tabela.appendChild(novaLinha);
  document.querySelector("#form-encomenda").reset();
});
