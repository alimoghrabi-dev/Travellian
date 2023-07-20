import { plans } from "../constants";

const Stars = ({ src }) => {
  const loopCount = [1, 2, 3, 4, 5];
  const starPath = src;
  return (
    <div className="flex flex-row">
      {loopCount.map((index) => (
        <img
          key={index}
          src={starPath}
          alt="star"
          className="w-5 h-5 object-contain"
        />
      ))}
    </div>
  );
};

const Plan = () => {
  return (
    <section className="w-full flex items-center justify-center mt-20">
      <div className="w-[85%] flex flex-col xl:flex-row items-center justify-center gap-[36px]">
        <div className="w-[96.45%] xl:w-[40%] flex flex-col items-start justify-center">
          <h3 className="self-stretch text-[#172432] font-playfair text-[46px] md:text-[60px] font-normal leading-normal">
            Trip Planners
          </h3>
          <div className="w-[189px] h-[3px] bg-[#FF7757] mt-1" />
          <div className="w-full flex flex-row items-center justify-between mt-4">
            <p className="font-rubik mt-1 text-[13px] w-[65%] xl:w-full lg:text-[18px] font-normal leading-normal text-[#767E86]">
              20 years from now you will be more disappointed by the things that
              you didn’t do. Stop regretting and start travelling, start
              throwing off the bowlines.
            </p>
          </div>
          <div className="relative mt-12">
            <button className="p-[20px] text-white rounded-xl bg-[#FF7757]">
              View all trip plans
            </button>
            <div className="bg-[#172432] rounded-sm -z-10 w-[43px] h-[43px] absolute top-[-20%] left-[-8%]" />
            <div className="bg-[#767E86] rounded-sm -z-10 w-[43px] h-[43px] absolute bottom-[-20%] right-[-8%]" />
          </div>
        </div>
        <div className="w-full xl:w-[60%] flex flex-col lg:flex-row items-center mt-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="flex w-full flex-col items-center justify-center relative">
              <div className="flex w-full items-center justify-center">
                <img
                  src={plan.image}
                  alt={plan.id}
                  className={`${
                    index === plans.length - 3 ? "mt-0" : "mt-[6.5rem] lg:mt-0"
                  } xl:w-[205px] lg:w-[275px] w-[80%] h-[465px] lg:h-[365px] xl:h-[285px] hover:translate-y-[-6rem] 
                  ease-in-out transition-all object-cover cursor-pointer rounded-3xl duration-300`}
                />
              </div>
              <div className="absolute xl:w-[190px] lg:w-[275px] w-[70%] bottom-0 -z-10 flex flex-col items-start justify-center">
                <span className="text-[#172432] text-[18px] font-normal font-rubik">
                  {plan.price}
                </span>
                <p className="text-[#172432] text-[24px] font-medium font-playfair capitalize">
                  {plan.place}
                </p>
                <div className="w-[90%] xl:w-full flex items-center justify-between">
                  <Stars src={plan.rate} />
                  <span className="text-[#172432] text-[16px] xl:text-[12px] font-normal font-rubik">
                    {plan.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plan;
