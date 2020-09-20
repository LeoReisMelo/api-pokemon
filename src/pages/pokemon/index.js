import React, { useState, useEffect } from "react";
import "../../global.css";
import "./styles.css";
import logoPoke from "../../assets/logo-poke.png";
import api from "../../services/api";

import PokemonItem from "../../components/pokemonListItem";

export default function ListPokemon() {
  const remove = "https://pokeapi.co/api/v2/pokemon/";

  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [pagesTotal, setPagesTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  async function loadPokemons() {
    if (loading) {
      return;
    }

    if (total > 0 && pokemons.length === total) {
      return;
    }

    setLoading(true);
    const response = await api.get(`pokemon/?limit=10&offset=${page * 10}`);

    const resposta = response.data.results.map((item) => {
      const id = item.url.replace(remove, "").replace("/", "");
      item.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
      item.id = id;

      return item;
    });

    setPokemons([...resposta]);

    setTotal(response.data.count);
    setTotalPagesToAlter(response.data.count);

    setLoading(false);
  }

  function setTotalPagesToAlter(total) {
    let calc = 0;
    if (total > 0) {
      calc = Math.ceil(total / 10);
    }
    setPagesTotal(calc);
  }

  function setNextPage() {
    if (page >= pagesTotal) return;
    setPage(page + 1);
  }

  function setPreviusPage() {
    if (page <= 1) return;
    setPage(page - 1);
  }

  useEffect(() => {
    loadPokemons();
  }, [page, pokemons]);

  return (
    <div className="poke-container">
      <header>
        <img className="logo-poke" src={logoPoke} alt="Logotipo pokemon" />
        <h1>Bem-vindo a sua Pokedex!</h1>
      </header>
      <section className="section-poke">
        {pokemons.map((pokemon) => (
          <PokemonItem
            key={pokemon.id}
            image={pokemon.image}
            name={pokemon.name}
          />
        ))}
      </section>
      <div className="buttons-page">
        <button className="button back" onClick={setPreviusPage}>
          {" "}
          VOLTAR{" "}
        </button>
        <button className="button next" onClick={setNextPage}>
          {" "}
          PRÓXIMO{" "}
        </button>
        <div className="pagination">{`Página ${page} de ${pagesTotal}`}</div>
      </div>
    </div>
  );
}
