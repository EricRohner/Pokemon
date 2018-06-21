import React, {Component} from 'react'
import PokeAPI from './PokeAPI'

class PokeBio extends Component {
    render() {
        const pokemon = PokeAPI.get(
            parseInt(this.props.match.params.number, 10)
        )
        if (!pokemon) {
            return <div>"That's not a Gen 1 starter Pokemon "</div>
        }
        return (
            <div>
                <img src={pokemon.image} alt={pokemon.name}/>
                <h1>(#{pokemon.number}) {pokemon.name}</h1>
                <h2>type: {pokemon.type}</h2>
                <a href='/'>Back</a>
            </div>
        )

    }
}


export default PokeBio