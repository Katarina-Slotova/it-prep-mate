import React from "react";
import Navbar from "../Navbar";
import Intro from "../Intro";
import SecondSection from "../SecondSection";
import InterviewGuide from "../InterviewGuide";
import JobSearchGuideSection from "../JobSearchGuideSection";
import Networking from "../Networking";
import Agencies from "../Agencies";

function Home() {
  return (
    <div>
      <Navbar />
      <Intro />
      <SecondSection />
      <InterviewGuide />
      <JobSearchGuideSection />
      <Networking />
      <Agencies />
    </div>
  );
}

export default Home;
