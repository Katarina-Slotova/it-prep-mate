import React from "react";
import styles from "./Agencies.module.css";
import interviewImg from "../../images/agencies.png";

function Agencies() {
  return (
    <div className={styles.infoSection}>
      <div>
        <img src={interviewImg} className={styles.interviewImage} />
      </div>
      <div className={styles.secondText}>
        <p>
          Recruitment agencies can be invaluable in your job search, offering
          access to roles that might not be publicly advertised.
        </p>
        <p>
          Our guide to agencies gives you a rundown of the top recruitment firms
          in Canada, how they can help you find both temporary and permanent
          positions, and tips on how to make the most of their services.
        </p>
      </div>
    </div>
  );
}

export default Agencies;
