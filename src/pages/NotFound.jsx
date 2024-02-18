import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container mx-auto py-20 w-full h-screen flex flex-col justify-center items-center gap-10">
      <h2 className="text-4xl font-medium text-gray-700">Page not found</h2>
      <Link to="/" className="btn">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
