import React from 'react'
import Home from './Home'
import PokeBio from './PokeBio'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/PokeBio/:number' component={PokeBio}/>
        </Switch>
    </BrowserRouter>
)
