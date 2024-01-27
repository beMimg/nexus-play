import { Outlet } from "react-router-dom";
import style from "../styles/GamesLayout.module.css";
import { NavLink, useLoaderData } from "react-router-dom";

let key = "2a3e3c54685146fe8d40f600aef2df29";

export default function GamesLayout() {
  let gamesCategories = useLoaderData();

  gamesCategories = gamesCategories.results;

  return (
    <div>
      <div className={style.bg}></div>
      <section className={style.mainContent}>
        <nav className={style.leftSide}>
          {gamesCategories.map((categorie) => (
            <NavLink
              className={style.categorieName}
              to={categorie.id.toString()}
              key={categorie.id}
            >
              <h2>{categorie.name}</h2>
            </NavLink>
          ))}
        </nav>
        <div className={style.rightSide}>
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
