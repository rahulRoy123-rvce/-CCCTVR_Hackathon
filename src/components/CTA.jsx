import styles from "../style";
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

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Grab this exciting opportunity!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Don't wait, innovate! Register now for the hackathon and unleash your
        tech creativity!
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
    
  </section>

  
  
  
);

export default CTA;
