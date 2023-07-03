import React, { useState } from "react";
import { Product } from "../product/Product";

export function Collections({
  productsCollections,
  activeSection,
  setContentCart,
  contentCart,
}) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  let productsFilterForSection = [];

  switch (activeSection) {
    case "collections":
      productsFilterForSection = [...productsCollections];
      break;
    case "men":
      productsFilterForSection = productsCollections.filter(
        (product) => product.type === "men"
      );
      break;
    case "women":
      productsFilterForSection = productsCollections.filter(
        (product) => product.type === "women"
      );
      break;
  }

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    document.documentElement.scrollTop = 0;
  };

  const handleBackToCollections = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="mt-5">
      {selectedProduct ? (
        <Product
          setContentCart={setContentCart}
          product={selectedProduct}
          setShowProduct={handleBackToCollections}
          showProduct={true}
        />
      ) : (
        <div>
          <h2 className="mx-5 desktop:mx-[66px] pt-6 pb-4 font-bold desktop:text-2xl text-lg tablet:text-2xl desktop:tracking-[3px] tracking-[2px] transition-all duration-300">
            {activeSection === "collections"
              ? "Welcome To Our Collection Of Sneakers"
              : activeSection === "men"
              ? "Welcome To Men's Shoes"
              : "Welcome To Women's Shoes"}
          </h2>
          <section className="grid grid-cols-1 desktop:grid-cols-3 desktop:gap-8 desktop:mx-20 tablet:grid-cols-2 gap-8 mt-8 mx-5 place-items-center desktop:place-items-center transition-all duration-150">
            {productsFilterForSection.map((collection, index) => (
              <div
                key={index}
                className=" bg-gray-50 sombritaCart rounded-lg px-6 py-4 w-[300px] tablet:w-[300px] hover:scale-105 desktop:hover:scale-110 desktop:h-[400px] desktop:w-[400px] transition-all "
              >
                <h3 className="font-bold tracking-wider tablet:text-lg text-center">
                  {collection.title}
                </h3>
                <figure className="flex justify-center items-center">
                  <img
                    src={collection.imgMain}
                    alt={collection.title}
                    className="my-6 object-cover h-[250px] tablet:w-[300px] "
                  />
                </figure>
                <p
                  className="font-bold tracking-wider mt-3 hover:underline underline-offset-4 cursor-pointer text-center"
                  onClick={() => {
                    handleProductClick(collection);
                  }}
                >
                  Learn More and Buy Now
                </p>
              </div>
            ))}
          </section>
        </div>
      )}
    </div>
  );
}
