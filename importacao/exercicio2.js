// 2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
// Imprima o maior número par e o menor número impar.

const {gets, print} = require('./funcoes-auxiliares');

const quantidadeNumeros = gets();
let maiorValorPar = null;
let menorValorImpar = null;

for (let i = 0; i <= quantidadeNumeros; i++) {
    const valor = gets();
    if (valor % 2 == 0) {
        if (maiorValorPar === null || valor > maiorValorPar) {
            maiorValorPar = valor;
        }
    } else {
        if (menorValorImpar === null || valor <  menorValorImpar) {
            menorValorImpar = valor;
        }
    }    
}

print(`O maior valor par é: ${maiorValorPar}.`)
print(`O menor valor impar é: ${menorValorImpar}.`)