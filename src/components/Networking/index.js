import React from "react";
import styles from "./Networking.module.css";
import interviewImg from "../../images/networking.png";

function Networking() {
  return (
    <div className={styles.infoSection}>
      <div>
        <p>
          In today's job market, networking is key to unlocking opportunities.
          Our networking section provides advice on building meaningful
          professional relationships, both online and in person.
        </p>
        <p>
          Learn how to connect with industry leaders, attend networking events,
          and leverage platforms like LinkedIn to expand your reach and grow
          your career prospects.
        </p>
      </div>
      <div className={styles.secondText}>
        <img src={interviewImg} className={styles.interviewImage} />
      </div>
    </div>
  );
}

export default Networking;
