import style from "../styles/Cart.module.css";

export default function ShoppingCart({ setOpen, cart }) {
  console.log(cart);
  return (
    <div className={style.cartModal}>
      <div className={style.shoppingCart}>
        <header className={style.header}>
          <h1>Shopping Cart</h1>
          <button onClick={() => setOpen(false)}>x</button>
        </header>
        <main>
          {cart.map((product) => (
            <div key={product.id}>
              <img src={product.background_image} alt="" />
              <div>
                <p>{product.name}</p>
              </div>
              <p>{product.id}$</p>
            </div>
          ))}
        </main>
        <footer className={style.footer}>
          <div className={style.subTotal}>
            <h2>Subtotal</h2>
            <p>$242.00</p>
          </div>
          <p>Shipping and taxes calculate at checkout. </p>
          <button>Checkout</button>
          <p>Or Continue Shopping</p>
        </footer>
      </div>
    </div>
  );
}
