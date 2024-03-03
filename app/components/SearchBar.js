import React from "react";

export default function SearchBar() {
  return (
    <div className="flex gap-3 bg-purple-100 p-3 rounded-xl items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-purple-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent outline-none w-full text-[17px] placeholder-purple-400"
      />
    </div>
  );
}
