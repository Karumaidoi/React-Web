import MainTabComponent from "./MainTabComponent";

function MainView() {
  return (
    <div className="grid grid-rows-[75px,1fr] border-x-[1px] border-slate-100 overflow-scroll">
      <div className="flex gap-3 items-start  justify-start  w-full border-slate-100">
        <div className="mt-2 w-full">
          <MainTabComponent />
        </div>
      </div>
    </div>
  );
}

export default MainView;
