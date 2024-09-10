import React from "react";
import styles from "./InterviewGuide.module.css";
import interviewImg from "../../images/interview.png";

function InterviewGuide() {
  return (
    <div className={styles.infoSection}>
      <div>
        <p>
          Whether you're navigating the job market or gearing up for interviews,
          we’ve gathered everything you need in one place.
        </p>
        <p>
          Let’s turn your dreams into reality and build the future you’ve always
          envisioned.
        </p>
      </div>
      <div className={styles.secondText}>
        <img src={interviewImg} className={styles.interviewImage} />
      </div>
    </div>
  );
}

export default InterviewGuide;
