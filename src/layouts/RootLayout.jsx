import { Outlet, NavLink, Link } from "react-router-dom";
import Cart from "../components/Cart";
import { FaGithub } from "react-icons/fa";

export default function RootLayout({ cart, setCart }) {
  const howManyProducts = cart.reduce((a, b) => a + b.quantity, 0);

  const activeLink = "bg-white text-black p-2 rounded-xl";
  const normalLink = "p-2 rounded-xl";

  return (
    <>
      <header className="fixed  z-30 w-full bg-black p-3 ">
        <nav className="flex flex-row items-center justify-evenly text-white ">
          <h1 className="text-2xl">NexusPlay</h1>
          <div className="flex items-center justify-center gap-4 text-xl active:text-red-200">
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to="games"
            >
              Games
            </NavLink>
            <Cart
              howManyProducts={howManyProducts}
              cart={cart}
              setCart={setCart}
            />
          </div>
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer className="relative flex flex-col bg-black p-4 text-white lg:gap-5">
        <nav className="flex items-center justify-evenly p-2">
          <h1 className="text-2xl">NexusPlay</h1>
          <div className="flex items-center justify-center gap-4">
            <Link to="/">Home</Link>
            <Link to="games">Games</Link>
          </div>
        </nav>
        <section className="flex items-center justify-evenly p-2 ">
          <p className="lg:w-2/4">
            Unleash Your Gameverse with us, where every click opens a portal to
            unparalleled excitement. Navigate uncharted realms, discover hidden
            gems, and redefine your gaming odyssey. Join NexusPlay and ascend to
            a cosmos of gaming brilliance.
          </p>
          <a
            href="https://github.com/beMimg"
            target="_blank"
            className="absolute right-2 top-2 text-xl"
          >
            <FaGithub />
          </a>
        </section>
        <p className="flex self-center pt-4">
          Copyright 2024. All Rights Reserved
        </p>
      </footer>
    </>
  );
}
