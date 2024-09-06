import { useState } from "react";
import StarRating from "./StarRating";

interface ReviewFormProps {
  productId: string;
}

const Reviews: React.FC<ReviewFormProps> = ({ productId }) => {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("review:", {
      productId,
      rating: parseFloat(rating.toFixed(1)),
      comment,
    });
    //   try {
    //     await axios.post("/api/reviews", {
    //       productId,
    //       rating: parseFloat(rating.toFixed(1)),
    //       comment,
    //     });
    //     alert("Review submitted successfully!");
    //   } catch (error) {
    //     alert("Failed to submit review");
    //   }
  };

  return (
    <>
      <div className=" w-full lg:px-10 px-3 py-20 ">
        <h3 className=" font-bold text-xl ">Write Your Own Review</h3>

        <form onSubmit={handleSubmit} className=" py-3 flex flex-col gap-3 ">
          <div className=" flex gap-2 items-center ">
            <p className=" text-lg ">Your Rating:</p>{" "}
            <div className=" flex gap-2 ">
              <StarRating rating={rating} onChange={setRating} />
            </div>
          </div>

          <input
            type="text"
            name="comment"
            className=" w-full h-[80px] outline outline-2 outline-black rounded px-2 "
            placeholder="Write your review here"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button className=" lg:w-[300px] w-full h-[45px] bg-black text-white rounded font-semibold ">
            Submit Review
          </button>
        </form>
      </div>
    </>
  );
};

export default Reviews;
