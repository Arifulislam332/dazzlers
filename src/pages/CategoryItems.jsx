import { useParams } from "react-router-dom";
import { categories } from "../data/categories";
import NotFound from "./NotFound";
import SectionTitle from "../components/SectionTitle";
import BlogCard from "../components/BlogCard";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const CategoryItems = () => {
  const [shouldAllItemsAppear, setShouldAllItemsAppear] = useState(false);

  const { catid } = useParams();
  const CategoryItem = categories.find((item) => item.url === "/" + catid);

  if (!CategoryItem) {
    return <NotFound />;
  }

  return (
    <div className="container mx-auto p-20">
      <SectionTitle
        heading={CategoryItem.title}
        subHeading={CategoryItem.description}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 mb-10">
        {CategoryItem.items.length > 0 &&
          !shouldAllItemsAppear &&
          CategoryItem.items
            .slice(0, 8)
            .map((item, index) => (
              <BlogCard
                key={item.id}
                blog={item}
                index={index}
                catid={CategoryItem.url}
              />
            ))}

        {CategoryItem.items.length > 0 &&
          shouldAllItemsAppear &&
          CategoryItem.items.map((item, index) => (
            <BlogCard
              key={item.id}
              blog={item}
              index={index}
              catid={CategoryItem.url}
            />
          ))}
      </div>
      {!shouldAllItemsAppear && (
        <div className="flex justify-center items-center">
          <button
            onClick={() => setShouldAllItemsAppear(true)}
            className="flex justify-center items-center w-20 h-20 rounded-full animate-bounce hover:bg-gray-200"
          >
            <ChevronDown color="gray" size={50} />
          </button>
        </div>
      )}

      {shouldAllItemsAppear && (
        <div className="flex justify-center items-center">
          <button
            onClick={() => setShouldAllItemsAppear(false)}
            className="flex justify-center items-center w-20 h-20 rounded-full animate-bounce hover:bg-gray-200"
          >
            <ChevronUp color="gray" size={50} />
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryItems;
