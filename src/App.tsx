import Nav from "./components/Nav";
import CarouselPlugin from "./components/Carousel";
import Minus from "./assets/icon-minus.svg";
import Plus from "./assets/icon-plus.svg";
import Cart from "./assets/icon-cart.svg";

function App() {
  return (
    <>
      <div className="bg-white min-w-[375px] h-full w-full">
        <Nav />
        <CarouselPlugin />
        <div className="lg:flex">
          <div className="container  m-auto mt-4 space-y-4">
            <h2 className="text-primary-Orange font-[700] text-sm">
              SNEAKER COMPANY
            </h2>
            <h1 className="font-[700] text-Neutral-VeryDarkBlue text-3xl">
              Fall Limited Edition <br />
              Sneakers
            </h1>
            <p className="text-Neutral-DarkGrayishBlue font-[400]">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they'll withstand
              everything the weather can offer.
            </p>
            <div className=" m-auto justify-between flex">
              <div className="flex gap-5 items-center">
                <h1 className="font-[700] text-Neutral-VeryDarkBlue text-3xl">
                  $125.00
                </h1>
                <h1 className="bg-primary-PaleOrange text-primary-Orange font-[700] text-lg rounded-lg px-2">
                  50%
                </h1>
              </div>
              <h1 className="self-center line-through  text-Neutral-GrayishBlue font-[700]">
                $250.00
              </h1>
            </div>
            <div className=" space-y-3">
              <div className="flex justify-between m-auto container bg-Neutral-LightGrayishBlue items-center py-4 px-6 rounded-xl">
                <img className="object-none" src={Minus} alt="minus" />
                <p className="font-[700] text-Neutral-VeryDarkBlue text-lg">
                  0
                </p>
                <img className="object-none" src={Plus} alt="minus" />
              </div>
              <button className="bg-primary-Orange gap-3 text-white font-[700] justify-center py-3 flex rounded-lg m-auto w-full">
                <img className="fill-white" src={Cart} alt="" /> Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
