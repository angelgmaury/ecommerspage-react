import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPlus,
  faMinus,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import { contentCart } from "../../data/productsCart";

export function AddProductToCart({ count, setCount, handleAddProductToCart }) {
  const handleCountPlus = () => {
    setCount(count + 1);
  };

  const handleCountMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="mx-5 desktop:flex desktop:gap-5 desktop:items-center">
      <div className="flex justify-around mt-5 mb-5 bg-neutrals-lightGrayishBlue h-14 items-center rounded-lg desktop:w-[25%] desktop:mt-0 desktop:mb-0 desktop:relative desktop:top-0.5">
        <button onClick={handleCountMinus}>
          <FontAwesomeIcon icon={faMinus} className="text-orangeMain text-lg" />
        </button>
        <p>
          <span className="font-bold">{count}</span>
        </p>
        <button onClick={handleCountPlus}>
          <FontAwesomeIcon icon={faPlus} className="text-orangeMain text-lg" />
        </button>
      </div>

      <button
        className="flex gap-4 justify-center rounded-lg items-center h-14 bg-orangeMain mb-10 w-full desktop:w-[40%] desktop:mb-0 hover:bg-orange-400"
        onClick={() => {
          if (count === 1 || count > 0) {
            handleAddProductToCart(contentCart);
          }
          return;
        }}
      >
        <FontAwesomeIcon
          icon={faCartShopping}
          className="text-white text-lg relative top-0.5"
        />
        <span className="font-bold text-white">Add To Cart</span>
      </button>
    </div>
  );
}
