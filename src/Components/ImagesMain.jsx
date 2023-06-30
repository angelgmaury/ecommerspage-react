import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
export function ImagesMain({ images, imagesThumbnail }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePreviousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative desktop:top-8 transition-all desktop:mt-10 desktop:static desktop:flex flex-col desktop:items-center desktop:w-full">
      <figure className="desktop:w-full flex justify-center">
        <img
          src={images[currentIndex].image}
          alt="imageProduct"
          className="w-[100%] h-[320px] object-cover tablet:h-[400px] tablet:object-contain desktop:w-auto desktop:h-[400px] desktop:rounded-lg transition-all"
        />
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
        {imagesThumbnail.map((image, index) => {
          return (
            <div key={index}>
              <img
                src={image.image}
                alt="imageProduct"
                className="w-[85px] h-[85px] object-cover transition-all rounded-lg cursor-pointer"
                onClick={() => setCurrentIndex(index)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
