import React, { useState, useEffect } from 'react';
import Poke from '../../assets/logo-poke.png';
import axios from 'axios';

import {NavBar, NavWrapper, NavImg, PokeTotal} from './styles';

function Navbar() {
    const [pokemon, setPokemon] = useState({});
  
    useEffect(() => {
      async function loadData() {
        await axios
          .get(`https://pokeapi.co/api/v2/pokemon/`)
          .then((res) => setPokemon(res.data));
      }
  
      loadData();
    }, []);

  return (
    <NavBar>
        <NavWrapper>
             <NavImg>
                 <img src={Poke} alt="Pokemon" />
            </NavImg>
            <PokeTotal to="/">
          <p>
            Total de <span>{pokemon.count}</span> Pokemons!
          </p>
        </PokeTotal>
      </NavWrapper>
    </NavBar>
  );
}

export default Navbar;
