import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

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
        <div
          className="absolute top-6 desktop:top-10 right-16 desktop:right-[126px] w-[18px] h-[18px] bg-orangeMain rounded-lg flex items-center justify-center text-white cursor-pointer"
          onClick={handleClicked}
        >
          <p className="text-xs">
            {contentCart.length > 9 ? "+9" : contentCart.length}
          </p>
        </div>
      )}

      <div
        className={`w-11/12 ${
          isClicked ? "absolute" : "hidden"
        }  rounded-md mt-10 h-[300px] overflow-y-hidden overflow-x-hidden z-10 sombritaCart bg-neutrals-white mr-auto ml-auto left-2 right-2 desktop:right-20 desktop:mr-0 desktop:w-[430px] desktop:mt-5 tablet:right-10 tablet:mr-0 tablet:w-[350px] tablet:mt-5`}
      >
        <p className="py-6 px-8 font-bold">Cart</p>
        <hr />
        {contentCart.length === 0 ? (
          <p className="flex justify-center items-center h-3/5 font-bold text-neutrals-veryGrayishBlue">
            Your cart is empty
          </p>
        ) : (
          <div>
            <div className="flex flex-col items-center overflow-y-scroll max-h-[140px]">
              {contentCart.map((product, index) => (
                <div
                  className="flex justify-between items-center mt-2 gap-5 py-1 w-[90%]"
                  key={index}
                >
                  <figure>
                    <img
                      src={product.img}
                      alt=""
                      className="max-w-[42px] rounded-md tablet:max-w-[70px] desktop:max-w-[90px]"
                    />
                  </figure>
                  <div className="flex flex-col relative right-3">
                    <p className="text-sm text-neutrals-veryGrayishBlue">
                      {product.title}
                    </p>
                    <span className="flex gap-2 items-center">
                      <p className="text-sm text-neutrals-veryGrayishBlue">
                        ${product.price}
                      </p>
                      <p className="text-sm text-neutrals-veryGrayishBlue">
                        x{product.totalProducts}
                      </p>
                      <p className="font-bold">${product.priceTotal}</p>
                    </span>
                  </div>
                  <button
                    className="w-10"
                    onClick={() => handleRemoveProductToCart(index)}
                  >
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="text-neutrals-veryGrayishBlue"
                    />
                  </button>
                </div>
              ))}
            </div>
            <button className="flex justify-center rounded-lg items-center h-12 mb-5 mt-5 bg-orangeMain w-[75%] absolute bottom-0 left-[50%] -translate-x-1/2">
              <span className="font-bold text-white">Checkout</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
