import { pricings } from "../constants";

const Stars = ({ src }) => {
  const loopCount = [1, 2, 3, 4, 5];
  const starPath = src;
  return (
    <div className="flex flex-row">
      {loopCount.map((index) => (
        <img key={index} src={starPath} alt="star" />
      ))}
    </div>
  );
};

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="w-full flex items-center justify-center mt-[8.5rem]">
      <div className="w-[88%] flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-end justify-center">
          <h3 className="text-[#172432] font-playfair text-[46px] md:text-[60px] font-normal leading-normal">
            Special Offer
          </h3>
          <div className="w-[195px] h-[3px] bg-[#FF7757]" />
          <div className="w-full flex flex-row items-center justify-end mt-4">
            <p className="font-rubik text-[13px] lg:text-[18px] font-normal leading-normal text-[#767E86]">
              Check out our special offer and discounts
            </p>
          </div>
        </div>

        <div
          id="sliderP"
          className="w-full pb-4 flex flex-col xl:flex-row items-center justify-center gap-[32px] mt-14 overflow-x-auto 
          gallery scroll-smooth transition-all">
          {pricings.map((price, index) => (
            <div
              key={index}
              className="flex w-[52%] mb-12 items-center justify-center flex-col">
              <div className="w-[557px] xl:w-[357px] h-[355px] xl:h-[205px] rounded-t-xl">
                <img
                  src={price.image}
                  alt={price.id}
                  className="w-full h-full object-cover rounded-t-xl"
                />
              </div>
              <div className="flex w-full flex-col items-start justify-center mt-7 ml-0 xl:ml-3">
                <h3 className="text-[#767E86] text-[21px] font-normal font-mulish">
                  {price.title}
                </h3>

                <Stars src={price.rate} />

                <p className="text-[#172432] text-[13px] font-semibold w-full font-rubik mt-3">
                  {price.about}
                </p>
                <div className="w-full h-[30px] flex flex-row items-center justify-between self-stretch mt-6">
                  <p className="text-[#767E86] font-rubik text-[16px] capitalize font-normal">
                    from{" "}
                    <span className="text-[#FF7757] ml-1 font-rubik text-[21px] font-semibold">
                      {price.price}
                    </span>
                  </p>
                  <button
                    className="py-3 px-5 bg-[#FF7757] font-rubik text-white text-[13px] uppercase rounded-lg
                   mr-4 font-normal">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
