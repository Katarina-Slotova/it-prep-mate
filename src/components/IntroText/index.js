import React from "react";
import styles from "./IntroText.module.css";

function IntroText() {
  return (
    <div>
      <h1>IT Prep Mate</h1>
      {/* <h3>Transform Your Canadian Tech Future with ItPrepMate</h3> */}
      <p className={styles.introText}>
        ItPrepMate is your all-in-one solution, designed specifically for IT
        professionals ready to launch their careers in Canada. Let’s turn your
        dreams into reality and build the future you’ve always envisioned.
      </p>
    </div>
  );
}

export default IntroText;
