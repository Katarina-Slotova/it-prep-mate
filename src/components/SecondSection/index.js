import React from "react";
import styles from "./SecondSection.module.css";
import heroImg from "../../images/job.jpeg";

function SecondSection() {
  return (
    <div className={styles.infoSection}>
      <div>
        <img src={heroImg} className={styles.jobImage} />
      </div>
      <div className={styles.secondText}>
        <p>
          Whether you're navigating the job market or gearing up for interviews,
          we’ve gathered everything you need in one place.
        </p>
        <p>
          Let’s turn your dreams into reality and build the future you’ve always
          envisioned.
        </p>
      </div>
    </div>
  );
}

export default SecondSection;
