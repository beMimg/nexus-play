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
    <div className=" bg-slate-800 text-white  shadow-2xl pb-4 rounded p-2 flex gap-4 flex-col border-black border-4">
      <img
        src={game.background_image}
        alt={game.name + "image"}
        className=" w-full object-cover object-center h-24 pt-2 pb-2 lg:h-48"
      />
      <div className="flex flex-row justify-between">
        <h1 className="font-bold">{game.name}</h1>
        <p className="font-bold">${game.id}</p>
      </div>
      <div className="flex gap-2">
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          className="text-black rounded bg-slate-200"
        />
        <button
          className=" text-black p-2 rounded w-2/3 bg-slate-200"
          disabled={!quantity}
          onClick={() =>
            handleAddBtn(game.id, game.name, quantity, game.background_image)
          }
        >
          Add
        </button>
      </div>
    </div>
  );
}
