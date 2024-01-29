import { Outlet } from "react-router-dom";
import style from "../styles/GamesLayout.module.css";
import { NavLink, useLoaderData } from "react-router-dom";
import gamesBg from "../assets/game_wallpaper.jpg";

let key = "2a3e3c54685146fe8d40f600aef2df29";

export default function GamesLayout() {
  let gamesCategories = useLoaderData();

  gamesCategories = gamesCategories.results;

  return (
    <div>
      <img
        src={gamesBg}
        alt="various games image"
        className="flex w-full object-cover object-center md:h-[500px] "
      />
      <section className="flex flex-col">
        <nav className="grid grid-cols-3 gap-3 p-2 shadow-2xl bg-black xl:grid-cols-4 2xl:grid-cols-5 xl:gap-5 border-white border-b-4">
          {gamesCategories.map((categorie) => (
            <NavLink
              className="bg-black text-white flex items-center justify-center text-center h-8 text-sm xl:text-base"
              to={categorie.id.toString()}
              key={categorie.id}
            >
              <h2>{categorie.name}</h2>
            </NavLink>
          ))}
        </nav>
        <div className=" bg-gray-100 p-4">
          <Outlet></Outlet>
        </div>
      </section>
    </div>
  );
}

export const categoriesLoader = async () => {
  const res = await fetch("https://api.rawg.io/api/genres?key=" + key, {
    mode: "cors",
  });

  if (!res.ok) {
    throw Error("Could not fetch games");
  }

  return res.json();
};
