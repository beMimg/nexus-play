import { Outlet, NavLink } from "react-router-dom";
import style from "../styles/RootLayout.module.css";
import { IoCart } from "react-icons/io5";

export default function RootLayout({ cart }) {
  const howManyProducts = cart.reduce((a, b) => a + b.quantity, 0);

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
            <NavLink className={style.link}>
              <div className={style.cartContainer}>
                <IoCart className={style.cartIcon} />
                <div className={style.cartLengthContainer}>
                  <p className={style.cartLength}>{howManyProducts}</p>
                </div>
              </div>
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
