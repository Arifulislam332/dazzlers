import { categories } from "../data/categories";
import Overlay from "../components/Overlay";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";

const Categories = () => {
  const [shouldCategoryExpand, setShouldCategoryExpand] = useState(0);
  const matches = useMediaQuery("(min-width:1024px)");

  return (
    <div className="w-screen h-screen flex flex-col lg:flex-row ">
      {categories.map((category, index) => (
        <Link
          onMouseOver={() => setShouldCategoryExpand(index)}
          to={`/categories${category.url}`}
          key={category.id}
          className={`h-full ${
            index === shouldCategoryExpand && matches ? "w-[40vw]" : "w-[20vw]"
          } overflow-hidden relative ${!matches && "w-full"}`}
        >
          <img
            className="h-full w-full object-cover"
            src={category.banner}
            alt={category.title}
          />
          <Overlay />
          <div className="absolute top-0 right-0 left-0 bottom-0 flex flex-col gap-5 items-center justify-center text-center text-white p-10 w-full h-full z-[2]">
            <h1 className="font-bold text-4xl ">{category.title}</h1>
            <p
              className={
                shouldCategoryExpand === index && matches ? "block" : "hidden"
              }
            >
              {category.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
