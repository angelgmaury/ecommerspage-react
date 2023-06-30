import React from "react";
import { HeaderMenuMobile } from "./HeaderMenuMobile";
import { ShoppingCart } from "./ShoppingCart";
import { UserPhoto } from "./UserPhoto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export function Header({
  isActiveMenu,
  setIsActiveMenu,
  contentCart,
  handleRemoveProductToCart,
  isMobileView,
}) {
  return (
    <nav
      className={`flex items-center justify-between px-5 h-20 w-full bg-neutrals-white`}
    >
      {isMobileView ? (
        <div className="flex justify-between w-full">
          <section className="flex items-center gap-4">
            <button onClick={() => setIsActiveMenu(!isActiveMenu)}>
              <FontAwesomeIcon
                icon={faBars}
                className="relative top-1 text-xl"
              />
            </button>
            <h1 className="font-bold text-3xl">sneakers</h1>
          </section>
          <section className="flex items-center gap-6">
            <ShoppingCart
              contentCart={contentCart}
              handleRemoveProductToCart={handleRemoveProductToCart}
            />
            <UserPhoto />
          </section>
        </div>
      ) : (
        <div className="w-full transition-all px-12">
          <div className="flex py-5 items-center justify-between w-full transition-all">
            <section className="flex items-center gap-10">
              <h1 className="font-bold text-3xl desktop:text-4xl transition-all">
                sneakers
              </h1>

              <ul className="flex gap-8 relative top-0.5 transition-all font-bold text-lg text-neutrals-veryGrayishBlue">
                <li className="cursor-pointer hover:text-black">Collections</li>
                <li className="cursor-pointer hover:text-black">Men</li>
                <li className="cursor-pointer hover:text-black">Women</li>
                <li className="cursor-pointer hover:text-black">About</li>
                <li className="cursor-pointer hover:text-black">Contact</li>
              </ul>
            </section>

            <section className="flex items-center gap-6">
              <ShoppingCart
                contentCart={contentCart}
                handleRemoveProductToCart={handleRemoveProductToCart}
              />
              <UserPhoto />
            </section>
          </div>
          <hr className="" />
        </div>
      )}
    </nav>
  );
}
