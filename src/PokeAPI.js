const PokeAPI =  {
    pokemon: [
        {number: 1, name: "Bulbasaur", type: "Grass", image: "https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png"},
        {number: 2, name: "Ivysaur", type: "Grass", image: "https://cdn.bulbagarden.net/upload/thumb/7/73/002Ivysaur.png/250px-002Ivysaur.png"},
        {number: 3, name: "Venusaur", type: "Grass", image: "https://cdn.bulbagarden.net/upload/thumb/a/ae/003Venusaur.png/250px-003Venusaur.png"},
        {number: 4, name: "Charmander", type: "Fire", image: "https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png"},
        {number: 5, name: "Charmeleon", type: "Fire", image: "https://cdn.bulbagarden.net/upload/thumb/4/4a/005Charmeleon.png/250px-005Charmeleon.png"},
        {number: 6, name: "Charizard", type: "Fire", image: "https://cdn.bulbagarden.net/upload/thumb/7/7e/006Charizard.png/250px-006Charizard.png"},
        {number: 7, name: "Squirtle", type: "Water", image: "https://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png"},
        {number: 8, name: "Wartortle", type: "Water", image: "https://cdn.bulbagarden.net/upload/thumb/0/0c/008Wartortle.png/250px-008Wartortle.png"},
        {number: 9, name: "Blastoise", type: "Water", image: "https://cdn.bulbagarden.net/upload/thumb/0/02/009Blastoise.png/250px-009Blastoise.png"},
        {number: 25, name: "Pikachu", type: "Electric", image: "https://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png"},
    ],
    all: function() {return this.pokemon},
    get: function(id) {
        const isPkmn = p => p.number === id
        return this.pokemon.find(isPkmn)
    }
}

export default PokeAPI
