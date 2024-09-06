import React, { useState } from "react";
import { LiaAngleRightSolid } from "react-icons/lia";

const ClothingSidebar: React.FC = () => {
  const [isCategoryOpen, setCategoryOpen] = useState(false);
  const [isPriceOpen, setPriceOpen] = useState(false);
  const [isSizeOpen, setSizeOpen] = useState(false);
  const [isColorOpen, setColorOpen] = useState(false);
  const [isFabricMaterialOpen, setFabricMaterialOpen] = useState(false);

  const [priceRange, setPriceRange] = useState([0, 10]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const toggleCategory = () => setCategoryOpen(!isCategoryOpen);
  const togglePrice = () => setPriceOpen(!isPriceOpen);
  const toggleSize = () => setSizeOpen(!isSizeOpen);
  const toggleColor = () => setColorOpen(!isColorOpen);
  const toggleFabricMaterial = () =>
    setFabricMaterialOpen(!isFabricMaterialOpen);

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setPriceRange([0, value]);
  };
  const handleSizeToggle = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const handleColorToggle = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };
  console.log("price:", priceRange);
  console.log("selectedSizes:", selectedSizes);
  console.log("selectedColors:", selectedColors);
  return (
    <div className="w-full h-full text-black p-4">
      <h1 className="text-xl font-bold uppercase">Shop by</h1>
      <div className="w-full flex flex-col gap-6 text-lg font-semibold py-10">
        {/* Category Button */}
        <button
          className="w-full uppercase flex items-center justify-between "
          onClick={toggleCategory}
        >
          Category
          <LiaAngleRightSolid
            size={30}
            className={`transform transition-transform duration-300 ${
              isCategoryOpen ? "rotate-90" : ""
            }`}
          />
        </button>
        {isCategoryOpen && (
          <div className="pl-6 font-normal text-lg ">
            <p>Subcategory 1</p>
            <p>Subcategory 2</p>
            <p>Subcategory 3</p>
          </div>
        )}

        {/* Price Button */}
        <button
          className="w-full uppercase flex items-center justify-between"
          onClick={togglePrice}
        >
          Price
          <LiaAngleRightSolid
            size={30}
            className={`transform transition-transform duration-300 ${
              isPriceOpen ? "rotate-90" : ""
            }`}
          />
        </button>
        {isPriceOpen && (
          <div className="pl-6 font-normal text-lg">
            <p className="text-sm">Adjust your price range:</p>
            <input
              type="range"
              min="0"
              max="500"
              value={priceRange[1]}
              onChange={handlePriceChange}
              className="w-full"
            />
            <div className="flex justify-between text-sm">
              <span>$0</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        )}

        {/* Size Button */}
        <button
          className="w-full uppercase flex items-center justify-between"
          onClick={toggleSize}
        >
          Size
          <LiaAngleRightSolid
            size={30}
            className={`transform transition-transform duration-300 ${
              isSizeOpen ? "rotate-90" : ""
            }`}
          />
        </button>
        {isSizeOpen && (
          <div className=" flex flex-col pl-6 font-normal text-lg">
            <label>
              <input
                type="checkbox"
                checked={selectedSizes.includes("Small")}
                onChange={() => handleSizeToggle("Small")}
              />
              Small
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedSizes.includes("Medium")}
                onChange={() => handleSizeToggle("Medium")}
              />
              Medium
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedSizes.includes("Large")}
                onChange={() => handleSizeToggle("Large")}
              />
              Large
            </label>
          </div>
        )}

        {/* Color Button */}
        <button
          className="w-full uppercase flex items-center justify-between"
          onClick={toggleColor}
        >
          Color
          <LiaAngleRightSolid
            size={30}
            className={`transform transition-transform duration-300 ${
              isColorOpen ? "rotate-90" : ""
            }`}
          />
        </button>
        {isColorOpen && (
          <div className=" flex flex-col pl-6 font-normal text-lg">
            <label>
              <input
                type="checkbox"
                checked={selectedColors.includes("Red")}
                onChange={() => handleColorToggle("Red")}
              />
              Red
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedColors.includes("Blue")}
                onChange={() => handleColorToggle("Blue")}
              />
              Blue
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedColors.includes("Green")}
                onChange={() => handleColorToggle("Green")}
              />
              Green
            </label>
          </div>
        )}

        {/* Fabric Material Button */}
        <button
          className="w-full uppercase flex items-center justify-between"
          onClick={toggleFabricMaterial}
        >
          Fabric Material
          <LiaAngleRightSolid
            size={30}
            className={`transform transition-transform duration-300 ${
              isFabricMaterialOpen ? "rotate-90" : ""
            }`}
          />
        </button>
        {isFabricMaterialOpen && (
          <div className="pl-6 font-normal text-lg">
            <p>Cotton</p>
            <p>Silk</p>
            <p>Wool</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClothingSidebar;
