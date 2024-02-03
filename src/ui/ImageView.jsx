/* eslint-disable react/prop-types */
function ImageView({ imagePath, isLast = false }) {
  console.log(imagePath);
  return (
    <div
      className={`bg-[url('src/assets/${imagePath}')] bg-cover w-[3rem] h-[3rem] rounded-[1rem] flex items-center justify-center text-white font-bold text-md hover:scale-125 transition duration-150 ease-in-out ${
        isLast ? "blur-[.8px]" : ""
      }`}
    >
      <p>{isLast ? "+5" : ""}</p>
    </div>
  );
}

export default ImageView;
