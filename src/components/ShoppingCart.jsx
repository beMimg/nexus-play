import { Link } from "react-router-dom";
import ItemShoppingCart from "./ItemShoppingCart";

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

  function handleDelete(id) {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((game) => game.id !== id);
      return updatedCart;
    });
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
            <ItemShoppingCart
              key={product.id}
              product={product}
              handleBtn={handleBtn}
              handleDelete={handleDelete}
            />
          ))
        )}
      </main>
      <footer className={style.footer}>
        <div className={style.subTotal}>
          <h2>Subtotal</h2>
          <p>${subtotal}</p>
        </div>
        <p>Shipping and taxes calculate at checkout. </p>
        {cart.length > 0 && (
          <button onClick={() => setOpen(false)}>
            <Link to="checkout">Checkout</Link>
          </button>
        )}

        <p>Or Continue Shopping</p>
      </footer>
    </div>
  );
}
