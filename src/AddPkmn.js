import React, {Component} from 'react'

class AddPkmn extends Component {
    render() {
        return (
            <form>
                <a href={'/'}>Home</a>
                <div>
                    <label htmlFor="pokedexNumber">Pokedex Number</label>
                    <input type="text" id="password" name="pokedexNumber"/>
                </div>
                <div>
                    <label htmlFor="pokemonName">Name</label>
                    <input type="text" id="pokemonName" name="pokemonName"/>
                </div>
                <div>
                    <label htmlFor="type">Type</label>
                    <input type="text" id="type" name="type"/>
                </div>
                <div>
                    <label htmlFor="imageUrl">Image Url</label>
                    <input type="text" id="imageUrl" name="imageUrl"/>
                </div>
                <button type="submit" className="button-primary">Submit Pokemon!</button>
            </form>
        )

    }
}


export default AddPkmn