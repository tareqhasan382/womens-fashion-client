import { useEffect, useState } from "react";

interface GallaryProps {
  Media: string[];
  h?: string;
}

const ImageGallary: React.FC<GallaryProps> = ({ Media, h }) => {
  const [mainImage, setMainImage] = useState(Media[0]);
  useEffect(() => {
    setMainImage(Media[0]);
  }, [Media]);

  return (
    <div className="flex flex-col gap-3 w-full">
      <img
        src={mainImage}
        alt="product"
        className={`${h ? h : "w-full h-auto "} rounded shadow-xl object-cover`}
        // className=`{h ? h: "w-full h-96 rounded-lg shadow-xl object-cover"}`
      />
      <div className="flex gap-2 overflow-auto tailwind-scrollbar-hide">
        {Media?.map((image: string, index: number) => (
          <img
            key={index}
            src={image}
            alt="product"
            className={`w-20 h-20 rounded object-cover cursor-pointer ${
              mainImage === image ? "border-2 border-black" : ""
            }`}
            onClick={() => setMainImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallary;
