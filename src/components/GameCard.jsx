import { useState } from "react";

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
    <div className="flex flex-col  gap-4 rounded border-4 border-black bg-slate-800 p-2 pb-4 text-white shadow-2xl">
      <img
        src={game.background_image}
        alt={game.name + "image"}
        className=" h-24 w-full object-cover object-center pb-2 pt-2 lg:h-48"
      />
      <div className="flex flex-row justify-between">
        <h1 className="font-bold">{game.name}</h1>
        <p className="font-bold">${game.id}</p>
      </div>
      <div className="grid grid-cols-2 items-center">
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          className="h-12 rounded bg-slate-200 text-black"
          min={1}
        />
        {quantity > 0 ? (
          <button
            onClick={() =>
              handleAddBtn(game.id, game.name, quantity, game.background_image)
            }
            disabled={!quantity}
            className="group relative grid h-12 w-24 justify-self-end overflow-hidden border border-black bg-white text-black shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-black before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-black after:duration-500 hover:text-white hover:before:h-full hover:after:h-full active:scale-110 xl:ml-4 xl:w-28 xl:justify-self-start "
          >
            <span className="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-black before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-black after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full"></span>
            <span className="  absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white">
              Add
            </span>
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
