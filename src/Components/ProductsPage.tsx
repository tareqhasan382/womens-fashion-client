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

interface Product {
  id: number;
  img: string;
  name: string;
  price: number;
}

const products: Product[] = [
  // Example products
  {
    id: 301,
    img: product1,
    name: "All Over Printed Short Sleeve Silk Shirt",
    price: 250,
  },
  {
    id: 302,
    img: product2,
    name: "Burgundy Scarf with Self Color Beaded Border",
    price: 250,
  },
  {
    id: 303,
    img: product3,
    name: "Red and White Weave Textured Short Dress",
    price: 250,
  },
  {
    id: 304,
    img: product4,
    name: "Grey and White Layered Abaya",
    price: 250,
  },
  {
    id: 305,
    img: product5,
    name: "Blue Strap Front Cut-Out Midi Dress",
    price: 250,
  },
  {
    id: 306,
    img: product6,
    name: "Multicolor Collar Printed Midi Dress6",
    price: 250,
  },
  {
    id: 307,
    img: product7,
    name: "Pink Scarf with Self Color Beaded Border",
    price: 250,
  },
  {
    id: 308,
    img: product8,
    name: "Multicolored Printed Top with Shorts Co-ord set",
    price: 250,
  },
  {
    id: 309,
    img: product9,
    name: "Animal Printed Side Cut Out Midi Dress",
    price: 250,
  },
  {
    id: 3010,
    img: product10,
    name: "Printed Short Dress with Tie Belt",
    price: 250,
  },
  {
    id: 3011,
    img: product11,
    name: "Multicolor Printed A-line Short Dress",
    price: 250,
  },
  {
    id: 3012,
    img: product12,
    name: "Printed Neck Tie Tiered Short Dress",
    price: 250,
  },
  // Add more products as needed
];

const ProductsPage: React.FC = () => {
  return (
    <div className=" w-full grid lg:grid-cols-3 md:grid-cols-3 portrait:md:grid-cols-2 max-sm:grid-cols-2 landscape:sm:grid-cols-3 gap-8 ">
      {/* lg:grid-cols-3 max-md:grid-cols-3 max-sm:grid-cols-2 */}
      {products.map((item) => (
        <div key={item.id} className=" ">
          <img src={item.img} alt={item.name} />
          <div className=" flex flex-col gap-2 p-2  ">
            <h1 className=" lg:text-lg lg:font-semibold text-base font-normal ">
              {item.name}
            </h1>
            <h1 className=" text-lg font-semibold ">BD {item.price}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
