import { Link } from "react-router-dom";
import { useProductsQuery } from "../Redux/products/productApi";
import loadingImage from "../assets/loading.gif";
import { useState } from "react";
type QueryParams = {
  limit: number;
  page: number;
  filterField?: string;
};
const ProductsPage: React.FC = () => {
  const [limit] = useState<number>(40);
  const [page] = useState<number>(1);
  const [filterField] = useState<string>("vacation");

  const query: QueryParams = {
    limit,
    page,
    filterField,
  };
  const { data, isLoading } = useProductsQuery(query);

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
              <Link to={`/details/${item._id}`}>
                <img src={item.images[0]} alt={item.name} />
              </Link>
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
