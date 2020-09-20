import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Pokemon from './pages/pokemon';

const Routes = () =>{
    return (
        <BrowserRouter>
            <Route component={Pokemon} path="/" exact/>
        </BrowserRouter>
    );
}

export default Routes;