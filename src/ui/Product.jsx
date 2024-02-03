/* eslint-disable react/prop-types */
import { Rate, Button } from "antd";
import LikeButton from "./LikeButton";
import { useAppState } from "../context/manageState";
import toast from "react-hot-toast";

function Product({ title, noReviews, price, defaultRating, image }) {
  // Using our App State
  const { setCurrentProduct, addToCart } = useAppState();

  return (
    <>
      <div
        className="border-[1px] rounded-[1rem] border-gray-200 py-4 px-3 flex flex-col items-center relative cursor-pointer"
        onClick={() => {
          setCurrentProduct({ title, noReviews, price, defaultRating, image });
        }}
      >
        <div className="absolute right-3">
          <LikeButton />
        </div>
        <img src={image} className="h-[13rem] w-auto mb-3 self-center" />
        <h3 className="font-[800] text-md mb-2">{title}</h3>
        <div className="flex gap-2">
          <Rate allowHalf defaultValue={defaultRating} />
          <p className="font-semibold text-gray-400">({noReviews})</p>
        </div>
        <div className="mt-7  self-start flex items-center justify-between w-full">
          <div className="flex flex-col items-start">
            <p>Price</p>
            <p className="font-black">$ {price}</p>
          </div>
          <div className="flex flex-col items-start">
            <Button
              onClick={() => {
                addToCart(), toast.success("Added to cart");
              }}
            >
              <p>Add to Cart</p>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
