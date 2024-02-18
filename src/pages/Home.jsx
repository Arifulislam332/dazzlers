import { Link } from "react-router-dom";
import Slider from "../components/Slider";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Home = () => {
  return (
    <div className="relative">
      <Slider />
      {/* HERO TEXT CONTENTS */}
      <div className="absolute left-1/2 top-1/2 z-[3] -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5 items-center">
        <h3 className="sm:text-6xl text-white text-5xl font-bold text-center">
          Discover Your Signature Look
        </h3>
        <Link to="/categories" className="btn">
          Explore Categories
        </Link>
      </div>
      {/* SOCIAL LINK */}
      <div className=" hidden absolute bottom-20  right-20 z-[3] md:flex items-center gap-3">
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
          <Youtube color="white" size={28}/>
        </Link>
        
      </div>
    </div>
  );
};

export default Home;
