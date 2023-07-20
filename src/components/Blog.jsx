import { blog, blogArrow } from "../assets";

const Blog = () => {
  return (
    <section
      id="blog"
      className="w-full flex items-center justify-center mt-20">
      <div className="w-[85%] flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-start justify-center">
          <h3 className="self-stretch text-[#172432] font-playfair text-[46px] md:text-[60px] font-normal leading-normal">
            Our Blog
          </h3>
          <div className="w-[145px] h-[3px] bg-[#FF7757]" />
          <div className="w-full flex flex-row items-center justify-between mt-4">
            <p className="font-rubik text-[13px] lg:text-[18px] font-normal leading-normal text-[#767E86]">
              An insight the incredible experience in the world
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-[32px] mt-16 md:mt-1">
          <div className="md:w-[802px] w-[95%] h-[493px] flex items-center">
            <img
              src={blog}
              alt="blog"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="flex w-[95%] md:w-[80%] py-0 md:py-[6rem] flex-col items-start">
            <h3 className="text-[#172432] font-playfair text-[38px] lg:text-[45px] font-normal mb-4 leading-tight">
              Beautiful Italy <br /> Let’s travel
            </h3>
            <p className="mt-2 text-[#172432] font-rubik text-[15px] xl:text-[18px] font-normal leading-normal">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system and expound the actual teachings of the
              great explorer of the truth, the master- builder of human
              happiness. No one rejects, dislike, or avoids plasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremly painful. Nor again is there anyone who loves or pursues.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <span className="cursor-pointer mb-1 capitalize text-[#FF7757] text-[18px] font-normal">
                read more
              </span>
              <img
                src={blogArrow}
                alt="arrow"
                className="w-5 h-5 object-contain cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
