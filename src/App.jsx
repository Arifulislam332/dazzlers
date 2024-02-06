import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import CategoryItems from "./pages/CategoryItems";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:catid" element={<CategoryItems />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
