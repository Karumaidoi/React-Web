import CategoryCheckBox from "./CategoryCheckBox";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Input, Checkbox, Rate } from "antd";
import CTABox from "./CTABox";

const items = [
  {
    label: <p>No categories</p>,
    key: "0",
  },
];

function SideBar() {
  return (
    <div className="grid grid-rows-[75px,1fr] border-x-[1px] border-slate-100 overflow-scroll">
      <div className="flex gap-3 items-center border-y-[1px] border-slate-100">
        <img
          src="src/assets/favicon.png"
          alt="image"
          className="h-[2rem] w-[2rem]  ml-[1rem]"
        />

        <h2 className="font-bold text-[1rem] font-['Lato']">OYOTEE</h2>
      </div>
      <div className="flex flex-col gap-3 items-start px-5 pt-5">
        <h3 className="font-bold text-md mb-2">Filter</h3>
        <div className="flex items-start flex-col gap-3">
          <div>
            <h3 className="font-bold text-[.8rem] mb-2">Categories</h3>
            <div className="flex flex-col gap-4 mb-3">
              <CategoryCheckBox
                filterName={"Gardening"}
                defaultChecked={false}
              />
              <CategoryCheckBox filterName={"Plants"} defaultChecked={true} />
              <CategoryCheckBox filterName={"Seeds"} defaultChecked={false} />
              <CategoryCheckBox filterName={"Bulbs"} defaultChecked={false} />
              <CategoryCheckBox
                filterName={"Planters"}
                defaultChecked={false}
              />

              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
              >
                <a
                  onClick={(e) => e.preventDefault()}
                  className="text-sm font-semibold self-end"
                >
                  <Space>
                    Others
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-[.8rem] mb-3">Price Range</h3>
            <div className="flex flex-col gap-4 mb-5">
              <div className="flex items-center  gap-3">
                <h3 className="px-5 py-2 bg-gray-200 rounded-md text-sm text-gray-500 font-semibold">
                  Min
                </h3>
                <Input
                  size="medium"
                  className="w-[60px]"
                  width={20}
                  min={1}
                  max={10}
                  defaultValue={"$400"}
                />
              </div>
            </div>
            <button className="px-10 py-2 bg-green-700 rounded-lg text-white font-bold text-sm">
              Set Price
            </button>

            <div className="w-[200px] h-[1px]  mt-5 border-x-[1px] bg-slate-100"></div>
          </div>

          <div>
            <h3 className="font-bold text-[.8rem] mb-3">Rating</h3>
            <div className="flex flex-col gap-4 mb-5">
              <div className="flex items-center gap-2">
                <Checkbox defaultChecked={true} />
                <Rate allowHalf defaultValue={2.5} />
                <p className="text-sm font-semibold text-gray-400">above</p>
              </div>
            </div>

            <div className="w-[200px] h-[1px]  mt-5 border-x-[1px] bg-slate-100"></div>
          </div>

          <CTABox />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
