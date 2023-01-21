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

function inserirDados() {
    let calculo = JSON.parse(localStorage.getItem("calculo") || "[]");

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

    calculo.push({
        base: valorBase.value,
        transporte: valorTransporte.value,
        alimentacao: valorAlimentacao.value,
        receita: receitaTotal,
        automovel: descontoAutomovel.value,
        faltas: descontoFaltas.value,
        desconto: descontoTotal,
        total: total,
    });
    localStorage.setItem("calculo", JSON.stringify(calculo));
}

/* function mostrarReceitasHTML() {
    let receitaTotal = valorBase.value + valorTransporte + valorAlimentacao;

    let inputHTML = document.querySelector("valor_receita");
    inputHTML.innerHTML = `"${receitaTotal}"`;
} */
