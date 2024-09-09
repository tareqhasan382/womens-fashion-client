import { useParams } from "react-router-dom";
import { useProductQuery } from "../Redux/products/productApi";
import Follow from "./Follow";
import Reviews from "./Reviews";
import ImageGallary from "./ImageGallary";
import loadingImage from "../assets/loading.gif";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { addToCart, removeOne } from "../Redux/cardSlice";
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import ProductSlider from "./ProductSlider";
import { ReviewResponse, useReviewsQuery } from "../Redux/reviews/reviewApi";
import StarRating from "./StarRating";
const ProductDetails = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.cart);
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useProductQuery(id);
  const { data: reviewsData, isLoading: reviewLoading } = useReviewsQuery(id);
  // ======Add To Card ==========
  const AddToCart = () => {
    dispatch(addToCart(data.data));
  };

  const findProduct = products.find(
    (product) => product._id === data?.data?._id
  );

  return (
    <>
      {isLoading ? (
        <div className=" w-full h-full flex items-center justify-center mx-auto">
          <img src={loadingImage} alt="loading" />
        </div>
      ) : (
        <div className="mx-auto w-full h-full pt-[60px] lg:px-10">
          <div className="mx-auto w-full h-auto flex lg:flex-row flex-col justify-between gap-4 lg:px-10 px-2">
            {/* Main product image */}
            <div className="mx-auto lg:w-[60%] w-full h-full lg:pl-20 overflow-hidden ">
              <ImageGallary Media={data?.data?.images} />
            </div>
            <div className=" flex flex-col gap-4 mx-auto w-full h-full pl-4 ">
              <h1 className=" text-2xl font-bold ">{data?.data.name}</h1>
              <h2 className=" text-xl font-semibold ">BD {data?.data.price}</h2>
              <h2 className=" text-xl font-semibold text-rose-400 ">
                Low stock
              </h2>
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
                      onClick={() => dispatch(removeOne(data.data))}
                    />
                    <p className=" w-[40px] text-center text-lg font-semibold ">
                      {findProduct ? findProduct?.quantity : 1}
                    </p>
                    <BiPlusCircle
                      onClick={() => dispatch(addToCart(data.data))}
                      size={30}
                      className="hover:text-red-1 cursor-pointer"
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
                <p>{data?.data?.description}</p>
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
                    Same Day Delivery in UAE:
                  </span>
                  AED 15 chargeable for same day delivery within UAE (only
                  applicable for orders placed before 12 PM GST).
                </p>
                <p>
                  <span className=" font-semibold ">
                    Next Day Delivery in UAE:
                  </span>
                  Free Shipping on next day delivery within UAE. Cash on
                  Delivery orders incur an AED 25 fee (COD charges).
                </p>
                <p>
                  <span className=" font-semibold ">Delivery Timeframes: </span>
                  Orders are delivered the same/next day depending on the
                  shipping method selected by you. Weekend orders are delivered
                  within 1-2 days. During busy periods/public holidays, delivery
                  may take longer..
                </p>
                <p className=" font-semibold ">Outside UAE</p>
                <p>
                  <span className=" font-semibold ">Worldwide Shipping: </span>
                  International orders incur standard shipping fees and any
                  applicable customs duties, payable by the customer. Prepaid
                  orders only; COD not accepted.
                </p>
                <p>
                  <span className=" font-semibold ">Delivery Timeframes: </span>
                  International orders delivered within 3-5 working days.
                  Delivery may take longer during busy periods/public holidays.
                  Read more on our Shipping Policy page.
                </p>
              </div>
              <div className=" h-[2px] w-full bg-gray-400 "></div>
              <div>
                <h3 className=" font-bold ">Return & Exchange Policy</h3>
                <p>
                  Our Customer Support Team is available on all business days
                  from 9 AM – 7 PM, excluding public holidays and weekends.
                </p>
              </div>
            </div>
          </div>
          {/* review section */}
          <Reviews productId={data?.data._id} />
          {reviewLoading ? (
            <div>review Loading</div>
          ) : (
            <div className=" px-2 ">
              <h1 className=" text-lg font-bold ">Reviews</h1>
              <div className=" w-[200px] h-[1px] bg-slate-400 "></div>
              {reviewsData?.data &&
                reviewsData.data.map((review: ReviewResponse) => (
                  <div key={review._id} className=" flex items-center my-8 ">
                    <img
                      src={review.user.image}
                      alt="user image"
                      className=" w-10 h-10 mr-3 "
                    />
                    <div>
                      <h1 className=" font-bold ">{review?.user.name}</h1>
                      <h1>{review?.comment}</h1>
                      <StarRating rating={review.rating} />
                    </div>
                  </div>
                ))}
            </div>
          )}

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
      )}
    </>
  );
};

export default ProductDetails;
