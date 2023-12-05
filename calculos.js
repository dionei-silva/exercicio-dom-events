/* Desenvolva aqui a rotina */
//RECEITAS

let valorBase = document.querySelector("#valor_base")
let valorTransporte = document.querySelector("#valor_transporte")
let valorAlimentacao = document.querySelector("#valor_alimentacao")

//DESPESAS
let descontoAutomovel = document.querySelector("#valor_automovel")
let descontoFaltas = document.querySelector("#faltas")

function inserirDados() {
      let receitaTotal =
          parseInt(valorBase.value) +
          parseInt(valorTransporte.value) +
          parseInt(valorAlimentacao.value);
      document.querySelector("#valor_receita").value = receitaTotal;
  
      let descontoTotal =
          parseInt(descontoAutomovel.value) + parseInt(descontoFaltas.value);
      document.querySelector("#valor_descontos").value = descontoTotal;
  
      let total = receitaTotal - descontoTotal;
      document.querySelector("#valor_total").value = total;
}