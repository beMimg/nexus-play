import { Link } from "react-router-dom";
import ItemShoppingCart from "./ItemShoppingCart";

export default function ShoppingCart({ setOpen, cart, setCart }) {
  const subtotal = cart.reduce((a, b) => a + b.price, 0);

  function handleBtn(id, condition) {
    if (condition === "+") {
      setCart((prevCart) => {
        const updatedCart = prevCart.map((game) => {
          if (game.id === id) {
            return {
              ...game,
              quantity: game.quantity + 1,
              price: game.id * (game.quantity + 1),
            };
          }
          return game;
        });
        return updatedCart;
      });
    }
    if (condition === "-") {
      setCart((prevCart) => {
        const updatedCart = prevCart.map((game) => {
          if (game.id === id) {
            return {
              ...game,
              quantity: game.quantity - 1,
              price: game.id * (game.quantity - 1),
            };
          }
          return game;
        });
        return updatedCart;
      });
    }
  }

  function handleDelete(id) {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((game) => game.id !== id);
      return updatedCart;
    });
  }

  return (
    <div className=" absolute bg-white text-black top-0 left-0 right-0 h-screen z-40 overflow-auto md:top-[60px] md:left-auto md:z-0 md:h-[600px] md:w-96 md:rounded-l-xl">
      <header className="flex flex-row justify-between  p-4">
        <h1 className="flex font-bold">Shopping Cart</h1>
        <button onClick={() => setOpen(false)} className="font-bold">
          x
        </button>
      </header>
      <main>
        {cart.length === 0 ? (
          <p>Your shopping cart is empty</p>
        ) : (
          cart.map((product) => (
            <ItemShoppingCart
              key={product.id}
              product={product}
              handleBtn={handleBtn}
              handleDelete={handleDelete}
            />
          ))
        )}
      </main>
      <footer className="p-2">
        <div className="flex flex-row gap-4 items-center">
          <h2>Subtotal:</h2>
          <p className="font-bold">${subtotal}</p>
        </div>
        <p className="text-sm">Shipping and taxes calculate at checkout. </p>
        {cart.length > 0 && (
          <Link
            className="grid justify-center p-4 bg-blue-800 text-white m-2"
            onClick={() => setOpen(false)}
            to="checkout"
          >
            Checkout
          </Link>
        )}
        <div className="flex gap-2">
          <p>Or</p>
          <button onClick={() => setOpen(false)} className=" text-blue-700">
            Continue Shopping
          </button>
        </div>
      </footer>
    </div>
  );
}
