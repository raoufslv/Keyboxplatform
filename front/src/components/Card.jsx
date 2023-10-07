import React from "react";

const Card = ({ Title, Description, Image, tag }) => {
  return (
    <div className="flex flex-col gap-2 p-3 rounded bg-white w-[18rem]">
      <img
        src={Image}
        alt="img"
        className="w-full rounded-lg object-cover object-center"
      />
      {tag && (
        <p className="bg-secondary/30 rounded-lg w-fit px-2 py-1">{tag}</p>
      )}
      <h3 className="font-bold text-xl">{Title}</h3>
      <p className="text-gray-500">{Description}</p>

      <a
        href="/course"
        className=" text-sm text-end mt-2 hover:text-secondary transition duration-300 ease-in-out"
      >
        {tag ? "More details" : "Modifier"}
        <img
          src="icons/arrow_right.svg"
          alt="arrow_right icon"
          className="inline-block w-4 h-4 ml-2"
        />
      </a>
    </div>
  );
};

export default Card;
