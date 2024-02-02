function Header() {
  return (
    <div className="grid grid-cols-[15rem,1fr,20rem] items-center justify-between ">
      {/* IMAGE */}
      <div className="flex gap-3 items-center">
        <img
          src="src/assets/favicon.png"
          alt="image"
          className="h-[2rem] w-[2rem]"
        />

        <h2 className="font-bold text-[1rem] font-['Lato']">OYOTEE</h2>
      </div>

      <div className="align-bottom self-end">
        <div className="flex">
          <div>
            <h3 className="mb-4">Shop</h3>
            <div className="h-[1rem] w-[2rem] bg-slate-600"></div>
          </div>
        </div>
      </div>

      <div>account</div>
    </div>
  );
}

export default Header;
