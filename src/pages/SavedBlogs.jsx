import { useContext } from "react";
import { BlogContext } from "../contexts/BlogContext";
import SectionTitle from "../components/SectionTitle";
import BlogCard from "../components/BlogCard";

const SavedBlogs = () => {
  const [state, dispatch] = useContext(BlogContext);
  return (
    <div className="container mx-auto px-5 py-20 sm:px-20">
      <SectionTitle
        heading={`Saved Items (${state?.blogs?.length})`}
        subHeading="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae sint ea unde? Aperiam magnam vel molestiae nisi omnis assumenda quas. Cumque blanditiis nemo ad placeat amet aut labore sed expedita."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
        {state?.blogs?.length > 0 &&
          state.blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} catid={blog.catid} />
          ))}
      </div>
    </div>
  );
};

export default SavedBlogs;
