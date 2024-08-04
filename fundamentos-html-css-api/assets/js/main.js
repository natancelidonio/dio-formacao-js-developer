 
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon">
        <span class="pokemon__number">#001</span>
        <span class="pokemon__name">${pokemon.name}</span>
        <div class="pokemon__detail">
            <ol class="pokemon__types">
                <li class="pokemon__type">Grass</li>
                <li class="pokemon__type">Poison</li>
            </ol>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
        </div>
    </li>   
    `
}

const pokemonList = document.getElementById('pokemonList');

fetch(url)
    .then((response) => response.json())     // transforma o response em uma promise do body convertido em json
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => {

        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            pokemonList.innerHTML += convertPokemonToLi(pokemon);
        }

    })     // recebe o body convertido em json e printa ele no console
    .catch((error) => console.log(error))
 
