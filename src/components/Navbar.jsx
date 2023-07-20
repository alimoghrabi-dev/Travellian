import { motion } from "framer-motion";
import { Logo, hamburgerMenu, close } from "../assets";
import { navLinks } from "../constants";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar ${
        isNavbarFixed
          ? "bg-black bg-opacity-80 fixed"
          : "bg-black bg-opacity-10 fixed"
      } w-full p-[18px] font-rubik flex items-center justify-center  
     shadow-2xl z-50`}>
      <div className="w-[98%] lg:w-[88%] h-full flex items-center justify-between z-[10200]">
        <div className="flex items-center justify-center">
          <a
            href="/"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}>
            <img
              src={Logo}
              alt="travellian-logo"
              className="w-[204px] h-[45.608px] object-contain hover:scale-95 transition-all cursor-pointer"
            />
          </a>
        </div>

        <div className="hidden lg:flex items-center justify-center gap-[32px]">
          {navLinks.map((link) => (
            <a
              onClick={() => setActive(link.title)}
              href={`#${link.id}`}
              key={link.id}
              className={`${
                active === link.title
                  ? "border-b-2 border-b-[#FF7757] scale-105"
                  : "text-white"
              } capitalize transition-all hover:scale-105 text-[18px] font-medium leading-normal cursor-pointer`}>
              {link.title}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-[16px]">
          <button
            className="text-[18px] font-medium leading-normal transition-all hover:text-[#FF7757] rounded-xl 
            px-[15px] py-[10px]">
            Login
          </button>
          <button
            className="text-[18px] font-medium leading-normal bg-[#FF7757] transition-all rounded-xl px-[15px] 
          py-[10px] hover:scale-105">
            Sign up
          </button>
        </div>

        <div className="flex lg:hidden items-center justify-center">
          <img
            src={toggle ? close : hamburgerMenu}
            onClick={() => setToggle(!toggle)}
            className={`${
              toggle ? "rotate-180" : "rotate-0"
            } w-12 h-12 object-contain cursor-pointer transition-all duration-300 ease-in-out hover:scale-105`}
          />
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: toggle ? "0%" : "-100%" }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
            className={`${
              toggle ? "flex" : "hidden"
            } menu-container navbar flex-col items-center justify-center gap-2 absolute top-[99.5%] right-0
             ${
               isNavbarFixed
                 ? "bg-black bg-opacity-80"
                 : "bg-white bg-opacity-80"
             } p-8 rounded-bl-xl`}>
            {navLinks.map((link) => (
              <a
                onClick={() => setActive(link.title)}
                key={link.id}
                href={`#${link.id}`}
                className={`${
                  active === link.title
                    ? "border-b-2 border-b-[#FF7757] scale-105"
                    : "text-[#FF7757]"
                } capitalize transition-all text-[#FF7757] mb-2 hover:scale-105 text-[16px] font-semibold leading-normal 
                cursor-pointer`}>
                {link.title}
              </a>
            ))}
            <div className="w-full h-[2px] bg-[#FF7757]" />
            <div className="flex items-center gap-[16px] mt-2">
              <button
                className="text-[18px] font-semibold leading-normal transition-all text-[#FF7757] rounded-xl 
                px-[15px] py-[10px]">
                Login
              </button>
              <button
                className="text-[18px] font-medium leading-normal bg-[#FF7757] transition-all rounded-xl px-[11px] 
                py-[7px]">
                Sign up
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
