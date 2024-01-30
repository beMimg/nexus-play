export default function ItemShoppingCart({ product, handleBtn, handleDelete }) {
  return (
    <div className="flex flex-row m-2 p-2 gap-2 bg-gray-400 shadow-2xl">
      <img
        className=" h-16  w-16 object-cover object-center"
        src={product.image}
        alt=""
      />
      <div className="flex flex-col w-full gap-2">
        <div className="flex flex-row justify-between w-full ">
          <p className="font-bold">{product.name}</p>
          <button
            onClick={() => handleDelete(product.id)}
            className="font-bold"
          >
            x
          </button>
        </div>
        <div className="flex flex-row justify-between">
          <p>{product.price}$</p>
          <div className="flex flex-col gap-2">
            <p>Quantity: {product.quantity}</p>
            <div className="flex items-end justify-end gap-4 text-2xl font-bold">
              <button
                className=" bg-white text-center h-8 w-8 flex items-center justify-center"
                onClick={() => handleBtn(product.id, "+")}
              >
                +
              </button>
              <button
                className=" bg-white text-center h-8 w-8 flex items-center justify-center disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-700"
                disabled={product.quantity === 1}
                onClick={() => handleBtn(product.id, "-")}
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
