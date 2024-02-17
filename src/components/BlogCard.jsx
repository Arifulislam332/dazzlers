import { useContext } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../contexts/BlogContext";

const BlogCard = ({ blog, catid }) => {
  const [state, dispatch] = useContext(BlogContext);
  console.log(state);
  return (
    <div className="w-full p-5 rounded-2xl bg-gray-50 flex flex-col gap-5 shadow-md">
      <Link
        to={`/categories${catid}/${blog.id}`}
        className="w-full aspect-[5/4] overflow-hidden rounded-xl"
      >
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-covern hover:scale-125 transition duration-300 ease-in-out"
        />
      </Link>
      <div className="flex flex-col gap-2.5">
        <h5 className="text-2xl font-medium">{blog.title}</h5>
        <p className="text-gray-600">{blog.description.substring(0, 60)}...</p>
      </div>
      <div className="flex items-center justify-between gap-5">
        <Link to={`/categories${catid}/${blog.id}`} className="btn">
          Read More
        </Link>
        <button
          onClick={() => dispatch({ type: "SAVE", payload: blog })}
          className="btn__secondary"
        >
          Save Thread
        </button>
      </div>
    </div>
  );
};
export default BlogCard;
