import {
  AlignJustify,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  X,
  Youtube,
} from "lucide-react";
import { useContext, useState } from "react";
import { Link, useResolvedPath } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { BlogContext } from "../contexts/BlogContext";

const Header = () => {
  const navItems = [
    { label: "Home", url: "/" },
    { label: "Categories", url: "/categories" },
    { label: "Save Items", url: "/saved" },
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact" },
  ];
  const [shouldNavAppear, setShouldNavAppear] = useState(false);
  const [state, dispatch] = useContext(BlogContext);

  const { pathname } = useResolvedPath();
  return (
    <>
      <div
        className={`fixed z-[100] left-1/2 -translate-x-1/2 top-10 w-full container px-5 sm:px-20 flex items-center ${
          pathname === "/" ? "justify-center" : "justify-between"
        }`}
      >
        <Link
          to="/"
          className={`text-xl lowercase font-semibold bg-white/80 backdrop-blur-lg px-5 py-2.5 rounded-xl border ${
            pathname === "/" ? "hidden" : "inline-block"
          }`}
        >
          Discover<span className="text-cyan-600">.</span>
        </Link>
        <button
          onClick={() => setShouldNavAppear(!shouldNavAppear)}
          className="bg-white/80 backdrop-blur-lg border w-10 aspect-square rounded-full flex items-center justify-center"
        >
          <AlignJustify size={18} />
        </button>
      </div>
      <AnimatePresence>
        {shouldNavAppear && (
          <>
            <div
              onClick={() => setShouldNavAppear(false)}
              className="fixed top-0 right-0 bottom-0 left-0 w-full h-full bg-transparent z-[100]"
            ></div>

            <motion.div
              onClick={() => setShouldNavAppear(false)}
              initial={{ x: "100%" }}
              whileInView={{ x: "0" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 bottom-0 bg-white shadow-2xl w-screen sm:w-[50vw] lg:w-[35vw] xl:w-[25vw] h-full z-[101]"
            >
              <button
                onClick={() => setShouldNavAppear(false)}
                className="absolute top-10 right-10 text-gray-700 z-[102]"
              >
                <X size={18} />
              </button>

              <div className="flex flex-col justify-between items-start h-full px-10 py-20">
                <div className=" flex flex-col gap-5 items-start">
                  <p className="text-sm uppercase text-gray-400 border-b w-full pb-2.5 font-semibold tracking-widest">
                    Navigations
                  </p>
                  {navItems.map((item) => (
                    <Link
                      key={item.url}
                      to={item.url}
                      className="text-3xl font-semibold text-gray-700"
                    >
                      {item.label}{" "}
                      {item.url === "/saved" && `(${state?.blogs?.length})`}
                    </Link>
                  ))}
                </div>

                <div className="flex flex-col gap-5">
                  <p className="text-sm uppercase text-gray-400 border-b w-full pb-2.5 font-semibold tracking-widest">
                    Socials
                  </p>
                  <div className="flex items-center gap-5 text-gray-700">
                    <Link to="/" target="_blank">
                      <Facebook size={24} />
                    </Link>

                    <Link to="/" target="_blank">
                      <Linkedin size={24} />
                    </Link>

                    <Link to="/" target="_blank">
                      <Instagram size={24} />
                    </Link>

                    <Link to="/" target="_blank">
                      <Twitter size={24} />
                    </Link>

                    <Link to="/" target="_blank">
                      <Youtube size={28} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
