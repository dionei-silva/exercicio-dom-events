//RECEITAS
let valorBase = document.querySelector("#valor_base");
let valorTransporte = document.querySelector("#valor_transporte");
let valorAlimentacao = document.querySelector("#valor_alimentacao");

/* let receitaTotal = document.querySelector("#valor_receita"); */
// DESPESAS
let descontoAutomovel = document.querySelector("#valor_automovel");
let descontoFaltas = document.querySelector("#faltas");

/* let descontosTotais = descontoAutomovel + descontoFaltas; */

/* let total = receitaTotal - descontosTotais; */
let calculo = JSON.parse(localStorage.getItem("calculo") || "[]");

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

    calculo = [
        valorBase.value,
        valorTransporte.value,
        valorAlimentacao.value,
        descontoAutomovel.value,
        descontoFaltas.value,
    ];
    localStorage.setItem("calculo", JSON.stringify(calculo));
}

function carregarDados() {
    valorBase.value = calculo[0];
    valorTransporte.value = calculo[1];
    valorAlimentacao.value = calculo[2];
    descontoAutomovel.value = calculo[3];
    descontoFaltas.value = calculo[4];
    inserirDados();
}
setTimeout(() => {
    carregarDados();
}, 1000);
