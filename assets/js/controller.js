let pokemon_name = document.querySelector("#name_pokemon")
let photo_preview = document.querySelector("#view_photo")


let types_parent = document.querySelector('.types')
let details_stats = document.querySelector('.detail_pokemon')

let index_pokemon_text = document.querySelector('#index_pokemon')

let pokemon_name_input = document.querySelector("#id_pokemon")


document.querySelector("#search_btn").addEventListener('click', (e) => {
    pokeApi.getPokemon(pokemon_name_input.value)
        .then((pokemon) => {
            pokeApi.getDetails(pokemon)
                .then((res) => {
                    types_parent.innerHTML = ''
                    details_stats.innerHTML = ''

                    // convert a json in an object with useful values
                    const pokemon = convertToObject(res)


                    const myLiType = pokemon.types.map(newType).join('')
                    const myLiStat = pokemon.stats.map(newStat).join('')
                    const myLiWeight = newChildrenLi('weight', pokemon.weight)
                    const myLiHeight = newChildrenLi('height', pokemon.height)
                    
                    types_parent.innerHTML += myLiType
                    details_stats.innerHTML += myLiStat
                    details_stats.innerHTML += myLiHeight
                    details_stats.innerHTML += myLiWeight


                    pokemon_name.textContent = pokemon.name 
                    photo_preview.src = pokemon.view
                    index_pokemon_text.textContent = `#${pokemon.id.toString().padStart(4, "0")}`
                })
        })
        .catch((err) => console.log(err))
    
    e.preventDefault()
})


document.addEventListener('DOMContentLoaded', () => {
    pokeApi.getPokemon(pokemon_name_input.value)
        .then((pokemon) => {
            pokeApi.getDetails(pokemon)
                .then((res) => {
                    types_parent.innerHTML = ''
                    details_stats.innerHTML = ''

                    // convert a json in an object with useful values
                    const pokemon = convertToObject(res)


                    const myLiType = pokemon.types.map(newType).join('')
                    const myLiStat = pokemon.stats.map(newStat).join('')
                    const myLiWeight = newChildrenLi('weight', pokemon.weight)
                    const myLiHeight = newChildrenLi('height', pokemon.height)
                    
                    types_parent.innerHTML += myLiType
                    details_stats.innerHTML += myLiStat
                    details_stats.innerHTML += myLiHeight
                    details_stats.innerHTML += myLiWeight


                    pokemon_name.textContent = pokemon.name 
                    photo_preview.src = pokemon.view
                    index_pokemon_text.textContent = `#${pokemon.id.toString().padStart(4, "0")}`

                })
        })
        .catch((err) => console.log(err))
})