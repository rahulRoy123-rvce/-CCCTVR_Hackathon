import styles from "./style";
import img from "./images/web3bg.png";



import {
  
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
  Partners,
  Sponsors,
  Timeline,
  Timelinefin,
} from "./components";

const App = () => (
  <div className="bg-primary">
    <div className="bg-img1 w-full overflow-hidden">
      <div className="">
        <div className={`gedit mt-8 ${styles.paddingX} ${styles.flexCenter}`}>
          <div
            className={`remove bg-primary pr-16 py-0 rounded-3xl ${styles.boxWidth}`}
          >
            <Navbar />
          </div>
        </div>

        <div className={`backchange ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <Timelinefin />
          <Timeline />
          <Sponsors />
          {/* <CardDeal /> */}

          {/* <Testimonials /> */}
          {/* <Clients /> */}
          <CTA />
          
          
        
          <Footer />
        </div>
      </div>
    </div>
  </div>
);

export default App;
