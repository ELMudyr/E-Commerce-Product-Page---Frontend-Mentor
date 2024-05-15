import { useState } from "react";
import CloseIcon from "../assets/icon-close.svg";

interface ProductGalleryProps {
  images: string[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleThumbnailClick = (image: string) => {
    setMainImage(image);
  };

  const handleMainImageClick = () => {
    setIsFullScreen(true);
  };

  const handleCloseFullScreen = () => {
    setIsFullScreen(false);
  };

  return (
    <div className="lg:flex flex-col items-center container w-1/3 min-w-[500px] hidden ">
      <div className="mb-4 rounded-xl" onClick={handleMainImageClick}>
        <img
          src={mainImage}
          alt="Main"
          className="w-full rounded-2xl cursor-pointer"
        />
      </div>
      <div className="flex w-full justify-evenly mx-auto">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`w-24 h-24 mr-2 cursor-pointer rounded-2xl hover:opacity-80 ${
              image === mainImage
                ? "border-4 border-primary-Orange opacity-70"
                : ""
            }`}
            onClick={() => handleThumbnailClick(image)}
          />
        ))}
      </div>
      {isFullScreen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex justify-center items-center">
          <div className=" max-w-full max-h-full  ">
            <div className="flex  relative flex-col justify-center container ">
              <img
                src={mainImage}
                alt="Main"
                className="w-2/3  m-auto rounded-xl"
              />
              <img
                src={CloseIcon}
                alt="close"
                className="fixed cursor-pointer w-12 top-[2rem] right-[32%] p-4 fill-white"
                onClick={handleCloseFullScreen}
              />
              <div className="flex  justify-between w-2/4 m-auto mt-5">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className={`w-24 h-24 mr-2 cursor-pointer rounded-2xl hover:opacity-80 ${
                      image === mainImage
                        ? "border-4 border-primary-Orange opacity-70"
                        : ""
                    }`}
                    onClick={() => handleThumbnailClick(image)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
