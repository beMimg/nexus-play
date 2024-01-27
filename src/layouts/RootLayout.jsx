import { Outlet, NavLink } from "react-router-dom";
import style from "../styles/RootLayout.module.css";
import gitHubSvg from "../assets/github.svg";

export default function RootLayout() {
  return (
    <>
      <header>
        <nav>
          <h1>NexusPlay</h1>
          <div className={style.links}>
            <NavLink className={style.link} to="/">
              Home
            </NavLink>
            <NavLink className={style.link} to="games">
              Games
            </NavLink>
            <NavLink className={style.link} to="popular">
              Popular
            </NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <nav>
          <h1>NexusPlay</h1>
          <div>
            <NavLink className={style.link} to="/">
              Home
            </NavLink>
            <NavLink className={style.link} to="games">
              Games
            </NavLink>
            <NavLink className={style.link} to="popular">
              Popular
            </NavLink>
          </div>
        </nav>
        <section>
          <p>
            Unleash Your Gameverse with us, where every click opens a portal to
            unparalleled excitement. Navigate uncharted realms, discover hidden
            gems, and redefine your gaming odyssey. Join NexusPlay and ascend to
            a cosmos of gaming brilliance.
          </p>
          <a
            className={style.link}
            href="https://github.com/beMimg"
            target="_blank"
          >
            G{" "}
          </a>
        </section>
        <p>Copyright 2024. All Rights Reserved</p>
      </footer>
    </>
  );
}
