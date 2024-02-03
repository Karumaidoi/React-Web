import { Tabs } from "antd";
import ShopView from "./ShopView";

const items = [
  {
    key: "1",
    label: "Shop",
    children: <ShopView />,
  },
  {
    key: "2",
    label: "Plant Care",
    children: "Others",
  },
  {
    key: "3",
    label: "Workshops",
    children: "Others",
  },
  {
    key: "4",
    label: "Blogs",
    children: "Others",
  },
];

function MainTabComponent() {
  return (
    <Tabs
      color="green"
      className="w-full px-8 mt-6"
      defaultActiveKey="1"
      items={items}
    />
  );
}

export default MainTabComponent;
