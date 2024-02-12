import { useParams } from "react-router-dom";
import { categories } from "../data/categories";
import NotFound from "./NotFound";
import SectionTitle from "../components/SectionTitle";
import BlogCard from "../components/BlogCard";

const CategoryItems = () => {
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
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
        {CategoryItem.items.length > 0 &&
          CategoryItem.items.map((item) => (
            <BlogCard key={item.id} blog={item} catid={CategoryItem.url} />
          ))}
      </div>
    </div>
  );
};

export default CategoryItems;
