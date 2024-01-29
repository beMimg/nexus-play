import style from "../styles/Cart.module.css";

export default function ItemShoppingCart({ product, handleBtn, handleDelete }) {
  return (
    <div className={style.gameContainer}>
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
      <button onClick={() => handleDelete(product.id)}>x</button>
    </div>
  );
}
