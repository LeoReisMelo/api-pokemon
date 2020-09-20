import React from "react";

import { Name, Container, Types } from "./PokemonListItem.module.css";

function PokemonListItem({ name, image, typeOne, typeTwo }) {
  return (
    <div className={Container}>
      <h3 className={Name}>{name}</h3>
      <img src={image} alt={name} />
    </div>
  );
}

export default PokemonListItem;
