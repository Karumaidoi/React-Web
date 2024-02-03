function DetailsView() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-2 px-4 py-2 border-[1px] rounded-md">
        <h4 className="text-md">📏</h4>
        <p className="text-[.79rem] mr-6 font-bold text-gray-400">120 cm</p>
      </div>

      <div className="flex gap-2 px-4 py-2 border-[1px] rounded-md">
        <h4 className="text-md">😹</h4>
        <p className="text-[.79rem] mr-6 font-bold text-gray-400 font-['Lato']">
          Animals save
        </p>
      </div>
    </div>
  );
}

export default DetailsView;
