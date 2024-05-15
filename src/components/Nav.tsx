import { useState, useRef, useEffect } from 'react';
import Logo from '../assets/logo.svg';
import Hamburger from '../assets/icon-menu.svg';
import CartIcon from '../assets/icon-cart.svg';
import Avatar from '../assets/image-avatar.png';
import Close from '../assets/icon-close.svg';
import Cart from './Cart';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  // Function to close the menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Event listener to close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Function to toggle the cart
  const toggleCart = () => {
    setIsCartOpen((prevOpen) => !prevOpen);
  };

  return (
    <>
      {isCartOpen && <Cart onClose={function (): void {
        throw new Error('Function not implemented.');
      } } quantity={0} cartItems={[]} />}
      <div className={`fixed top-0 left-0 w-full h-full bg-black z-20 ${isOpen ? 'block' : 'hidden'} opacity-70`} />

      <div className="bg-white flex container flex-row justify-between m-auto w-full py-4">
        <div className="flex gap-4">
          <img onClick={toggleMenu} className="object-none w-fit cursor-pointer lg:hidden" src={Hamburger} alt="Menu" />
          <img className="object-none w-fit" src={Logo} alt="Logo" />
          <ul className="font-[400] hidden lg:flex text-Neutral-DarkGrayishBlue text-lg m-auto ml-[5rem] gap-5 ">
            <li>
              <a className="cursor-pointer" href="#">
                Collection
              </a>
            </li>
            <li>
              <a className="cursor-pointer" href="#">
                Men
              </a>
            </li>
            <li>
              <a className="cursor-pointer" href="#">
                Women
              </a>
            </li>
            <li>
              <a className="cursor-pointer" href="#">
                About
              </a>
            </li>
            <li>
              <a className="cursor-pointer" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex gap-4">
          <img onClick={toggleCart} className="object-none w-fit h-8 cursor-pointer" src={CartIcon} alt="Cart" />
          <img className="object-contain w-fit h-8" src={Avatar} alt="Avatar" />
        </div>
      </div>

      {/* Side menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 container left-0 h-full bg-white w-2/3 z-30 transition-transform ${
          isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
        }`}
      >
        <div className="flex pt-[2rem]">
          <img onClick={closeMenu} className="cursor-pointer" src={Close} alt="close" />
        </div>
        <ul className="font-semibold text-Neutral-VeryDarkBlue text-xl space-y-5 pt-[4rem]">
          <li>Collection</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
