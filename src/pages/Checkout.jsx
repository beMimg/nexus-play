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
    <div className="flex flex-col gap-4 pt-20  min-h-[750px] md">
      <h1 className="font-bold ml-4">Shopping Cart</h1>
      <div className="flex flex-col md:flex-row md:justify-evenly md:items-center">
        <div className="md:h-[600px] md:w-2/4 md:overflow-auto md:border-black md:border-4">
          {cart.map((game) => (
            <ItemShoppingCart
              key={game.id}
              product={game}
              handleDelete={handleDelete}
              handleBtn={handleBtn}
            ></ItemShoppingCart>
          ))}
        </div>
        <div className="p-10 bg-gray-800 m-2 text-white  md:p-20 flex gap-2 flex-col rounded">
          <p>Order Summary</p>
          <div className="flex flex-row gap-2">
            <p>Subtotal: </p>
            <p className="font-bold">${subtotal}.00</p>
          </div>
          <button className=" w-full grid justify-center p-4 bg-blue-800 text-white rounded">
            Pay
          </button>
        </div>
      </div>
    </div>
  );
}
