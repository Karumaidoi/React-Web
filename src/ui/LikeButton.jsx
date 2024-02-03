import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from "react";

function LikeButton() {
  const [btnState, setButtonState, addCounter] = useState(false);
  return (
    <button
      className="p-3 rounded-[.8rem] bg-rose-200 flex items-center justify-center"
      onClick={() => {
        setButtonState((state) => !state), addCounter();
      }}
    >
      {!btnState ? (
        <FaRegHeart size={18} color="white" />
      ) : (
        <FaHeart size={18} color="red" />
      )}
    </button>
  );
}

export default LikeButton;
