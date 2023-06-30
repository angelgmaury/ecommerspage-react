import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export function HeaderMenuMobile({
  isActiveMenu,
  setIsActiveMenu,
  setIsModalActive,
  isMobileView,
  setIsMobileView,
}) {
  const closeModal = () => {
    setIsActiveMenu(false);
    setIsModalActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1280); // Definir el ancho límite para el cambio a vista móvil
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Verificar el tamaño de la ventana al cargar el componente

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {isMobileView ? (
        <div
          className={`${
            isActiveMenu
              ? "fixed bg-modal z-30 w-[100%] h-[100%] left-0 top-0"
              : "hidden"
          }`}
          onClick={closeModal}
        >
          <div className={`w-[60%] h-[100%] bg-neutrals-white absolute px-4`}>
            <button onClick={() => setIsActiveMenu(!isActiveMenu)}>
              <FontAwesomeIcon icon={faXmark} className="mb-10 mt-10 text-xl" />
            </button>
            <ul>
              <li className="font-bold mb-6 cursor-pointer">Collections</li>
              <li className="font-bold mb-6 cursor-pointer">Men</li>
              <li className="font-bold mb-6 cursor-pointer">Women</li>
              <li className="font-bold mb-6 cursor-pointer">About</li>
              <li className="font-bold mb-6 cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
}
