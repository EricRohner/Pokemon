import React, {Component} from 'react'

class AddPkmn extends Component {

    state = {
        number: "",
        name: "",
        type: "",
        imguri: ""
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = {...this.state}

        fetch('http://localHost:4000', {
            method: 'post',
            body: data
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <a href={'/'}>Home</a>

                <div>
                    <label for="pokedexNumber">Pokedex Number</label>
                    <input type="text" id="password" name="pokedexNumber"
                           onChange={e => this.setState({number: e.target.value})}/>
                </div>

                <div>
                    <label for="pokemonName">Name</label>
                    <input type="text" id="pokemonName" name="pokemonName"
                           onChange={e => this.setState({name: e.target.value})}/>
                </div>

                <div>
                    <label for="type">Type</label>
                    <input type="text" id="type" name="type"
                           onChange={e => this.setState({type: e.target.value})}/>
                </div>

                <div>
                    <label for="imageUri">Image Uri</label>
                    <input type="text" id="imageUri" name="imageUri"
                           onChange={e => this.setState({imguri: e.target.value})}/>
                </div>

                <button type="submit" className="button-primary">Submit Pokemon!</button>

            </form>
        )
    }
}

export default AddPkmn