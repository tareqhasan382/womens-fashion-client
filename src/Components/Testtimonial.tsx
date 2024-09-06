import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
interface Product {
  id: number;
  messsage: string;
}

const products: Product[] = [
  // Example products
  {
    id: 1,
    messsage:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet pulvinar mi, eget volutpat lorem interdum vel. Cras pretium mollis ante, ac fermentum mauris consectetur nec. Vestibulum volutpat augue ut purus iaculis, sed lacinia enim mollis. Aliquam dignissim tortor vitae tellus dictum rutrum non vitae ex. Suspendisse non dolor sit amet nulla porta euismod.",
  },
  {
    id: 2,
    messsage:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet pulvinar mi, eget volutpat lorem interdum vel. Cras pretium mollis ante, ac fermentum mauris consectetur nec. Vestibulum volutpat augue ut purus iaculis, sed lacinia enim mollis. Aliquam dignissim tortor vitae tellus dictum rutrum non vitae ex. Suspendisse non dolor sit amet nulla porta euismod.",
  },
  {
    id: 3,
    messsage:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet pulvinar mi, eget volutpat lorem interdum vel. Cras pretium mollis ante, ac fermentum mauris consectetur nec. Vestibulum volutpat augue ut purus iaculis, sed lacinia enim mollis. Aliquam dignissim tortor vitae tellus dictum rutrum non vitae ex. Suspendisse non dolor sit amet nulla porta euismod.",
  },
  {
    id: 4,
    messsage:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet pulvinar mi, eget volutpat lorem interdum vel. Cras pretium mollis ante, ac fermentum mauris consectetur nec. Vestibulum volutpat augue ut purus iaculis, sed lacinia enim mollis. Aliquam dignissim tortor vitae tellus dictum rutrum non vitae ex. Suspendisse non dolor sit amet nulla porta euismod.",
  },
];
const Testtimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default for large screens
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // lg: size
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // md: size
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640, // sm: size
        settings: {
          slidesToShow: 1,
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
          return (
            <div key={product.id} className="p-2">
              <div className=" w-full h-auto flex items-center justify-center mx-auto bg-slate-100 shadow-lg rounded-lg">
                <p className=" w-full h-full text-justify p-4 ">
                  {product.messsage}
                </p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Testtimonial;
