import { travellianLogo } from "../assets";
import { navLinks } from "../constants";
import { socials } from "../constants";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#172432] relative mt-[18rem] py-24 w-full flex items-center justify-center">
      <div className="w-full xl:w-[80%] flex flex-col lg:flex-row ml-10 xl:ml-0 items-start justify-between mt-16 mr-[3rem]">
        <div className="flex flex-col items-start justify-center">
          <img
            src={travellianLogo}
            alt="travellian"
            className="max-w-[201.5px] object-contain"
          />
          <p className="text-white font-rubik text-[14px] font-normal">
            Copyright © Travellian 2023 All rights reserved
          </p>
        </div>

        <div className="flex flex-col mt-8 lg:mt-0 items-start justify-center gap-[3px]">
          <span className="text-white font-rubik text-[20px] font-semibold mb-1">
            Menu
          </span>
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.id}`}
              className="text-white font-rubik text-[14px] font-normal capitalize">
              {link.title}
            </a>
          ))}
        </div>

        <div className="flex flex-col mt-8 lg:mt-0 items-start justify-center gap-[3px]">
          <span className="text-white font-rubik text-[20px] font-semibold mb-1">
            Information
          </span>
          <p className="text-white font-rubik text-[14px] font-normal">
            Destinations
          </p>
          <p className="text-white font-rubik text-[14px] font-normal">
            Supports
          </p>
          <p className="text-white font-rubik text-[14px] font-normal">
            Terms & Conditions
          </p>
          <p className="text-white font-rubik text-[14px] font-normal">
            Privacy
          </p>
        </div>

        <div className="flex flex-col mt-8 lg:mt-0 items-start justify-center gap-[3px]">
          <span className="text-white font-rubik text-[20px] font-semibold mb-1">
            Contact Info
          </span>
          <p className="text-white font-rubik text-[14px] font-normal">
            +123 456 789
          </p>
          <p className="text-white font-rubik text-[14px] font-normal">
            info@travellian.com
          </p>
          <p className="text-white font-rubik text-[14px] font-normal">
            1245, New Yourk, USA
          </p>
        </div>

        <div className="flex flex-col mt-8 lg:mt-0 items-start justify-center gap-[3px]">
          <span className="text-white font-rubik text-[20px] font-semibold mb-1">
            Follow us on
          </span>
          <div className="flex items-center gap-2">
            {socials.map((social) => (
              <a key={social.id} href={social.link_to}>
                <img
                  src={social.logo}
                  alt={social.id}
                  className="w-[32px] h-[32px] object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className="bg-white py-[18px] md:py-[58px] px-[72px] rounded-none justify-center lg:rounded-3xl absolute w-full lg:w-[80%] xl:w-[73%] top-[-12%] 
      lg:top-[-20%] flex flex-col md:flex-row items-center gap-16">
        <h3 className="text-[#767E86] font-playfair text-[40px] md:text-[32px] xl:text-[48px] font-normal">
          Our Newsletter
        </h3>
        <div className="flex items-center gap-5">
          <input
            type="email"
            placeholder="Enter your email"
            className="outline-none bg-[#FFE8D4] font-rubik font-normal rounded-xl py-[18px] text-[#FF7757] px-[23px] md:px-[36px] 
            placeholder:text-[#FF7757] text-[16px]"
          />
          <button className="py-[18px] px-[20px] md:px-[30px] bg-[#FF7757] text-white rounded-xl font-rubik">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
