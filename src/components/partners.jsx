import { quotes } from "../assets";
import { clients } from "../constants";
import styles from "../style";
import img1 from "../images/shardeumwe.png";
import img2 from "../images/filecoinwe.png";
import img3 from "../images/devfoliowe.png";

const Partners = () => (
  <section id="partners" class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex justify-center mb-20">
        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
          <div className="flex justify-between">
            <h2 className={styles.heading21}>
              Partners <br className="sm:block hidden" />
            </h2>
          </div>
          <div className="flex justify-center">
            <div class="h-1 w-52 bg-indigo-500 rounded"></div>
          </div>
        </div>
      </div>
      <div class="smallsize flex flex-wrap">
        <div class="xl:w-1/4  md:w-1/2 p-4 hover:scale-105">
          <div class="bg-black-gradient-2 p-6 rounded-lg  hover:shadow-md hover:shadow-white">
            <img
              class="h-40 rounded w-full object-cover object-center mb-6"
              src={img1}
              alt="content"
            />

            <p class="leading-relaxed text-gradient text-2xl text-center">
              Sponsors
            </p>
          </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4 hover:scale-105">
          <div class="bg-black-gradient-2 p-6 rounded-lg  items-center hover:shadow-md hover:shadow-white">
            <img
              class="smallimg itmes-center mx-16 rounded object-cover object-center mb-6"
              src={img2}
              alt="content"
            />

            <p class="leading-relaxed text-gradient text-2xl text-center">
              Sponsors
            </p>
          </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4 hover:scale-105">
          <div class="bg-black-gradient-2 p-6 rounded-lg   hover:shadow-md hover:shadow-white">
            <img
              class="w-100 rounded w-full object-cover object-center mb-6 pb-12"
              src={img3}
              alt="content"
            />

            <p class="leading-relaxed text-gradient text-2xl text-center">
              Sponsors
            </p>
          </div>
        </div>
        {/* <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-black-gradient-2 p-6 rounded-lg">
            <img
              class="h-40 rounded w-full object-cover object-center mb-6"
              src="https://dummyimage.com/723x403"
              alt="content"
            />
            <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
              SUBTITLE
            </h3>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
              San Francisco
            </h2>
            <p class="leading-relaxed text-bold text-center">Title Sponsors</p>
          </div>
        </div> */}
      </div>
    </div>
  </section>
);

export default Partners;
