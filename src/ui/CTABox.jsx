function CTABox() {
  return (
    <div className="items-center justify-center self-center">
      <div className="backdrop-blur-md backdrop-brightness-150 h-[9rem] w-[12rem]  rounded-md bg-[url('src/assets/plants.jpg')] bg-cover  flex items-center flex-col">
        <div className="mt-3">
          <h3 className="font-bold text-lg text-white">GET 30% OFF</h3>
          <p className="text-white leading-5 mb-4">
            Share your refferal
            <br />
            code and get discount!
          </p>
          <button className="px-12 py-2 bg-yellow-500 rounded-lg text-black font-bold text-sm">
            Share
          </button>
        </div>
      </div>
    </div>
  );
}

export default CTABox;
