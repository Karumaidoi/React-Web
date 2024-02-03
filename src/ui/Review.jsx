import { Avatar } from "antd";

function Review() {
  return (
    <div className="flex flex-col ">
      <div className="flex  gap-4">
        <div className="w-[3rem]">
          <Avatar size="large" />
        </div>

        <div>
          <h2 className="font-semibold">How much is the vase</h2>
          <p className="font-normal text-gray-400">
            In publishing and graphic design
          </p>
        </div>
      </div>
    </div>
  );
}

export default Review;
