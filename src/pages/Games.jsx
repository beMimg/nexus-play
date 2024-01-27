import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import style from "../styles/Games.module.css";

let key = "2a3e3c54685146fe8d40f600aef2df29";

export default function Games() {
  const { id } = useParams();
  const categorie = useLoaderData();
  const categorieGames = categorie.results;

  console.log(categorieGames);
  return (
    <div className={style.gamesContainer}>
      {categorieGames.map((game) => (
        <div className={style.gameCard} key={game.id}>
          <div className={style.imageContainer}>
            <img src={game.background_image} alt="" />
          </div>
          <h1 className={style.title}>{game.name}</h1>
        </div>
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
