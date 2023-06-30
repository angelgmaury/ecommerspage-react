import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export function ShoppingCart({ handleRemoveProductToCart }) {
  const [isClicked, setIsClicked] = useState(false);
  const handleClicked = () => {
    setIsClicked(!isClicked);
  };

  const contentCart = JSON.parse(localStorage.getItem("cart")) || [];

  return (
    <div>
      <button onClick={handleClicked}>
        <FontAwesomeIcon
          icon={faShoppingCart}
          className="relative top-1 text-xl cursor-pointer desktop:text-2xl"
        />
      </button>
      {contentCart.length === 0 ? null : (
        <div className="absolute top-6 right-16 desktop:right-32 w-4 h-4 bg-orangeMain rounded-lg flex items-center justify-center text-white">
          <p className="text-xs">1</p>
        </div>
      )}

      <div
        className={`w-11/12 ${
          isClicked ? "absolute" : "hidden"
        }  rounded-md mt-10 h-[250px] overflow-y-auto overflow-x-hidden z-10 sombritaCart bg-neutrals-white mr-auto ml-auto left-2 right-2 desktop:right-20 desktop:mr-0 desktop:w-[350px] desktop:mt-5 tablet:right-10 tablet:mr-0 tablet:w-[350px] tablet:mt-5`}
      >
        <p className="py-6 px-8 font-bold">Cart</p>
        <hr />
        {contentCart.length === 0 ? (
          <p className="flex justify-center items-center h-3/5 font-bold text-neutrals-veryGrayishBlue">
            Your cart is empty
          </p>
        ) : (
          <div className="flex flex-col items-center">
            <div className="flex justify-around items-center mt-2 gap-5 py-2 px-4 w-[90%]">
              <figure>
                <img
                  src={contentCart.img}
                  alt=""
                  className="max-w-[40px] rounded-md"
                />
              </figure>
              <div className="flex flex-col">
                <p className="text-sm text-neutrals-veryGrayishBlue">
                  {contentCart.title}
                </p>

                <span className="flex gap-2 items-center">
                  <p className="text-sm text-neutrals-veryGrayishBlue">
                    ${contentCart.price}.00
                  </p>
                  <p className="text-sm text-neutrals-veryGrayishBlue">
                    x{contentCart.totalProducts}
                  </p>
                  <p className="font-bold">${contentCart.priceTotal}.00</p>
                </span>
              </div>
              <button className="w-10" onClick={handleRemoveProductToCart}>
                <FontAwesomeIcon
                  icon={faTrash}
                  className="text-neutrals-veryGrayishBlue"
                />
              </button>
            </div>

            <button className="flex justify-center rounded-lg items-center h-12 mb-5 mt-4 bg-orangeMain mx-4 w-[75%]">
              <span className="font-bold text-white">Checkout</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
