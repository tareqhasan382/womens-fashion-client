import { BsChevronLeft } from "react-icons/bs";

interface ArrowProps {
  // className?: string;
  // style?: React.CSSProperties;
  onClick?: () => void;
}
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

export default SamplePrevArrow;
