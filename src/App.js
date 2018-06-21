import React from 'react'
import Home from './Home'
import PokeBio from './PokeBio'
import AddPkmn from './AddPkmn'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/AddPkmn' component={AddPkmn}/>
            <Route path='/PokeBio/:number' component={PokeBio}/>
        </Switch>
    </BrowserRouter>
)
