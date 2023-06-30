import { useState, useEffect } from "react";
import { Header } from "./Components/Header";
import { HeaderMenuMobile } from "./Components/HeaderMenuMobile";
import { ImagesMain } from "./Components/ImagesMain";

import { images } from "./Data/images";

import { ProductInfo } from "./Components/ProductInfo";

import { PricePruduct } from "./Components/PricePruduct";

import { AddProductToCart } from "./Components/AddProductToCart";

import { imagesThumbnail } from "./Data/imagesThumbnail";

function App() {
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const [isModalActive, setIsModalActive] = useState(false);

  const [count, setCount] = useState(0);

  const storedCart = localStorage.getItem("cart");
  const initialCart = storedCart ? JSON.parse(storedCart) : [];

  const [contentCart, setContentCart] = useState(initialCart);

  const handleAddProductToCart = () => {
    const productToAdd = {
      img: imagesThumbnail[0].image,
      title: "Fall Limited Edition Sneakers",
      id: 1,
      price: 125.0,
      totalProducts: count,
      priceTotal: count * 125.0,
    };

    localStorage.setItem("cart", JSON.stringify(productToAdd));

    setContentCart(productToAdd);

    console.log("agregando");
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setContentCart(storedCart);
  }, []);

  const handleRemoveProductToCart = () => {
    localStorage.removeItem("cart");
    setContentCart([]);
  };

  const [isMobileView, setIsMobileView] = useState(false);

  return (
    <main className={`w-full h-screen`}>
      <header>
        <Header
          isActiveMenu={isActiveMenu}
          setIsActiveMenu={setIsActiveMenu}
          contentCart={contentCart}
          handleRemoveProductToCart={handleRemoveProductToCart}
          isMobileView={isMobileView}
          setIsMobileView={setIsMobileView}
        />
        <HeaderMenuMobile
          isActiveMenu={isActiveMenu}
          setIsActiveMenu={setIsActiveMenu}
          setIsModalActive={setIsModalActive}
          isMobileView={isMobileView}
          setIsMobileView={setIsMobileView}
        />
      </header>
      <div className="desktop:grid grid-cols-2 desktop:w-full">
        <section>
          <ImagesMain images={images} imagesThumbnail={imagesThumbnail} />
        </section>
        <section className="desktop:flex desktop:flex-col desktop:justify-center">
          <ProductInfo />
          <PricePruduct />
          <AddProductToCart
            count={count}
            setCount={setCount}
            handleAddProductToCart={handleAddProductToCart}
          />
        </section>
      </div>
    </main>
  );
}

export default App;
