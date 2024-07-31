/* 3) Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
Para realizar o calculo, receba o valor bruto do salário e o adicional dos benefícios.
O salário a ser transferido é calculado da seguinte maneira:

valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios

Para calcular o percentual de imposto segue as alíquitas:

De R$0.00 a R$1100.00 = 5.00%
De R$1100.01 a R$2500.00 = 10.00%
Maior que R$2500.00 = 15.00%
*/

const {gets, print} = require('./funcoes-auxiliares-ex3');

const valorSalarioBruto = gets();
const valorAdicionalBeneficio = gets();


function calcularPorcentagem(valor, percentual) {
    return valor * (percentual / 100);
}

function pegarAliquota(salario) {
    if (salario > 0 && salario <= 1100) {
        return 5;
    } else if (salario >= 1100.01 && salario <= 2500) {
        return 10;
    } else if (salario > 2500) {
        return 15;
    } else {
        print('Valor de salário inválido.')
    }
}

function calcularValorATransferir(valorSalario, valorImposto, valorBeneficio) {
    return (valorSalario - valorImposto) + valorBeneficio;
}

const imposto = calcularPorcentagem(valorSalarioBruto, pegarAliquota(valorSalarioBruto));

let valorSalarioLiquido = calcularValorATransferir(valorSalarioBruto, imposto, valorAdicionalBeneficio);

console.log(`O valor que deve ser transferido para o funcionário é: R$${valorSalarioLiquido.toFixed(2)}`);
