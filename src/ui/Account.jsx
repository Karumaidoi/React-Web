import { Badge } from "antd";
import { SlHandbag } from "react-icons/sl";
import { AiOutlineHeart } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";

import ImageView from "./ImageView";
import TabsComponent from "./TabsComponent";
import LikeButton from "./LikeButton";

function Account() {
  return (
    <div className="grid grid-rows-[75px,1fr] border-x-[1px] border-slate-100 overflow-scroll relative">
      <div className="flex gap-3 items-center  justify-end border-y-[1px] border-slate-100">
        <div className="flex gap-[2rem] items-center mr-4">
          <Badge count={5}>
            <button style={{ display: "relative" }} className="relative">
              {<SlHandbag size={20} />}
            </button>
          </Badge>

          <button style={{ display: "relative" }} className="relative">
            {<AiOutlineHeart size={24} />}
          </button>

          <div className="h-[40px] w-[40px] rounded-full bg-green-400 flex items-center justify-center">
            <div className="h-[35px] w-[35px] rounded-full bg-slate-400 bg-[url('src/assets/user.jpg')] bg-cover "></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full items-center">
        <button className="self-end p-1 bg-gray-200 rounded-full mt-1 mr-3">
          <IoCloseOutline size={20} color="white" />
        </button>
        <div>
          <img className="h-[16rem] w-auto" src="src/assets/Plant2.png" />
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
            Monstera Deliciosa <br />
            Variegata (Large)
          </h3>
          <p className="text-sm mt-2 text-gray-500">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document{" "}
          </p>
        </div>

        {/* Tab Components */}
        <TabsComponent />

        {/* FAB */}

        <div className="absolute bottom-5 flex items-center gap-10">
          <LikeButton />
          {/* BTN */}
          <button className="px-4 py-3 bg-green-600 text-white font-bold text-sm rounded-[.8rem] hover:bg-green-800">
            <p>$325 - Add to Cart</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Account;
