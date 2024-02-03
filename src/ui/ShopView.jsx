/* eslint-disable react/no-unescaped-entities */
import { CiSearch } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { BsCashStack } from "react-icons/bs";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";
import Product from "./Product";

const items = [
  {
    label: "$100 - $300",
    key: "1",
    icon: <BsCashStack size={22} />,
  },
];

const handleMenuClick = (e) => {
  console.log("click", e);
};

const menuProps = {
  items,
  onClick: handleMenuClick,
};

function ShopView() {
  return (
    <div className="mt-0 px-[4rem] no-scrollbar">
      <div className="flex flex-col">
        <div className="px-6 py-3 w-full bg-gray-200 rounded-[.8rem] flex items-center justify-between">
          <CiSearch size={24} color="black" className="mr-3" />
          <input
            type="text"
            placeholder="Monstera"
            className="bg-transparent outline-none w-full text-black text-md font-body placeholder:font-semibold"
          />
          <IoCloseOutline size={24} color="black" className="mr-0" />
        </div>

        {/* Search  */}
        <p className="mt-8">
          Search result for <strong>"Monstera"</strong>
        </p>

        {/* Sort */}
        <div className="flex  items-center gap-6 mt-4">
          <p className="font-semibold text-md text-gray-400">Sort</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-green-800 text-white font-bold text-sm rounded-[.8rem] hover:bg-green-600">
              <p>Relevance</p>
            </button>
            <button className="px-4 py-2 bg-transparent text-black border-[1px] font-bold text-sm rounded-[.8rem] hover:bg-green-600 hover:text-white">
              <p>Popular</p>
            </button>
            <button className="px-4 py-2 bg-transparent text-black border-[1px] font-bold text-sm rounded-[.8rem] hover:bg-green-600 hover:text-white">
              <p>Most New</p>
            </button>
            <Dropdown menu={menuProps}>
              <Button className="px-4 py-4 bg-transparent text-black border-[1px] font-bold text-sm rounded-[.8rem] flex items-center justify-center">
                <Space>
                  Price
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </div>
        </div>

        {/*  */}
        <div className="m-6 grid grid-cols-[250px,250px] gap-[2rem] justify-center">
          <Product
            title={"Monstera DK (L)"}
            noReviews={"85"}
            price={"385"}
            defaultRating={2.5}
            image={"Plant1.png"}
          />

          <Product
            title={"Monstera Deliciosa (L)"}
            noReviews={"137"}
            price={"115"}
            defaultRating={2.5}
            image={"Plant2.png"}
          />

          <Product
            title={"Monstera Deliciosa (L)"}
            noReviews={"24"}
            price={"118"}
            defaultRating={2.7}
            image={"Plant3-png.png"}
          />

          <Product
            title={"Monstera Deliciosa (L)"}
            noReviews={"13"}
            price={"99"}
            defaultRating={4.5}
            image={"Plant4png.png"}
          />
        </div>
      </div>
    </div>
  );
}

export default ShopView;
