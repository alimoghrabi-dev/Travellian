import { inputs, navLinks } from "../constants";
import { arrow } from "../assets";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full h-[146.64vh] sm:h-[162.64vh] lg:h-[110vh] flex items-center justify-center">
      <div className="w-full h-[72%] md:h-[90%] flex flex-col items-start justify-evenly z-40 self-stretch mt-[8rem] sm:mt-24">
        <div className="flex flex-col items-start justify-center ml-[4rem] md:ml-[8rem]">
          <h1 className="font-playfair text-[38px] md:text-[58px] font-normal leading-none">
            Start your unforgettable <br /> journey with us.
          </h1>
          <p className="font-rubik text-[15px] md:text-[20px] font-normal leading-normal mt-5">
            The best travel for your jouney begins now
          </p>
        </div>

        <div
          className="w-[68%] xl:w-[78%] h-[520px] sm:h-[320px] lg:h-[220px] xl:h-[150px] mb-12 relative grid grid-cols-1 sm:grid-cols-2 xl:flex flex-row
           items-center justify-center bg-white rounded-tr-3xl lg:rounded-r-3xl mt-12">
          {inputs.map((inp, index) => (
            <div
              key={index}
              className="w-[50%] ml-8 xl:ml-0 xl:w-[20%] h-full flex flex-col items-start justify-center">
              <p className="text-[#767E86] uppercase text-[14px] mb-1 font-semibold font-rubik">
                {inp.title}
              </p>
              <div className="flex items-center justify-center border-b-2 border-black">
                <input
                  readOnly
                  type={inp.type}
                  placeholder={inp.placeholder}
                  className="w-[140px] outline-none text-[#172432] py-2 font-playfair placeholder:text-[#172432] placeholder:text-[16px] 
                  font-medium"
                />
                {index === navLinks.length - 5 ? null : (
                  <img src={inp.logo} alt="down" className="cursor-pointer" />
                )}
              </div>
            </div>
          ))}
          <div className="absolute lg:top-0 max-width-absolute right-0 bottom-0">
            <button
              className="bg-[#FF7757] px-4 py-5 lg:py-0 font-playfair w-full h-full flex flex-row items-center 
              justify-center gap-[36px] lg:gap-[10px] rounded-br-3xl lg:rounded-r-2xl text-[24px] capitalize font-normal leading-[2.6rem]">
              book <br className="hidden lg:block" /> now
              <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
