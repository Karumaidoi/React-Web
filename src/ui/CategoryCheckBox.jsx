/* eslint-disable react/prop-types */
import { Checkbox } from "antd";

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

function CategoryCheckBox({ filterName, defaultChecked }) {
  return (
    <Checkbox
      onChange={onChange}
      defaultChecked={defaultChecked}
      className="accent-black"
    >
      {filterName}
    </Checkbox>
  );
}

export default CategoryCheckBox;
