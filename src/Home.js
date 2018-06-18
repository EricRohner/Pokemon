import React, {Component} from 'react';
import PokeAPI from './PokeAPI'

class App extends Component {
    render() {
        return (
            <div>
                <h1>Gen 1 starter Pokemon</h1>
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

export default App;