import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [navToggle, setnavToggle] = useState(false);
  const listItems =
    "opacity-60 hover:opacity-80 text-sm text-white cursor-pointer hover:decoration-2 hover:underline hover:underline-offset-[10px] hover:decoration-yellow-100";

  const handleToggleNav = () => {
    setnavToggle(!navToggle);
  };

  return (
    <div
      className="w-full flex bg-mainBg
     flex-row items-center justify-between"
    >
      <h1 className="font-bold text-lg text-white">NGO</h1>
      <ul
        className={`${navToggle ? "absolute px-8 text-center flex left-0 right-0 top-20 md:top-0 flex-col gap-8 items-center" : "hidden"} ${"md:flex md:flex-row md:relative gap-8 items-center"}`}
      >
        <li className={listItems}>About Us</li>
        <li className={listItems}>Explore NGOs</li>
        <li className={listItems}>Are you a Voulenteer</li>
        <li className={listItems}>Contact</li>
        <li className="px-3 py-2 w-full md:w-fit cursor-pointer rounded-md opacity-70 text-mainBg bg-yellow-200 hover:text-yellow-200 border-2 border-yellow-200 hover:bg-mainBg text-sm font-bold">
          Donate
        </li>
      </ul>
      <FontAwesomeIcon
        icon={navToggle ? faXmark : faBars}
        color="white"
        size="lg"
        onClick={handleToggleNav}
        className="flex md:hidden cursor-pointer"
      />
    </div>
  );
};

export default Navbar;
