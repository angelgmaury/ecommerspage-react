import React from "react";
import Avatar from "./img/perritoFormal.jpeg";

export function UserPhoto() {
  return (
    <img
      src={Avatar}
      alt="user photo"
      width={28}
      className="relative top-0.5 cursor-pointer desktop:w-10 border border-solid hover:border-2 hover:border-orangeMain rounded-full"
    />
  );
}
