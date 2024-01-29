import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import style from "../styles/Games.module.css";
import GameCard from "../components/GameCard";

let key = "2a3e3c54685146fe8d40f600aef2df29";

export default function Games({ setCart }) {
  const categorie = useLoaderData();
  const categorieGames = categorie.results;

  function handleAddBtn(id, name, quantity, image) {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((game) => {
        if (game.id === id) {
          return {
            ...game,
            quantity: game.quantity + 1,
            price: game.id * (game.quantity + 1),
          };
        }
        return game;
      });

      const itemExists = updatedCart.some((game) => game.id === id);
      if (!itemExists) {
        updatedCart.push({
          id,
          name,
          quantity,
          price: id * quantity,
          image: image,
        });
      }
      return updatedCart;
    });
  }

  return (
    <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
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
