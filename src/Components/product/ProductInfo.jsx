import React from "react";

export function ProductInfo({ product }) {
  return (
    <div className="mt-4 px-5 desktop:relative desktop:bottom-20 desktop:w-3/4">
      <p className="text-orangeMain font-bold tracking-wider text-xs desktop:text-sm">
        SNEAKER COMPANY
      </p>
      <h2 className="mb-4 font-bold text-2xl mt-4 desktop:text-3xl">
        {product.title}
      </h2>
      <span className="mt-2 text-gray-500 desktop:relative desktop:top-4">
        {product.description}
      </span>
    </div>
  );
}
