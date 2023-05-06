import { apple, google } from "../assets";
import styles, { layout } from "../style";
import bill from "../images/team.jpeg.jpeg";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        About the Hackthon <br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph3} max-w-[600px] mt-3`}>
      India Computer Vision Hackathon (ICVH-2023) is a
36-hour National level hackathon jointly organized
by the Center for CCTV Research, RVCE, IEEE
RVCE Computer Society, and TechConPro Private
Limited, Bengaluru. The primary goal of this
hackathon is to design complex algorithms or
innovative solutions in the computer vision domain.
Students/research scholars across the country
are invited to build solutions to the given problem
statements
        <br />
        <h2 className={styles.heading2}>
        About RVCE <br className="sm:block hidden" />
      </h2>
      RV College of Engineering (RVCE) established in
       1963 is one of the earliest self-financing engineering
        colleges in the country. RVCE is today recognized as
         one of India's leading technical institutions.
          It is rated amongst the top five self-financing
           Engineering colleges in the country
           . RVCE offers 15 UG and 14 PG programmes 
           in engineering, 11 UG programs, and eligible
            M. Tech. & MCA programs have been accredited by
             the NBA multiple times. The institution has to its credit ove
             r 1600 National and International Journal publications, and 55
              filed patents-of which 46 were published, 16 granted patents,
               over 35.0 crores of sponsored research and consultancy-in the last five years. RVCE has es
               tablished 24 Centers of Excellence / Competence and Special Skil
               l Laboratories in collaboration with multinational companies.
                We have established an incubation center to provide opportunities to convert proof 
                of concept, leading to startups. The institution has more than 100 MOUS and collaborations wi
                th industries and institutions. Students' placement opportunities have increased
                 over time with more than 300 companies visiting the campus. The 
                 institution has over 350 qualified teaching faculty, 221 technical and administrative
                  staff, and 6000 plus students on campus
      </p>
    </div>
  </section>
);

export default Billing;
