import { BsChevronRight } from "react-icons/bs";

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

export default SampleNextArrow;
