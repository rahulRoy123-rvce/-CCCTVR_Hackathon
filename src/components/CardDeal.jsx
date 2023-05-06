import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

// React.useEffect(() => {
//   const script = document.createElement("script");
//   script.src = "https://apply.devfolio.co/v2/sdk.js";
//   script.async = true;
//   script.defer = true;
//   document.body.appendChild(script);
//   return () => {
//     document.body.removeChild(script);
//   };
// }, []);

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>

      <Button hackathonSlug="online-demo-hackathon" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
