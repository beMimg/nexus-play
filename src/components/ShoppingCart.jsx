import { Link } from "react-router-dom";
import style from "../styles/Cart.module.css";

export default function ShoppingCart({ setOpen, cart, setCart }) {
  const subtotal = cart.reduce((a, b) => a + b.price, 0);

  console.log(cart);

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

  return (
    <div className={style.shoppingCart}>
      <header className={style.header}>
        <h1 className="flex">Shopping Cart</h1>
        <button onClick={() => setOpen(false)}>x</button>
      </header>
      <main>
        {cart.length === 0 ? (
          <p>Your shopping cart is empty</p>
        ) : (
          cart.map((product) => (
            <div className={style.gameContainer} key={product.id}>
              <img className={style.image} src={product.image} alt="" />
              <div>
                <p>{product.name}</p>
                <div>
                  <p>Quantity: {product.quantity}</p>
                  <button onClick={() => handleBtn(product.id, "+")}>+</button>
                  <button
                    disabled={product.quantity === 1}
                    onClick={() => handleBtn(product.id, "-")}
                  >
                    -
                  </button>
                </div>
              </div>
              <p>{product.price}$</p>
            </div>
          ))
        )}
      </main>
      <footer className={style.footer}>
        <div className={style.subTotal}>
          <h2>Subtotal</h2>
          <p>${subtotal}</p>
        </div>
        <p>Shipping and taxes calculate at checkout. </p>
        <button onClick={() => setOpen(false)}>
          <Link to="checkout">Checkout</Link>
        </button>

        <p>Or Continue Shopping</p>
      </footer>
    </div>
  );
}
