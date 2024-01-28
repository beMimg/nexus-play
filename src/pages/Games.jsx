import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import style from "../styles/Games.module.css";
import GameCard from "../components/GameCard";

let key = "2a3e3c54685146fe8d40f600aef2df29";

export default function Games({ setCart }) {
  const categorie = useLoaderData();
  const categorieGames = categorie.results;

  function handleAddBtn(id, name, quantity) {
    setCart((prevCart) => [
      ...prevCart,
      { id: id, quantity: quantity, name: name, price: id },
    ]);
  }

  return (
    <div className={style.gamesContainer}>
      {categorieGames.map((game) => (
        <GameCard handleAddBtn={handleAddBtn} game={game} key={game.id} />
      ))}
    </div>
  );
}

export const categorieLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch(
    ` https://api.rawg.io/api/games?genres=${id}&key=${key}`,
    {
      mode: "cors",
    }
  );

  if (!res.ok) {
    throw Error("Could not find this category");
  }

  return res.json();
};
