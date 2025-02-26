const pokeApi = {}
const pokemonDetails = {}


pokeApi.getDetails = (pokemon_info) => {
    return fetch(pokemon_info[0].url)
        .then((res) => res.json())
}

pokeApi.getPokemon = (pokemon_name='bulbasaur') => {
    return fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1330")
        .then((res) => res.json())
        .then((resJson) => resJson.results)
        .then((resultsPokemons) => resultsPokemons.filter((res) => res.name === pokemon_name.toLowerCase()))
        .then((pokemonDetail) => pokemonDetail)
}


function convertToObject(pokemon_detail) {
    let pokemonObject = {}

    pokemonObject.name = pokemon_detail.name
    pokemonObject.view = pokemon_detail.sprites.other.dream_world.front_default 
    pokemonObject.types = pokemon_detail.types
    pokemonObject.id = pokemon_detail.id
    pokemonObject.height = pokemon_detail.height
    pokemonObject.weight = pokemon_detail.weight
    pokemonObject.stats = pokemon_detail.stats

    return pokemonObject
}

function newType(pokemon) {
    return `<li class="type -${pokemon.type.name}">${pokemon.type.name}</li>`
}

function newStat(pokemon) {
    return `
        <li id="info">
            <p>${pokemon.stat.name}</p>
            <p>${pokemon.base_stat}</p>
        </li>
    `
}

function newChildrenLi(title, value) {
    return `
        <li id="info">
            <p>${title}</p>
            <p>${value}</p>
        </li>
    `
}