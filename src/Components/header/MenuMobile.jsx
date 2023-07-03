import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export function MenuMobile({
  isActiveMenu,
  setIsActiveMenu,
  isMobileView,
  setActiveSection,
}) {
  return (
    <div>
      <button onClick={() => setIsActiveMenu(!isActiveMenu)}>
        <FontAwesomeIcon icon={faBars} className="relative top-1 text-xl" />
      </button>
      <div>
        {isMobileView ? (
          <div
            className={`${
              isActiveMenu
                ? "fixed bg-modal z-30 w-[100%] h-[100%] left-0 top-0 transition-all"
                : "hidden"
            }`}
          >
            <div className={`bg-neutrals-white absolute px-4 w-[60%] h-[100%]`}>
              <button onClick={() => setIsActiveMenu(!isActiveMenu)}>
                <FontAwesomeIcon
                  icon={faXmark}
                  className="mb-10 mt-10 text-xl"
                />
              </button>
              <ul>
                <li
                  className="cursor-pointer hover:text-black font-bold mb-5"
                  onClick={() => {
                    setActiveSection("collections");
                    setIsActiveMenu(!isActiveMenu);
                  }}
                >
                  Collections
                </li>
                <li
                  className="cursor-pointer hover:text-black font-bold mb-5"
                  onClick={() => {
                    setActiveSection("men");
                    setIsActiveMenu(!isActiveMenu);
                  }}
                >
                  Men
                </li>
                <li
                  className="cursor-pointer hover:text-black font-bold mb-5"
                  onClick={() => {
                    setActiveSection("women");
                    setIsActiveMenu(!isActiveMenu);
                  }}
                >
                  Women
                </li>
                <li className="cursor-pointer hover:text-black font-bold mb-5">
                  About
                </li>
                <li className="cursor-pointer hover:text-black font-bold mb-5">
                  Contact
                </li>
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
