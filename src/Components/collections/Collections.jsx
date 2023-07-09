import React, { useState } from "react";
import { Product } from "../product/Product";

export function Collections({
  productsCollections,
  activeSection,
  setContentCart,
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
          <h2 className="mx-5 desktop:mx-[66px] pt-6 pb-4 font-light desktop:text-2xl text-lg tablet:text-2xl desktop:tracking-[3px] tracking-[2px] transition-all duration-300 text-center">
            {activeSection === "collections"
              ? "Welcome To Our Collection Of Sneakers"
              : activeSection === "men"
              ? "Welcome To Men's Shoes"
              : "Welcome To Women's Shoes"}
          </h2>
          <section className="grid grid-cols-1 desktop:grid-cols-4 desktop:gap-8 desktop:mx-20 tablet:grid-cols-2 gap-8 mt-8 mx-5 place-items-center desktop:place-items-center transition-all duration-150 mb-5">
            {productsFilterForSection.map((collection, index) => (
              <div
                key={index}
                className=" bg-gray-50 sombritaCart rounded-lg px-6 py-3 w-[250px] tablet:w-[280px] hover:scale-95 desktop:hover:scale-95 desktop:h-[300px] desktop:w-[310px] transition-all duration-300 cursor-pointer"
                onClick={() => {
                  handleProductClick(collection);
                }}
              >
                <figure className="flex justify-center items-center">
                  <img
                    src={collection.imgMain}
                    alt={collection.title}
                    className="my-6 object-cover desktop:h-[130px] tablet:w-[300px]"
                  />
                </figure>

                <div className="mt-3 flex flex-col gap-2">
                  <p className="font-normal tracking-[3px] tablet:text-lg desktop:text-base text-center">
                    {collection.title}
                  </p>
                  <p className="font-normal tracking-wider tablet:text-lg text-center text-orangeMain">
                    ${collection.price}
                  </p>
                </div>
              </div>
            ))}
          </section>
        </div>
      )}
    </div>
  );
}
