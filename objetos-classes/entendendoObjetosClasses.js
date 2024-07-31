class Pessoa {
    nome;
    idade;
    profissao;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome}. Tenho ${this.idade} anos de idade e trabalho como ${this.profissao}.`);
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}.`)
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}.`)
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`)
    }
}

const natan = new Pessoa('Natan Celidonio Fernandes', 31);
const gaspar = new Pessoa('Gaspar Harari', 69);

compararPessoas(natan, gaspar);

// ##########################################################################################
// natan.profissao = 'dev senior'
// gaspar.profissao = 'historiador'

// console.log(natan);
// console.log(gaspar);

// natan.descrever();
// gaspar.descrever();



// ##########################################################################################
// const natan = {
//     nome: 'Natan Celidonio Fernandes',
//     idade: 31,
//     altura: 1.65,
//     profissao: 'software developer',

//     descrever: function() {
//         console.log(`Meu nome é ${thi.nome}. Tenho ${this.idade} anos de idade e trabalho como ${this.profissao}.`);
//     },
// };

