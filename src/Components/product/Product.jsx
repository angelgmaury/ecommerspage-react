import React, { useState } from "react";
import { ImagesMain } from "./ImagesMain";
import { PricePruduct } from "./PricePruduct";
import { ProductInfo } from "./ProductInfo";
import { AddProductToCart } from "./AddProductToCart";

export function Product({
  setContentCart,
  product,
  setShowProduct,
  showProduct,
}) {
  const [count, setCount] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAddProductToCart = () => {
    const precioOriginal = parseFloat(product.price);
    const descuento = parseFloat(product.descuento);
    const precioConDescuento = precioOriginal * (1 - descuento / 100);
    const total = precioConDescuento * count;

    const productToAdd = {
      img: product.imagesVersions[currentIndex],
      title: product.title,
      id: 1,
      price: precioConDescuento.toFixed(2),
      totalProducts: count,
      priceTotal: total.toFixed(2),
    };

    // Obtener el carrito actual desde el almacenamiento local
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Agregar el nuevo producto a la lista existente del carrito
    const updatedCart = [...existingCart, productToAdd];

    // Almacenar el carrito actualizado en el almacenamiento local
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Establecer el contenido del carrito en el estado
    setContentCart(updatedCart);
  };

  return (
    <div className="desktop:grid grid-cols-2 desktop:w-full desktop:relative desktop:top-8">
      <button
        className="bg-orangeMain mx-5 font-bold text-white px-2 py-1 rounded-md desktop:absolute desktop:top-8 desktop:left-8 tracking-[4px] mb-2 desktop:mx-8"
        onClick={() => setShowProduct(true)}
      >
        TO BACK
      </button>

      <ImagesMain
        imagesMain={product.imagesVersions}
        product={product}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />

      <section className="desktop:flex desktop:flex-col desktop:justify-center mb-20 desktop:mb-0">
        <div className="desktop:relative desktop:mt-24">
          <ProductInfo product={product} />
          <PricePruduct product={product} />
          <AddProductToCart
            count={count}
            setCount={setCount}
            handleAddProductToCart={handleAddProductToCart}
            product={product}
          />
        </div>
      </section>
    </div>
  );
}
