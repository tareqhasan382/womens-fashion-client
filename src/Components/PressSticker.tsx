import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image1 from "../assets/press-sticker/press-01.webp";
import image2 from "../assets/press-sticker/press-02.webp";
import image3 from "../assets/press-sticker/press-03.webp";
import image4 from "../assets/press-sticker/press-04.webp";
import image5 from "../assets/press-sticker/press-05.webp";
import image6 from "../assets/press-sticker/press-06.webp";
import image7 from "../assets/press-sticker/press-07.webp";
import image8 from "../assets/press-sticker/press-08.webp";
import image9 from "../assets/press-sticker/press-09.webp";
import image10 from "../assets/press-sticker/press-10.webp";
import image11 from "../assets/press-sticker/press-11.webp";
import image12 from "../assets/press-sticker/press-12.webp";
interface Product {
  id: number;
  image: string;
}

const products: Product[] = [
  // Example products
  {
    id: 1,
    image: image1,
  },
  {
    id: 2,
    image: image2,
  },
  {
    id: 3,
    image: image3,
  },
  {
    id: 4,
    image: image4,
  },
  {
    id: 5,
    image: image5,
  },
  {
    id: 6,
    image: image6,
  },
  {
    id: 7,
    image: image7,
  },
  {
    id: 8,
    image: image8,
  },
  {
    id: 9,
    image: image9,
  },
  {
    id: 10,
    image: image10,
  },
  {
    id: 11,
    image: image11,
  },
  {
    id: 12,
    image: image12,
  },
];
const PressSticker = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7, // Default for large screens
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1025, // lg: size
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 769, // md: size
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 641, // sm: size
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="w-full h-full">
      <Slider {...settings}>
        {products.map((product) => {
          return (
            <div key={product.id} className="p-2">
              <div className="flex flex-col items-center justify-center mx-auto bg-white shadow-lg rounded-lg">
                <img
                  src={product?.image}
                  alt="press-sticker"
                  className="object-cover h-[80px] p-2 rounded-xl"
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default PressSticker;
