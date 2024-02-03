import { Tabs } from "antd";
import Review from "./Review";
import DetailsView from "./DetailsView";

const items = [
  {
    key: "1",
    label: "Details",
    children: <DetailsView />,
  },
  {
    key: "2",
    label: "Reviews(32)",
    children: <Review />,
  },
];

function TabsComponent() {
  return (
    <Tabs
      centered={true}
      color="green"
      className="w-full px-8 mt-6"
      defaultActiveKey="1"
      items={items}
    />
  );
}

export default TabsComponent;
