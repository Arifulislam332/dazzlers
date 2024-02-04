import { categories } from "../data/categories";
import Overlay from "../components/Overlay";
import { useState } from "react";
import { BOX_WIDTH } from "../constants/index";
import { Link } from "react-router-dom";

const Categories = () => {
  const [shouldCategoryExpand, setShouldCategoryExpand] = useState(0);

  const expandBoxWidth = BOX_WIDTH * (categories.length - 1);

  return (
    <div className="w-screen h-screen flex ">
      {categories.map((category, index) => (
        <Link
          onMouseOver={() => setShouldCategoryExpand(index)}
          to={""}
          key={category.id}
          className={`h-full ${
            index === shouldCategoryExpand
              ? `w-[calc(100vw-${expandBoxWidth}px)]`
              : `w-[${BOX_WIDTH}px]`
          } overflow-hidden relative transition-[width] duration-300 ease-in-out`}
        >
          <img
            className="h-full w-full object-cover"
            src={category.banner}
            alt={category.title}
          />
          <Overlay />
          <div className="absolute top-0 right-0 left-0 bottom-0 flex flex-col gap-5 items-center justify-center text-center text-white p-10 w-full h-full z-[2]">
            <h1 className="font-bold text-4xl ">{category.title}</h1>
            <p className="hidden">{category.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
