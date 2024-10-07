import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Abayas_d from "../assets/banner/Abayas_desktop_banner_en.gif";
import Abayas_m from "../assets/banner/Abayas_mobile_banner_en.gif";
import Summer_d from "../assets/banner/Summer_now_banner_desktop_en.webp";
import Summer_m from "../assets/banner/Summer_now_banner_mobile_en.webp";

interface HeroData {
  id: number;
  imgDesktop: string;
  imgMobile: string;
  subtitle: string;
  title: string;
  title2: string;
}

const heroData: HeroData[] = [
  {
    id: 101,
    imgDesktop: Abayas_d,
    imgMobile: Abayas_m,
    subtitle: "Bests Solo",
    title: "wireless",
    title2: "Headphone",
  },
  {
    id: 102,
    imgDesktop: Summer_d,
    imgMobile: Summer_m,
    subtitle: "Summer Collection",
    title: "Cool",
    title2: "Styles",
  },
];

const HeroSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
  };

  return (
    <div className="overflow-hidden container bg-white w-full h-auto flex items-center justify-center mx-auto">
      <div className="overflow-hidden">
        <Slider {...settings}>
          {heroData.map((data) => (
            <div key={data.id}>
              <div className=" flex items-center justify-center">
                {/* Large screen image */}
                <div className="hidden lg:block w-screen h-auto">
                  <img
                    className="w-screen h-auto object-cover"
                    src={data.imgDesktop}
                    alt={data.subtitle}
                  />
                </div>
                {/* Medium screen image */}
                <div className="block lg:hidden w-screen h-auto">
                  <img
                    className="w-screen h-auto object-cover"
                    src={data.imgMobile}
                    alt={data.subtitle}
                  />
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
