import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="container mx-auto px-5 py-20 sm:px-20">
      <div className="lg:flex py-10 gap-10 items-center justify-center">
        <div className=" overflow-hidden w-full h-full">
          <motion.div
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-screen"
          >
            <img
              src="https://images.pexels.com/photos/6214450/pexels-photo-6214450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="About Photo"
              className="w-full h-full object-cover rounded-tl-[100px] rounded-br-[100px]"
            />
          </motion.div>
        </div>

        <div className="overflow-y-hidden w-full h-full">
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.25 }}
            className="flex flex-col gap-10 items-start"
          >
            <div className="flex flex-col gap-3 items-start">
              <h2 className="text-gray-700 font-semibold text-5xl sm:text-6xl">
                About us
              </h2>
              <span className="w-[5rem] h-[2px] bg-red-600 rounded-full inline-block"></span>
            </div>
            <div className="flex flex-col  gap-5 items-start">
              <p className="text-gray-500">
                Welcome to Discover Shop, where fashion meets flair. We're
                passionate about empowering individuals to express their style
                boldly and authentically. Our handpicked selection of clothing
                and accessories reflects the latest trends while offering
                timeless elegance. With a commitment to quality and customer
                satisfaction, we strive to make every shopping experience
                exceptional. Explore our curated collections and elevate your
                wardrobe with pieces that inspire confidence and individuality.
                Welcome to the world of Discover.
              </p>
              <p className="text-gray-500">
                Your ultimate destination for fashion-forward individuals
                seeking style and sophistication. From runway-inspired trends to
                classic wardrobe staples, our carefully curated selection offers
                something for every occasion and aesthetic. With a keen eye for
                quality and a passion for style, we bring you the latest in
                fashion, ensuring each piece reflects modern elegance and
                timeless allure. Join us on a journey of self-expression and
                exploration as you discover your signature look with Discover.
              </p>
              <p className="text-gray-500">
                Where fashion is not just about clothing—it's a lifestyle. Our
                boutique offers a curated collection of the latest trends and
                timeless classics, ensuring you always step out in style. From
                statement pieces that turn heads to versatile staples that stand
                the test of time, our selection caters to every wardrobe need.
                With a commitment to quality and customer satisfaction, we
                provide a seamless shopping experience that inspires confidence
                and celebrates individuality. Discover your fashion identity and
                unleash your inner trendsetter with Discover.
              </p>
              <Link to="/" className="btn__about">
                Go Back Home
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
