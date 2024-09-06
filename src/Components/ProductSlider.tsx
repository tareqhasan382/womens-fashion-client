import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { CalculateDiscountPrice } from "../utils/CalculateDiscountPrice";
import product1 from "../assets/catalog-product/1_102.jpg";
import product2 from "../assets/catalog-product/3_84.jpg";
import product3 from "../assets/catalog-product/5_68.jpg";
import product4 from "../assets/catalog-product/74-1282-id_1.jpg";
import product5 from "../assets/catalog-product/pmc-10-bl_1-2.jpg";
import product6 from "../assets/catalog-product/awclah-102-mr_1.jpg";
import product7 from "../assets/catalog-product/clsls427_1_1.jpg";
import product8 from "../assets/catalog-product/fe-cl-142_01_1.jpg";
import product9 from "../assets/catalog-product/fe_13_1-fe_13_2_1.jpg";
import product10 from "../assets/catalog-product/fe_14__1.jpg";
import product11 from "../assets/catalog-product/fe_15_1-fe_15_2-1-compress.jpg";
import product12 from "../assets/catalog-product/fe_19.jpg";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
interface Product {
  id: string;
  img: string;
  name: string;
  price: number;
}

const products: Product[] = [
  // Example products
  {
    id: "1",
    img: product1,
    name: "All Over Printed Short Sleeve Silk Shirt",
    price: 250,
  },
  {
    id: "2",
    img: product2,
    name: "Burgundy Scarf with Self Color Beaded Border",
    price: 250,
  },
  {
    id: "3",
    img: product3,
    name: "Red and White Weave Textured Short Dress",
    price: 250,
  },
  {
    id: "4",
    img: product4,
    name: "Grey and White Layered Abaya",
    price: 250,
  },
  {
    id: "5",
    img: product5,
    name: "Blue Strap Front Cut-Out Midi Dress",
    price: 250,
  },
  {
    id: "6",
    img: product6,
    name: "Multicolor Collar Printed Midi Dress6",
    price: 250,
  },
  {
    id: "7",
    img: product7,
    name: "Pink Scarf with Self Color Beaded Border",
    price: 250,
  },
  {
    id: "8",
    img: product8,
    name: "Multicolored Printed Top with Shorts Co-ord set",
    price: 250,
  },
  {
    id: "9",
    img: product9,
    name: "Animal Printed Side Cut Out Midi Dress",
    price: 250,
  },
  {
    id: "10",
    img: product10,
    name: "Printed Short Dress with Tie Belt",
    price: 250,
  },
  {
    id: "11",
    img: product11,
    name: "Multicolor Printed A-line Short Dress",
    price: 250,
  },
  {
    id: "12",
    img: product12,
    name: "Printed Neck Tie Tiered Short Dress",
    price: 250,
  },
  // Add more products as needed
];
interface ArrowProps {
  // className?: string;
  // style?: React.CSSProperties;
  onClick?: () => void;
}

const SampleNextArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <div className=" absolute -right-4 -top-[-120px] " onClick={onClick}>
      {/* -top-[40px] h-[40px] w-[40px]*/}
      <div className=" text-black font-bold  rounded-full grid place-items-center cursor-pointer ">
        <BsChevronRight />
      </div>
    </div>
  );
};

const SamplePrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <div className=" absolute -left-4 -top-[-120px] z-30 " onClick={onClick}>
      {/* right-[80px] -top-[40px]  w-[40px] h-[40px] */}
      <div className="  text-black font-bold  rounded-full grid place-items-center cursor-pointer ">
        <BsChevronLeft />
      </div>
    </div>
  );
};
const ProductSlider: React.FC = () => {
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
          slidesToShow: 5,
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
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="w-full h-full">
      <Slider {...settings}>
        {products.map((product) => {
          const discountPrice = CalculateDiscountPrice(product.price, 50);
          return (
            <div key={product.id} className="p-2">
              <Link to={`/details/${product.id}`}>
                <div className=" relative flex flex-col items-center justify-center mx-auto bg-white shadow-lg rounded-lg py-2 ">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="object-cover p-2 rounded-xl"
                  />
                  <h2 className=" line-clamp-2 lg:text-lg text-sm font-normal text-center mt-2">
                    {product.name}
                  </h2>
                  <div className="flex items-center justify-between space-x-2 mt-1">
                    <p className="lg:text-lg text-sm lg:font-semibold font-normal text-red-500">
                      BD {discountPrice.toFixed(2)}
                    </p>
                    <p className="line-through lg:text-lg text-sm lg:font-semibold font-normal text-gray-500">
                      BD {product.price.toFixed(2)}
                    </p>
                    <button>
                      {" "}
                      <FaRegHeart
                        size={20}
                        className=" absolute top-6 right-6 "
                      />
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProductSlider;
/*
<div className="w-full h-full">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="p-2">
            <div className="flex flex-col items-center justify-center bg-slate-200 shadow-lg rounded-lg">
              <img
                src={product?.img}
                alt={product?.name}
                className="object-cover p-2 rounded-xl "
              />
              <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
              <p className="line-through text-lg font-semibold text-gray-500">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
*/
