import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between w-full">
          <div className="block">
            <h1 className="editinghuh font-poppins text-gradient font-semibold ss:text-[90px] text-[40px] text-white ss:leading-[100.8px] leading-[75px]">
              Center
            </h1>
          </div>
        </div>
        <h1 className="editinghuh font-poppins text-gradient font-semibold ss:text-[90px] text-[40px] text-white ss:leading-[100.8px] leading-[75px]">
          For
        </h1>
        <h1 className="editinghuh font-poppins text-gradient font-semibold ss:text-[90px] text-[40px] text-white ss:leading-[100.8px] leading-[75px]">
          CCTV Research{" "}
        </h1>
        <h1 className="editinghuh font-poppins text-gradient font-semibold ss:text-[90px] text-[40px] text-white ss:leading-[100.8px] leading-[75px]"></h1>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      {/* <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div> */}
    </section>
  );
};

export default Hero;
