const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

let container = document.querySelector('main')

fetch(TRAINERS_URL)
.then(res => res.json())
.then(json => {
    json.forEach(trainer => {
      let trainerX = document.createElement('div')
      trainerX.dataset.id = trainer.id

      trainerX.innerHTML = `<p>${trainer.name}</p>
      <button trainer-id="${trainer.id}">Add Pokemon</button>
      <ul>${trainer.pokemons.map( pokemon => { return `<li>${pokemon.nickname} (${pokemon.species}) </li>`
        }).join('')}
      </ul>`

      container.append(trainerX)

    })
  })
