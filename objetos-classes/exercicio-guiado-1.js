class Carros {
    marca;
    cor;
    consumoPorKm;
    
    constructor (marca, cor, consumoPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.consumoPorKm = consumoPorKm;
    }

    calcularGastoPorViagem (quilometros, precoCombustivel) {
        let litrosConsumidos = quilometros * this.consumoPorKm;
        let custoViagem = litrosConsumidos * precoCombustivel;
        return `O consumo de combustível foi de ${litrosConsumidos} litros, e o custo de combustível ficou em R$${custoViagem.toFixed(2)}.`;
    }

}

const fusca = new Carros('Volks', 'azul', 0.1);

console.log(fusca.calcularGastoPorViagem(100, 5));
