import { FaShoppingBasket } from "react-icons/fa";

function Account() {
  return (
    <div className="grid grid-rows-[75px,1fr] border-x-[1px] border-slate-100 overflow-scroll">
      <div className="flex gap-3 items-center  justify-end border-y-[1px] border-slate-100">
        <div>
          <button>{<FaShoppingBasket />}</button>
        </div>
      </div>
    </div>
  );
}

export default Account;
