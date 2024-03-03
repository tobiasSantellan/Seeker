"use client";

import React, { useEffect, useState } from "react";
import Data from "../Shared/Data";
import CategoryItem from "./CategoryItem";

export default function CategoryList() {
  const [category, setCategory] = useState();

  useEffect(() => {
    setCategory(Data.CategoryListData);
  }, []);

  return (
    <div>
      <h2
        className="text-[20px] mt-3 
        font-bold mb-3"
      >
        Select Your Fav Category
      </h2>
      {category ? (
        <div className="flex gap-6 mb-5">
          {category.map((item, index) => (
            <div key={index}>
              {" "}
              <CategoryItem category={item} />{" "}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
