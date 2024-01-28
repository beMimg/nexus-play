import { useState } from "react";
import style from "../styles/Games.module.css";

export default function GameCard({ handleAddBtn, game }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const value =
      typeof e.target.value === "number"
        ? e.target.value
        : parseInt(e.target.value);
    setQuantity(value);
  };

  return (
    <div className={style.gameCard}>
      <div className={style.imageContainer}>
        <img src={game.background_image} alt="" />
      </div>
      <h1 className={style.title}>{game.name}</h1>
      <p>Price: {game.id}</p>
      <input type="number" value={quantity} onChange={handleQuantityChange} />
      <button
        disabled={!quantity}
        onClick={() => handleAddBtn(game.id, game.name, quantity)}
      >
        Add
      </button>
    </div>
  );
}
