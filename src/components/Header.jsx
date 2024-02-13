import { AlignJustify } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed z-[100] left-1/2 -translate-x-1/2 top-10 w-full container px-20 flex items-center justify-between">
      <Link
        to="/"
        className="text-xl font-semibold bg-white/80 backdrop-blur-lg px-5 py-2.5 rounded-xl border"
      >
        Discover Dynamo
      </Link>
      <button className="bg-white/80 backdrop-blur-lg border w-10 aspect-square rounded-full flex items-center justify-center">
        <AlignJustify size={18}/>
      </button>
    </div>
  );
};

export default Header;
