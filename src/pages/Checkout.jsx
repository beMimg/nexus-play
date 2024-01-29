import style from "../styles/Checkout.module.css";
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
    <div className={style.shoppingCart}>
      <h1>Shopping Cart</h1>
      <div className={style.mainContent}>
        <div className={style.leftContainer}>
          {cart.map((game) => (
            <div className={style.gameContainer}>
              <img
                src={game.image}
                className={style.image}
                alt={game.name + "image"}
              />
              <div className={style.gameInfo}>
                <h2>{game.name}</h2>
                <p>Price: ${game.price}</p>
                <div className={style.quantityContainer}>
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
        <div className={style.rightContainer}>
          <div className={style.summaryContainer}>
            <h2>Order Summary</h2>
            <p>Subtotal: ${subtotal}.00</p>
            <button>Pay</button>
          </div>
        </div>
      </div>
    </div>
  );
}
