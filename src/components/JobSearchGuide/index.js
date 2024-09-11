import React from "react";
import styles from "./JobSearchGuide.module.css";
import interviewImg from "../../images/JobSearchGuide.png";

function JobSearchGuide() {
  return (
    <div className={styles.infoSection}>
      <div>
        <img src={interviewImg} className={styles.interviewImage} />
      </div>
      <div className={styles.secondText}>
        <p>
          Finding a job in Canada requires a well-planned approach. Our job
          search guide walks you through the essential steps, from crafting a
          tailored resume to navigating the top job portals.
        </p>
        <p>
          With tips on applying to different industries and strategies for
          increasing your chances of success, this guide is your roadmap to
          landing your next role.
        </p>
      </div>
    </div>
  );
}

export default JobSearchGuide;
