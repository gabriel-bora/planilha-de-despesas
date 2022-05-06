/* Desenvolva aqui a rotina */

let botao = document.getElementById('btn_calcular');
let resetar = document.getElementById('btn_resetar');

let retornoValores = JSON.parse(window.localStorage.getItem('valores'));

let valor_base = document.getElementById('valor_base');
let valor_transporte = document.getElementById('valor_transporte');
let valor_alimentacao = document.getElementById('valor_alimentacao');
let valor_receita = document.getElementById('valor_receita');
let valor_automovel = document.getElementById('valor_automovel');
let valor_faltas = document.getElementById('faltas');
let valor_descontos = document.getElementById('valor_descontos');
let valor_total = document.getElementById('valor_total');

resetar.addEventListener('click', function(){
    window.localStorage.removeItem('valores');
    window.location.reload();
})

botao.addEventListener('click', function(){
    let base = Number(valor_base.value);
    let transporte = Number(valor_transporte.value);
    let alimentacao = Number(valor_alimentacao.value);
    let receita = 0;
    let automovel = Number(valor_automovel.value);
    let faltas = Number(valor_faltas.value);
    let descontos = 0;
    let total = 0;
    
    if(retornoValores){
        base += retornoValores.valor_base;
        transporte += retornoValores.valor_transporte;
        alimentacao += retornoValores.valor_alimentacao;
        receita = base + transporte + alimentacao;
        automovel += retornoValores.valor_automovel;
        faltas += retornoValores.valor_faltas;
        descontos = automovel + faltas;
        total = receita - descontos;
    }else{
        receita = base + transporte + alimentacao;
        valor_receita.value = receita;

        descontos = automovel + faltas;
        valor_descontos.value = descontos;

        total = receita - descontos;
        valor_total.value = total;
    }
    let valores = {
        valor_base:base,
        valor_transporte:transporte,
        valor_alimentacao:alimentacao,
        valor_receita:receita,
        valor_automovel:automovel,
        valor_faltas:faltas,
        valor_descontos:descontos,
        valor_total:total
    }
    
    window.localStorage.setItem('valores', JSON.stringify(valores));

    window.location.reload();
})

if(retornoValores){
    valor_base.value = retornoValores.valor_base;
    valor_transporte.value = retornoValores.valor_transporte;
    valor_alimentacao.value = retornoValores.valor_alimentacao;
    valor_receita.value = retornoValores.valor_receita;
    valor_automovel.value = retornoValores.valor_automovel;
    valor_faltas.value = retornoValores.valor_faltas;
    valor_descontos.value = retornoValores.valor_descontos;
    valor_total.value = retornoValores.valor_total;
}