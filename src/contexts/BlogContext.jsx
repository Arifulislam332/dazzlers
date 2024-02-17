import { createContext, useReducer } from "react";

export const BlogContext = createContext();

const initialState = {
  blogs: JSON.parse(localStorage.getItem("blogs")) || [],
};

const blogReducer = (state, action) => {
  switch (action.type) {
    case "SAVE":
      state.blogs.push(action.payload);
      localStorage.setItem("blogs", JSON.stringify(state.blogs));
      return state;

    case "REMOVE":
      state.blogs = state.blogs.filter((blog) => blog.id !== action.payload);
      localStorage.setItem("blogs", JSON.stringify(state.blogs));
      return state;

    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogReducer, initialState);

  return (
    <BlogContext.Provider value={[state, dispatch]}>
      {children}
    </BlogContext.Provider>
  );
};
