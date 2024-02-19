import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Slider from "../components/Slider";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Home = () => {
  return (
    <div className="relative">
      <Slider />
      {/* HERO TEXT CONTENTS */}
      <div className="absolute left-1/2 top-1/2 z-[3] -translate-x-1/2 -translate-y-1/2 flex flex-col gap-10 items-center">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
            className="sm:text-6xl text-white text-5xl font-bold text-center"
          >
            Welcome to our shop - Discover, Shop, and Explore Your Favorites!
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
          >
            <Link to="/categories" className="btn">
              Explore Categories
            </Link>
          </motion.div>
        </div>
      </div>
      {/* SOCIAL LINK */}
      <div className="overflow-hidden absolute bottom-20  right-20 z-[3]">
        <motion.div
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.75, ease: "easeInOut", delay: 0.5 }}
          className=" hidden md:flex items-center gap-3"
        >
          <Link to="/" target="_blank">
            <Facebook color="white" size={24} />
          </Link>

          <Link to="/" target="_blank">
            <Linkedin color="white" size={24} />
          </Link>

          <Link to="/" target="_blank">
            <Instagram color="white" size={24} />
          </Link>

          <Link to="/" target="_blank">
            <Twitter color="white" size={24} />
          </Link>

          <Link to="/" target="_blank">
            <Youtube color="white" size={28} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
