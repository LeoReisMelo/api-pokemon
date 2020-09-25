import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import ListPokemon from './pages/home';

const Routes = () =>{
    return (
        <BrowserRouter>
            <Route component={ListPokemon} path="/" exact/>
        </BrowserRouter>
    );
}

export default Routes;