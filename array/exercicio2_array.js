// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado.

const listaNum = [1, 2, 3, 4, 5, 6, 7, 8];
const listaPar = [];

for (let i=0; i<listaNum.length; i++) {
    if (listaNum[i]%2 == 0) {
        listaPar.push(listaNum[i]);
    }
}

console.log(listaPar);