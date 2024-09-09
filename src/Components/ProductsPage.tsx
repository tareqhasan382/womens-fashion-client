import { useProductsQuery } from "../Redux/products/productApi";
import loadingImage from "../assets/loading.gif";
const ProductsPage: React.FC = () => {
  const { data, isLoading } = useProductsQuery();

  return (
    <>
      {isLoading ? (
        <div className=" w-full h-full flex items-center justify-center mx-auto">
          <img src={loadingImage} alt="loading" />
        </div>
      ) : (
        <div className=" w-full grid lg:grid-cols-3 md:grid-cols-3 portrait:md:grid-cols-2 max-sm:grid-cols-2 landscape:sm:grid-cols-3 gap-8 ">
          {/* lg:grid-cols-3 max-md:grid-cols-3 max-sm:grid-cols-2 */}
          {data?.data.map((item) => (
            <div key={item._id} className=" ">
              <img src={item.images[0]} alt={item.name} />
              <div className=" flex flex-col gap-2 p-2  ">
                <h1 className=" lg:text-lg lg:font-semibold text-base font-normal ">
                  {item.name}
                </h1>
                <h1 className=" text-lg font-semibold ">BD {item.price}</h1>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsPage;
