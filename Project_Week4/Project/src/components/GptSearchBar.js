import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-[8%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder="What do you like to watch today ?"
        />
        <button className="bg-red-700 m-4 col-span-3 text-white rounded-lg py-2 px-6">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
