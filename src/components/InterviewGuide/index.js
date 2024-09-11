import React from "react";
import styles from "./InterviewGuide.module.css";
import interviewImg from "../../images/InterviewGuide.png";

function InterviewGuide() {
  return (
    <div className={styles.infoSection}>
      <div>
        <p>
          Preparing for an interview can be a daunting task, but with the right
          guidance, you can approach it with confidence. Our interview guide
          offers insights into common interview questions, tips for both virtual
          and in-person interviews, and strategies to help you stand out.
        </p>
        <p>
          Whether you're prepping for a technical interview or navigating
          behavioral questions, we've got you covered.
        </p>
      </div>
      <div className={styles.secondText}>
        <img src={interviewImg} className={styles.interviewImage} />
      </div>
    </div>
  );
}

export default InterviewGuide;
