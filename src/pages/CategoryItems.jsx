import { useParams } from "react-router-dom";

const CategoryItems = () => {
  const { catid } = useParams();
  console.log(catid);

  return <div>CategoryItems</div>;
};

export default CategoryItems;
