import { useState } from "react";
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
import Follow from "./Follow";
import ProductSlider from "./ProductSlider";

import { useParams } from "react-router-dom";
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { addToCart, IProduct, removeOne } from "../Redux/cardSlice";
import Reviews from "./Reviews";

interface Product {
  id: string;
  img: string;
  name: string;
  price: number;
}

const products: Product[] = [
  {
    id: "13",
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
    price: 20250,
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

const ProductDetails = () => {
  const dispatch = useAppDispatch();
  const cartProduct = useAppSelector((state) => state.cart);
  const { id } = useParams<{ id: string }>();

  const [selectedProduct, setSelectedProduct] = useState<Product>(products[0]);
  const product = products.find((item: Product) => item.id === id);

  if (!product) {
    return (
      <div className=" w-full flex items-start justify-center py-20">
        <h1 className=" text-xl font-semibold text-center ">
          Product not found
        </h1>
      </div>
    );
  }
  // ======Add To Card ==========
  const AddToCart = () => {
    // Check if a size and color are selected

    const newItem: IProduct = {
      id: product?.id,
      name: product?.name,
      // size: product?.variations[selectedColor].size[selectedSize],
      // color: product?.variations[selectedColor]?.color,
      price: product.price,
      img: product.img[0],
      // Add other product details as needed
    };

    dispatch(addToCart(newItem));
  };

  const quantity = cartProduct.products.find((item) => item.quantity);
  console.log("quantity:", quantity);
  return (
    <div className="mx-auto w-full h-full pt-[60px] lg:px-10">
      <div className="mx-auto w-full h-auto flex lg:flex-row flex-col justify-between gap-4 lg:px-10 px-2">
        {/* Main product image */}
        <div className="mx-auto lg:w-[60%] w-full h-full lg:pl-20 overflow-hidden ">
          <div className="w-full h-auto ">
            <img
              src={selectedProduct.img}
              alt="product"
              className="w-full h-full"
            />
          </div>
          {/* Thumbnail images */}
          <div className="pt-4 w-full h-auto flex flex-row gap-4 overflow-x-auto no-scrollbar ">
            {products.map((product) => (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)} // Update the main image on click
                className="cursor-pointer"
              >
                <div className="w-[120px] h-[180px]">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex flex-col gap-4 mx-auto w-full h-full pl-4 ">
          <h1 className=" text-2xl font-bold ">{product.name}</h1>
          <h2 className=" text-xl font-semibold ">BD {product.price}</h2>
          <h2 className=" text-xl font-semibold text-rose-400 ">Low stock</h2>
          {/* <div className=" flex flex-col gap-2  ">
            <p>Size</p>
            <div className="relative flex flex-row gap-4 ">
              <div className="w-[40px] h-[40px] outline outline-2 outline-black flex items-center justify-center ">
                <h3 className="">36</h3>
              </div>
              <div className="w-[40px] h-[40px] outline outline-2 outline-black flex items-center justify-center ">
                <h3 className="">38</h3>
              </div>
              <div className="w-[40px] h-[40px] outline outline-2 outline-black flex items-center justify-center ">
                <h3 className="">40</h3>
              </div>
              <div className="w-[40px] h-[40px] outline outline-2 outline-black flex items-center justify-center ">
                <h3 className="">42</h3>
              </div>
            </div>
          </div> */}
          <div className="flex flex-col gap-2">
            <p>Size</p>
            <div className="relative flex flex-row gap-4">
              {/* Available Size */}
              <div className="w-[40px] h-[40px] outline outline-2 outline-black flex items-center justify-center">
                <h3 className="text-2xl">36</h3>
              </div>
              {/* Unavailable Sizes */}
              <div className="w-[40px] h-[40px] outline outline-2 outline-gray-400 flex items-center justify-center relative opacity-50">
                <h3 className="text-gray-500 text-2xl ">38</h3>

                <div className="absolute w-[2px] h-[56px] bg-gray-400 rotate-45 origin-center left-1/2 transform -translate-x-1/2"></div>
              </div>
              <div className="w-[40px] h-[40px] outline outline-2 outline-gray-400 flex items-center justify-center relative opacity-50">
                <h3 className="text-gray-500 text-2xl ">40</h3>

                <div className="absolute w-[2px] h-[56px] bg-gray-400 rotate-45 origin-center left-1/2 transform -translate-x-1/2"></div>
              </div>
              <div className="w-[40px] h-[40px] outline outline-2 outline-gray-400 flex items-center justify-center relative opacity-50">
                <h3 className="text-gray-500 text-2xl ">42</h3>

                <div className="absolute w-[2px] h-[56px] bg-gray-400 rotate-45 origin-center left-1/2 transform -translate-x-1/2"></div>
              </div>
              <div className="w-[40px] h-[40px] outline outline-2 outline-gray-400 flex items-center justify-center relative opacity-50">
                <h3 className="text-gray-500 text-2xl ">44</h3>

                <div className="absolute w-[2px] h-[56px] bg-gray-400 rotate-45 origin-center left-1/2 transform -translate-x-1/2"></div>
              </div>
            </div>
          </div>
          <div className=" w-full flex flex-col gap-3 ">
            <h3 className=" font-bold ">Quantity :</h3>
            <div className=" flex flex-row gap-4 ">
              <div className="flex gap-4 items-center">
                <BiMinusCircle
                  size={30}
                  className="hover:text-red-1 cursor-pointer"
                  onClick={() => dispatch(removeOne(product))}
                />
                <p className=" w-[40px] text-center text-lg font-semibold ">
                  {quantity?.quantity ? quantity.quantity : 1}
                </p>
                <BiPlusCircle
                  onClick={() => dispatch(addToCart(product))}
                  size={30}
                  className="hover:text-red-1 cursor-pointer"
                  // onClick={() => cart.increaseQuantity(cartItem?.item?._id)}
                />
              </div>
            </div>
          </div>
          <button
            onClick={() => AddToCart()}
            className=" uppercase font-semibold text-lg lg:w-[60%] w-full h-[60px] rounded-md bg-black text-white "
          >
            add to bag
          </button>
          <div className=" h-[2px] w-full bg-gray-400 "></div>
          <div>
            <h3 className=" font-bold ">Description</h3>
            <p>
              Embrace versatility with our Pink and Black Abstract Printed Maxi
              Kaftan Dress. Crafted from lightweight viscose crepe, it features
              long sleeves, a relaxed fit, and a V-neck, ensuring comfort from
              day to evening. Its bold abstract print makes it a standout piece
              for any casual or evening event, blending ease with elegance.
            </p>
            <h6>
              <span className=" font-semibold "> Style Number:</span>
              <span> COU-009</span>
            </h6>
            <h6>
              <span className=" font-semibold ">Color:</span>
              <span> Multicolor</span>
            </h6>
            <h6>
              <span className=" font-semibold ">Collection Name:</span>
              <span> Pink Peony</span>
            </h6>
            <h6>
              <span className=" font-semibold ">Product Type:</span>
              <span> Maxi dress</span>
            </h6>
            <h6>
              <span className=" font-semibold ">Fabric material:</span>
              <span> Viscose Crepe</span>
            </h6>
            <h6>
              <span className=" font-semibold ">Style Number:</span>
              <span> Long Sleeves</span>
            </h6>
            <h6>
              <span className=" font-semibold ">Fit Type:</span>
              <span> Relaxed</span>
            </h6>
            <h6>
              <span className=" font-semibold ">Neckline:</span>
              <span> V-Neck</span>
            </h6>
            <h6>
              <span className=" font-semibold ">Pattern Print:</span>
              <span> Abstract Print</span>
            </h6>
            <h6>
              <span className=" font-semibold ">Care Instruction:</span>
              <span> Machine Wash</span>
            </h6>
          </div>
          <div className=" h-[2px] w-full bg-gray-400 "></div>
          <div>
            <h3 className=" font-bold ">Shipping Info</h3>
            <p className=" font-semibold ">Within UAE</p>
            <p>
              <span className=" font-semibold ">
                Same Day Delivery in UAE:{" "}
              </span>
              AED 15 chargeable for same day delivery within UAE (only
              applicable for orders placed before 12 PM GST).{" "}
            </p>
            <p>
              <span className=" font-semibold ">
                Next Day Delivery in UAE:{" "}
              </span>
              Free Shipping on next day delivery within UAE. Cash on Delivery
              orders incur an AED 25 fee (COD charges).
            </p>
            <p>
              <span className=" font-semibold ">Delivery Timeframes: </span>{" "}
              Orders are delivered the same/next day depending on the shipping
              method selected by you. Weekend orders are delivered within 1-2
              days. During busy periods/public holidays, delivery may take
              longer..
            </p>
            <p className=" font-semibold ">Outside UAE</p>
            <p>
              <span className=" font-semibold ">Worldwide Shipping: </span>
              International orders incur standard shipping fees and any
              applicable customs duties, payable by the customer. Prepaid orders
              only; COD not accepted.
            </p>
            <p>
              <span className=" font-semibold ">Delivery Timeframes: </span>{" "}
              International orders delivered within 3-5 working days. Delivery
              may take longer during busy periods/public holidays. Read more on
              our Shipping Policy page.
            </p>
          </div>
          <div className=" h-[2px] w-full bg-gray-400 "></div>
          <div>
            <h3 className=" font-bold ">Return & Exchange Policy</h3>
            <p>
              Our Customer Support Team is available on all business days from 9
              AM – 7 PM, excluding public holidays and weekends.
            </p>
          </div>
        </div>
      </div>
      {/* review section */}
      <Reviews productId={product.id} />

      <div className=" w-full h-[1px] bg-slate-300 my-4 "></div>
      <div className=" bg-white py-8 ">
        <h1 className=" uppercase font-bold text-xl text-center ">
          YOU MAY ALSO LIKE
        </h1>
        <div className="  my-4 lg:px-8 px-4  ">
          <ProductSlider />
        </div>
      </div>
      <div className=" w-full h-[1px] bg-slate-300 my-4 "></div>
      <div className=" py-10 ">
        <Follow />
      </div>
      <div className=" w-full h-[1px] bg-slate-300 my-4 "></div>
    </div>
  );
};

export default ProductDetails;
