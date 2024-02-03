import { Badge, Card, Spin } from "antd";
import { SlHandbag } from "react-icons/sl";
import { AiOutlineHeart } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import toast from "react-hot-toast";

import ImageView from "./ImageView";
import TabsComponent from "./TabsComponent";
import LikeButton from "./LikeButton";
import { useAppState } from "../context/manageState";
import { usePayment } from "../hooks/usePayment";
import { useState } from "react";

function Account() {
  const [phone, setPhoneNumber] = useState();
  const {
    currentProduct,
    setCurrentProduct,
    cartNumber,
    addToCart,
    clearCart,
    likesNumber,
  } = useAppState();

  const { makePaymentAPI, isLoading } = usePayment();

  return (
    <>
      <div className="grid grid-rows-[75px,1fr] border-x-[1px] border-slate-100 overflow-scroll relative">
        <div className="flex gap-3 items-center  justify-end border-y-[1px] border-slate-100">
          <div className="flex gap-[2rem] items-center mr-4">
            <Badge count={cartNumber}>
              <button style={{ display: "relative" }} className="relative">
                {<SlHandbag size={20} />}
              </button>
            </Badge>

            <Badge count={likesNumber}>
              <button style={{ display: "relative" }} className="relative">
                {<AiOutlineHeart size={24} />}
              </button>
            </Badge>

            <div className="h-[40px] w-[40px] rounded-full bg-green-400 flex items-center justify-center">
              <div className="h-[35px] w-[35px] rounded-full bg-slate-400 bg-[url('src/assets/user.jpg')] bg-cover bg-center"></div>
            </div>
          </div>
        </div>

        {JSON.stringify(currentProduct) == "{}" ? (
          <div className="flex flex-col w-full items-center">
            <div className="mt-[2rem] w-[18rem]">
              <Card title="No Plant selected" bordered={false}>
                To see product view, please select a product
              </Card>
            </div>
          </div>
        ) : (
          <div className="flex flex-col w-full items-center">
            <button className="self-end p-1 bg-gray-200 rounded-full mt-1 mr-3">
              <IoCloseOutline
                size={20}
                color="white"
                onClick={() => setCurrentProduct({})}
              />
            </button>
            <div>
              <img
                className="h-[16rem] w-auto"
                src={`src/assets/${currentProduct.image}`}
              />
            </div>
            <div className="flex gap-6 mt-2">
              <ImageView imagePath={"plants.jpg"} />
              <ImageView imagePath={"plants.jpg"} />
              <ImageView imagePath={"plants.jpg"} />
              <ImageView imagePath={"plants.jpg"} isLast={true} />
            </div>

            {/* TextBox */}
            <div className="self-start px-8 mt-5">
              <h3 className="font-black text-[1.2rem]">
                {currentProduct.title}
              </h3>
              <p className="text-sm mt-2 text-gray-500">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document{" "}
              </p>
            </div>

            {/* Tab Components */}
            <TabsComponent />

            {/* FAB */}

            <div className="absolute bottom-5 flex items-center gap-10">
              <LikeButton />
              {/* BTN */}
              <button
                className="px-4 py-3 bg-green-600 text-white font-bold text-sm rounded-[.8rem] hover:bg-green-800"
                onClick={() => {
                  addToCart(), toast.success("Added to cart");
                }}
              >
                <p>${currentProduct.price} - Add to Cart</p>
              </button>

              {cartNumber > 0 ? (
                <button
                  className="px-4 py-3 bg-black text-white font-bold text-sm rounded-[.8rem]  transition duration-150 ease-in-out  hover:scale-110"
                  onClick={() => {
                    document.getElementById("my_modal_1").showModal();
                  }}
                >
                  <p>{isLoading ? <Spin /> : "Checkout"}</p>
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        )}
      </div>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-white">Checkout!</h3>
          <p className="py-4 text-white">
            Please enter your Phone Number to check out (KE)
          </p>
          <input
            value={phone}
            className="outline-none px-3 py-2 w-full bg-gray-300 rounded-md"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <div className="modal-action">
            <form method="dialog">
              <button
                className="btn"
                onClick={() => {
                  makePaymentAPI({
                    phoneNumber: phone,
                    amount: "10",
                    desc: currentProduct.title,
                  }),
                    toast.success("Payment in progress");
                  clearCart();
                  setPhoneNumber("");
                }}
              >
                Checkout
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Account;
