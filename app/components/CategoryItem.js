import Image from "next/image";
import React from "react";

export default function CategoryItem({ category }) {
  return (
    <div
      className="flex flex-col items-center bg-purple-100   p-3 rounded-2xl hover:scale-105 
    transition-all w-[90px]
      duration-100"
    >
      <Image src={category.icon} alt={category.name} width={35} height={35} />
      <h2
        className="text-[12px]
        text-purple-700 line-clamp-1"
      >
        {category.name}
      </h2>
    </div>
  );
}
