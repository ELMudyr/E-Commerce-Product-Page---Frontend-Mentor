import Close from "../assets/icon-close.svg";
import { useState } from "react";

function SideMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  return (
    <div className="h-screen absolute bg-white top-0 w-2/3 container">
      <img className="mt-[2rem]" src={Close} alt="close" />
      <ul className="font-[700] text-Neutral-VeryDarkBlue text-xl space-y-5 mt-[5rem]">
        <li>Collection</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default SideMenu;
