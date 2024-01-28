import { Outlet, NavLink } from "react-router-dom";
import style from "../styles/RootLayout.module.css";
import Cart from "../components/Cart";

export default function RootLayout({ cart }) {
  const howManyProducts = cart.reduce((a, b) => a + b.quantity, 0);
  console.log(cart);
  return (
    <>
      <header>
        <nav className={style.headerNav}>
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
            <Cart howManyProducts={howManyProducts} cart={cart} />
          </div>
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer className={style.footer}>
        <nav className={style.footerNav}>
          <h1>NexusPlay</h1>
          <div className={style.footerNavDiv}>
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
        <section className={style.footerSection}>
          <p className={style.footerText}>
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
        <p className={style.footerP}>Copyright 2024. All Rights Reserved</p>
      </footer>
    </>
  );
}
