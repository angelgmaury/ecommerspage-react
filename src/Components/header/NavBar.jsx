import React, { useEffect } from "react";
import { ShoppingCart } from "./ShoppingCart";
import { UserPhoto } from "./UserPhoto";
import { MenuMobile } from "./MenuMobile";

export function NavBar({
  isActiveMenu,
  setIsActiveMenu,
  contentCart,
  handleRemoveProductToCart,
  isMobileView,
  setIsMobileView,
  setIsModalActive,
  isModalActive,
  setActiveSection,
  product,
  setContentCart,
}) {
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1280);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`flex items-center justify-between px-5 h-20 w-full bg-neutrals-white`}
    >
      {isMobileView ? (
        <div className="flex justify-between w-full">
          <section className="flex items-center gap-4">
            <MenuMobile
              isActiveMenu={isActiveMenu}
              setIsActiveMenu={setIsActiveMenu}
              isModalActive={isModalActive}
              setIsModalActive={setIsModalActive}
              isMobileView={isMobileView}
              setIsMobileView={setIsMobileView}
              setActiveSection={setActiveSection}
            />
            <h1 className="font-bold text-3xl">sneakers</h1>
          </section>
          <section className="flex items-center gap-6">
            <ShoppingCart
              contentCart={contentCart}
              handleRemoveProductToCart={handleRemoveProductToCart}
              product={product}
            />
            <UserPhoto />
          </section>
        </div>
      ) : (
        <div className="w-full transition-all px-12 pt-8">
          <div className="flex py-6 items-center justify-between w-full transition-all">
            <section className="flex items-center gap-10">
              <h1 className="font-bold text-3xl desktop:text-4xl transition-all">
                sneakers
              </h1>

              <ul className="flex gap-8 relative top-0.5 transition-all font-bold text-lg text-neutrals-veryGrayishBlue">
                <li
                  className="cursor-pointer hover:text-black"
                  onClick={() => setActiveSection("collections")}
                >
                  Collections
                </li>
                <li
                  className="cursor-pointer hover:text-black"
                  onClick={() => setActiveSection("men")}
                >
                  Men
                </li>
                <li
                  className="cursor-pointer hover:text-black"
                  onClick={() => setActiveSection("women")}
                >
                  Women
                </li>
                <li className="cursor-pointer hover:text-black">About</li>
                <li className="cursor-pointer hover:text-black">Contact</li>
              </ul>
            </section>

            <section className="flex items-center gap-6">
              <ShoppingCart
                contentCart={contentCart}
                handleRemoveProductToCart={handleRemoveProductToCart}
                setContentCart={setContentCart}
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
