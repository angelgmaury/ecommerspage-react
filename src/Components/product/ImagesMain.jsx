import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

export function ImagesMain({ product, setCurrentIndex, currentIndex }) {
  const imagesVersions = product.imagesVersions.map((elements) => elements);

  const imagesVersionsLength = imagesVersions.length;

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesVersionsLength);
  };

  const handlePreviousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imagesVersionsLength - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative desktop:top-8 transition-all desktop:mt-10 desktop:static desktop:flex flex-col desktop:items-center desktop:w-full">
      <figure className="desktop:w-full flex justify-center">
        {
          <img
            src={imagesVersions[currentIndex]}
            alt={`imageProduct ${currentIndex + 1}`}
            className="w-[100%] max-h-[310px] object-cover tablet:h-[400px] tablet:object-contain desktop:w-auto desktop:h-[400px] desktop:rounded-lg transition-all desktop:cursor-pointer"
          />
        }
      </figure>

      <div className="flex absolute justify-between w-full desktop:hidden px-4 top-[45%]">
        <button onClick={handlePreviousImage} className="buttonsImages">
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button onClick={handleNextImage} className="buttonsImages">
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>

      <div className="desktop:flex hidden gap-4 mt-8">
        {Object.keys(imagesVersions).map((version, index) => {
          const imageUrl = imagesVersions[version];
          return (
            <div key={index}>
              <img
                src={imageUrl}
                alt="imageProduct"
                className="w-[120px] h-[125px] object-contain transition-all rounded-lg cursor-pointer"
                onClick={() => {
                  setCurrentIndex(index);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
