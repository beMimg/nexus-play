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
    <div className="">
      <h1>Shopping Cart</h1>
      <div className="">
        <div className="">
          {cart.map((game) => (
            <div className="">
              <img src={game.image} className="" alt={game.name + "image"} />
              <div className="">
                <h2>{game.name}</h2>
                <p>Price: ${game.price}</p>
                <div className="">
                  <p>Quantity: {game.quantity}</p>
                  <button onClick={() => handleBtn(game.id, "+")}>+</button>
                  <button
                    disabled={game.quantity === 1}
                    onClick={() => handleBtn(game.id, "-")}
                  >
                    -
                  </button>
                </div>
              </div>
              <button onClick={() => handleDelete(game.id)}>x</button>
            </div>
          ))}
        </div>
        <div className="">
          <div className="">
            <h2>Order Summary</h2>
            <p>Subtotal: ${subtotal}.00</p>
            <button>Pay</button>
          </div>
        </div>
      </div>
    </div>
  );
}
