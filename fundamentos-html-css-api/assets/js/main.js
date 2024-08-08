const pokemonList = document.getElementById("pokemonList");
const loadMoreBt = document.getElementById("loadMoreBt");
const maxRecords = 151;
const limit = 10;
let offset = 0;

function loadPokemonsItems(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHTML = pokemons
      .map(
        (pokemon) => `
          <li class="pokemon ${pokemon.type}">
              <span class="pokemon__number">#${pokemon.number}</span>
              <span class="pokemon__name">${pokemon.name}</span>
              <div class="pokemon__detail">
                  <ol class="pokemon__types">
                      ${pokemon.types
                        .map(
                          (type) =>
                            `<li class="pokemon__type ${type}">${type}</li>`
                        )
                        .join("")}
                  </ol>
                  <img src="${pokemon.photo}" alt="${pokemon.name}">
              </div>
          </li>   
        `
      )
      .join("");
    pokemonList.innerHTML += newHTML;
  });
}

loadPokemonsItems(offset, limit);

loadMoreBt.addEventListener("click", () => {
  offset += limit;
  const qtdRecordNextPage = offset + limit;
  if (qtdRecordNextPage >= maxRecords) {
    const newLimit = maxRecords - offset;
    loadPokemonsItems(offset, newLimit);
    loadMoreBt.parentElement.removeChild(loadMoreBt); // pega o elemento pai do botão e remove o filho, que é o próprio botão
  } else {
    loadPokemonsItems(offset, limit);
  }
});
