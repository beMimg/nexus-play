import { Outlet, NavLink, Link } from "react-router-dom";
import Cart from "../components/Cart";
import { FaGithub } from "react-icons/fa";

export default function RootLayout({ cart, setCart }) {
  const howManyProducts = cart.reduce((a, b) => a + b.quantity, 0);

  return (
    <>
      <header className="bg-black  p-3 fixed w-full z-30 ">
        <nav className="text-white flex flex-row justify-evenly items-center ">
          <h1 className="text-2xl">NexusPlay</h1>
          <div className="flex gap-2 items-center justify-center text-xl">
            <NavLink to="/">Home</NavLink>
            <NavLink to="games">Games</NavLink>
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
      <footer className="flex flex-col bg-black text-white p-4 relative lg:gap-5">
        <nav className="flex justify-evenly items-center p-2">
          <h1 className="text-2xl">NexusPlay</h1>
          <div className="flex gap-4 items-center justify-center">
            <Link to="/">Home</Link>
            <Link to="games">Games</Link>
          </div>
        </nav>
        <section className="flex justify-evenly items-center p-2 ">
          <p className="lg:w-2/4">
            Unleash Your Gameverse with us, where every click opens a portal to
            unparalleled excitement. Navigate uncharted realms, discover hidden
            gems, and redefine your gaming odyssey. Join NexusPlay and ascend to
            a cosmos of gaming brilliance.
          </p>
          <a
            href="https://github.com/beMimg"
            target="_blank"
            className="absolute top-2 right-2 text-xl"
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
