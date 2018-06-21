import React, {Component} from 'react';
import PokeAPI from './PokeAPI'

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Pokemon</h1>
                <a href={'/AddPkmn'}>Add Pokemon</a>
                <ul>
                    {
                        PokeAPI.all().map(p => (
                            <li key={p.number}>
                                <a href={`/PokeBio/${p.number}`}>{p.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default Home;