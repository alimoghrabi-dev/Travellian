import { left, right } from "../assets";
import { gallery } from "../constants";

const Destinations = () => {
  const sliderLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const sliderRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <section
      id="explore"
      className="w-full flex items-center justify-center mt-20">
      <div className="w-[85%] flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-start justify-center">
          <h3 className="self-stretch text-[#172432] font-playfair text-[46px] md:text-[60px] font-normal leading-normal">
            Popular Destinations
          </h3>
          <div className="w-[325px] h-[3px] bg-[#FF7757]" />
          <div className="w-full flex flex-row items-center justify-between mt-4">
            <p className="font-rubik text-[13px] lg:text-[18px] font-normal leading-normal text-[#767E86]">
              Most popular destinations around the world, from historical places
              to natural wonders.
            </p>
            <div>
              <button
                onClick={sliderLeft}
                className="bg-[#172432] p-4 mr-5 hover:scale-105 transition-all rounded-xl items-center">
                <img
                  src={right}
                  className="w-[20px] h-[14px] object-contain"
                  alt="right-arrow"
                />
              </button>
              <button
                onClick={sliderRight}
                className="bg-[#FF7757] p-4 rounded-xl hover:scale-105 transition-all mt-3 md:mt-0">
                <img
                  src={left}
                  className="w-[20px] h-[14px] object-contain"
                  alt="left-arrow"
                />
              </button>
            </div>
          </div>
        </div>

        <div
          id="slider"
          className="w-full scroll-smooth flex items-start gap-8 lg:gap-14 mt-14 overflow-x-auto gallery">
          {gallery.map((gal, index) => (
            <div key={index} className="relative">
              <div className="w-[267px] lg:w-[317px] h-[321px] lg:h-[381px] flex items-start">
                <img
                  src={gal.image}
                  alt={gal.id}
                  className={`w-full h-full object-cover rounded-xl filter brightness-75`}
                />
              </div>
              <div className="absolute bottom-4 left-5 w-full flex flex-col items-start justify-center text-white">
                <p className="font-playfair font-medium text-[21px] leading-normal mb-1">
                  {gal.title}
                </p>
                <div className="w-full flex flex-row items-center justify-start">
                  <img
                    src={gal.logo}
                    alt="location-logo"
                    className="w-[20px] h-[20px] object-contain"
                  />
                  <p className="ml-3 font-rubik text-[16px] font-normal">
                    {gal.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
