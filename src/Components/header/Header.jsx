import { NavBar } from "./NavBar";
import { useState } from "react";

export function Header({
  contentCart,
  setContentCart,
  setActiveSection,
  activeSection,
  product,
}) {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);

  const handleRemoveProductToCart = (productId) => {
    const updatedCart = contentCart.filter((_, index) => index !== productId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setContentCart(updatedCart);
  };

  return (
    <header>
      <NavBar
        isActiveMenu={isActiveMenu}
        setIsActiveMenu={setIsActiveMenu}
        contentCart={contentCart}
        handleRemoveProductToCart={handleRemoveProductToCart}
        isMobileView={isMobileView}
        setIsMobileView={setIsMobileView}
        setIsModalActive={setIsModalActive}
        isModalActive={isModalActive}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        product={product}
        setContentCart={setContentCart}
      />
    </header>
  );
}
