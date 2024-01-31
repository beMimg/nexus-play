import { Link } from "react-router-dom";
import ItemShoppingCart from "../components/ItemShoppingCart";

export default function Checkout({ cart, setCart }) {
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
    <div className="md flex min-h-[750px] flex-col  gap-4 pt-20">
      <h1 className="ml-4 font-bold">Shopping Cart</h1>
      <div className="flex flex-col md:flex-row md:items-center md:justify-evenly">
        <div className="md:h-[600px] md:w-2/4 md:overflow-auto md:border-4 md:border-black">
          {cart.map((game) => (
            <ItemShoppingCart
              key={game.id}
              product={game}
              handleDelete={handleDelete}
              handleBtn={handleBtn}
            ></ItemShoppingCart>
          ))}
        </div>
        <div className="m-2 flex flex-col gap-2  rounded bg-gray-800 p-10 text-white md:p-20">
          <p>Order Summary</p>
          <div className="flex flex-row gap-2">
            <p>Subtotal: </p>
            <p className="font-bold">${subtotal}.00</p>
          </div>
          <Link
            to="/thanks"
            className=" grid w-full justify-center rounded bg-blue-800 p-4 text-white"
          >
            Pay
          </Link>
        </div>
      </div>
    </div>
  );
}
