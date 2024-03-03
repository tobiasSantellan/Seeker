"use client";

import React, { useState } from "react";
import BusinessItem from "./BusinessItem";

export default function BusinessList() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2 className="text-[20px] mt-3 font-bold mb-3 flex items-center justify-between">
        Top NearBy Places{" "}
        <span className="flex ">
          {count > 0 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              onClick={() => setCount(count - 1)}
              className="w-10 h-10 p-2 text-gray-400 hover:text-purple-500
            hover:bg-purple-100 cursor-pointer rounded-lg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          ) : null}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            onClick={() => setCount(count + 1)}
            className="w-10 h-10 p-2 text-gray-400 hover:text-purple-500
            hover:bg-purple-100 cursor-pointer rounded-lg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
      </h2>
      <div>
        {/* Business Item */}
        <BusinessItem />
      </div>
    </div>
  );
}
