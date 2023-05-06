import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import img from "../images/bobdao12.png";

const Footer = () => (
  <section
    id="footer"
    className={`${styles.flexCenter} ${styles.paddingY} flex-col`}
  >
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col ml-90">
       
      </div>

      <div className="flex-[0.3] w-full flex flex-row justify-between items-end flex-wrap md:mt-0 mt-10">
        <div className="flex justify-end">
          <p className={`${styles.paragraph2} items-end mt-16`}>
            
          </p>
        </div>
      </div>
    </div>
    <div className="flex justify-between">
        <h2 className={styles.heading21}>
          Rules and Regulations <br className="sm:block hidden" />
        </h2>

        
      </div>
   
      <div className="flex justify-center">
        <div class="h-1 w-full bg-indigo-500 rounded"></div>
      </div>

      <div>
    <p class="leading-relaxed text-gradient text-2xl text-center">
      <ul>
        <li>Team Size: Min- 3 andMax – 5 in a team of Students / Research
Scholars</li>
        <li>Selection : 1st – Online Pre-Selection round, 2nd– Physical round</li>
        <li>Date: 26th May 2023 to 28th May 2023</li>
        <li>Registration fee: INR 1000/- per team + 2000/- on Selection for
Final/Physical Round</li>
<li>Registration Link</li>
<li>Last date for registration: 15th May 2023</li>
<li>GOT ANY QUESTIONS? Email: ccctvresearch@gmail.com
Mobile 9739866723</li>
      </ul>
          </p>
    </div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
     
      <p className="font-poppins font-normal  text-[18px] leading-[27px] text-white">
      Chief Patron-<br/>
Dr. M.P. Shyam, President, RSST<br/>
Patrons-<br/>
Sri. K. G. Subbarama Setty, Hon. Treasurer, RSST<br/>
Dr.(h.c.) A.V. S. Murthy, Hon. Secretary, RSST<br/>
Sri. D. P. Nagaraj, Hon. Joint Secretary, RSST<br/>
Dr. K. N. Subramanya, Principal, RVCE<br/>
Dr. K.S. Geetha, Vice-Principal, RVCE
        {/* <br />
        Ph: +919008358200 E-mail: */}
      </p>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
     
      <p className="font-poppins font-normal  text-[18px] leading-[27px] text-white">
      For more details contact<br/>
Dr.Mohana, Asst Prof, CSE RVCE,<br/>
ccctvresearch@gmail.com 9739866723
        {/* <br />
        Ph: +919008358200 E-mail: */}
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
    <p>Ph: +91</p>
  </section>
);

export default Footer;
