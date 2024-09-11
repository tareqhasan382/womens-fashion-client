import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { CalculateDiscountPrice } from "../utils/CalculateDiscountPrice";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useProductsQuery } from "../Redux/products/productApi";
import { useState } from "react";
type QueryParams = {
  limit: number;
  page: number;
  filterField?: string;
};
interface ArrowProps {
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
  const [limit] = useState<number>(40);
  const [page] = useState<number>(1);
  const [filterField] = useState<string>();

  const query: QueryParams = {
    limit,
    page,
    filterField,
  };
  const { data } = useProductsQuery(query);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 641,
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
        {data?.data.map((product) => {
          const discountPrice = CalculateDiscountPrice(
            product.price,
            product.discountedPrice
          );
          return (
            <div key={product._id} className="p-2">
              <Link to={`/details/${product._id}`}>
                <div className=" relative flex flex-col items-center justify-center mx-auto bg-white shadow-lg rounded-lg py-2 ">
                  <img
                    src={product.images[0]}
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
