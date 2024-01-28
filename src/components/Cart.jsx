import { IoCart } from "react-icons/io5";
import style from "../styles/Cart.module.css";
import { useState } from "react";
import ShoppingCart from "./ShoppingCart";

export default function Cart({ howManyProducts }) {
  const [open, setOpen] = useState(false);

  console.log(open);
  return (
    <>
      <div className={style.cartContainer} onClick={() => setOpen(!open)}>
        <IoCart className={style.cartIcon} />
        <div className={style.cartLengthContainer}>
          <p className={style.cartLength}>{howManyProducts}</p>
        </div>
      </div>
      {open && <ShoppingCart setOpen={setOpen} />}
    </>
  );
}
