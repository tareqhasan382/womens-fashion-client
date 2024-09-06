import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg_one from "../assets/banner/gaming.png";
import bg_two from "../assets/banner/headphone.png";
import bg_tree from "../assets/banner/macbook.png";
import bg_four from "../assets/banner/vr.png";
interface HeroData {
  id: number;
  img: string;
  subtitle: string;
  title: string;
  title2: string;
}
const heroData: HeroData[] = [
  {
    id: 101,
    img: bg_one,
    subtitle: "Bests Solo",
    title: "wireless",
    title2: "Headphone",
  },
  {
    id: 102,
    img: bg_two,
    subtitle: "Bests Solo",
    title: "wireless",
    title2: "Headphone",
  },
  {
    id: 103,
    img: bg_tree,
    subtitle: "Bests Solo",
    title: "wireless",
    title2: "Headphone",
  },
  {
    id: 104,
    img: bg_four,
    subtitle: "Bests Solo",
    title: "wireless",
    title2: "Headphone",
  },
];
const HeroSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
  };

  return (
    <div className="overflow-hidden container bg-white w-full h-full flex items-center justify-center mx-auto my-2 py-16">
      <div className="overflow-hidden lg:px-7 px-6">
        <Slider {...settings}>
          {heroData.map((data) => (
            <div key={data.id}>
              <div className="flex lg:flex-row flex-col-reverse items-center justify-center">
                {/* text content section */}
                <div className="w-full h-full flex flex-col items-start justify-center gap-4 pl-4">
                  <h1 className="text-2xl sm:text-6xl lg:text-2xl font-bold">
                    {data.subtitle}
                  </h1>
                  <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold">
                    {data.title}
                  </h1>
                  <h1 className="text-4xl sm:text-6xl lg:text-9xl font-extrabold text-gray-300">
                    {data.title2}
                  </h1>
                  <div>
                    <button className="rounded-2xl bg-red-400 text-white font-bold text-xl px-6 py-1 hover:scale-110 duration-150">
                      Shop Now
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-full h-full flex items-end">
                    <img
                      src={data.img}
                      //   width={300}
                      //   height={300}
                      alt="banner-image"
                      className="w-[300px] h-[300px] sm:h-[450px] sm:scale-150 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroSlider;
