import { useNavigate, useParams } from "react-router-dom";
import { categories } from "../data/categories";
import NotFound from "../pages/NotFound";
import SectionTitle from "../components/SectionTitle";

const BlogDetails = () => {
  const navigate = useNavigate();
  const { catid, blogid } = useParams();

  const selectedCategory = categories.find(
    (category) => category.url === "/" + catid
  );

  if (!selectedCategory) {
    return <NotFound />;
  }

  const selectedBlog = selectedCategory.items.find(
    (item) => item.id === +blogid
  );

  if (!selectedBlog) {
    return <NotFound />;
  }

  return (
    <div className="container mx-auto py-20">
      <SectionTitle
        heading={selectedBlog.title}
        subHeading={selectedBlog.description}
      />

      <div className="mt-20 w-full h-full aspect-[5/4] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={selectedBlog.image}
          alt={selectedBlog.title}
        />
      </div>

      <div className="mt-20 flex justify-center">
        <button onClick={() => navigate(-1)} className="btn__outline">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default BlogDetails;
