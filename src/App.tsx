import { useState } from "react";
import Nav from "./components/Nav";
import CarouselPlugin from "./components/Carousel";
import ProductGalleryProps from "./components/ProductGallery";
import Minus from "./assets/icon-minus.svg";
import Plus from "./assets/icon-plus.svg";
import CartIcon from "./assets/icon-cart.svg";
import CartComponent from "./components/Cart";
import image1 from "./assets/image-product-1.jpg";
import image2 from "./assets/image-product-2.jpg";
import image3 from "./assets/image-product-3.jpg";
import image4 from "./assets/image-product-4.jpg";

const images = [image1, image2, image3, image4];

function App() {
  const [quantity, setQuantity] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<{ id: number; quantity: number }[]>([]);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    const itemExists = cartItems.find((item) => item.id === 1);
    if (itemExists) {
      const updatedItems = cartItems.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedItems);
    } else {
      setCartItems((prevItems) => [...prevItems, { id: 1, quantity: 1 }]);
    }
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      <div className="bg-white min-w-[375px] h-full w-full">
        <Nav />
        <CarouselPlugin />
        <div className="lg:flex md:container lg:mt-[5rem]">
          <ProductGalleryProps images={images} />
          <div className="items-center m-auto">
            <div className="container m-auto mt-4 space-y-4 max-w-[550px] ">
              <h2 className="text-primary-Orange font-[700] text-sm">
                SNEAKER COMPANY
              </h2>
              <h1 className="font-[700] text-Neutral-VeryDarkBlue text-3xl lg:text-5xl lg:pb-6">
                Fall Limited Edition <br />
                Sneakers
              </h1>
              <p className="text-Neutral-DarkGrayishBlue font-[400]">
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they'll
                withstand everything the weather can offer.
              </p>
              <div className="m-auto justify-between flex lg:flex-col lg:pb-6">
                <div className="flex gap-5 items-center">
                  <h1 className="font-[700] text-Neutral-VeryDarkBlue text-3xl ">
                    $125.00
                  </h1>
                  <h1 className="bg-primary-PaleOrange text-primary-Orange font-[700] text-lg rounded-lg px-2">
                    50%
                  </h1>
                </div>
                <h1 className="self-center line-through lg:self-start  text-Neutral-GrayishBlue font-[700]">
                  $250.00
                </h1>
              </div>
              <div className=" space-y-3 lg:space-y-0 gap-3 lg:flex ">
                <div className="flex justify-between m-auto container lg:max-w-[200px] bg-Neutral-LightGrayishBlue items-center py-4 px-6 rounded-xl">
                  <img
                    className="object-none cursor-pointer"
                    src={Minus}
                    alt="minus"
                    onClick={handleDecrement}
                  />
                  <p className="font-[700] text-Neutral-VeryDarkBlue text-lg">
                    {quantity}
                  </p>
                  <img
                    className="object-none cursor-pointer"
                    src={Plus}
                    alt="Plus"
                    onClick={handleIncrement}
                  />
                </div>
                <button
                  className="bg-primary-Orange gap-3 shadow-[0_10px_40px_rgba(255,_125,_26,_0.5)] hover:opacity-70 text-white font-[700] justify-center items-center py-3 flex rounded-lg m-auto w-full"
                  onClick={handleAddToCart}
                >
                  <img className="fill-white" src={CartIcon} alt="" /> Add to
                  cart
                </button>
              </div>
            </div>
          </div>
        </div>
        {isCartOpen && (
          <CartComponent onClose={handleCloseCart} quantity={quantity} cartItems={cartItems} />
        )}
      </div>
    </>
  );
}

export default App;
