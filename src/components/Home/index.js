import React from "react";
import Navbar from "../Navbar";
import Intro from "../Intro";
import SecondSection from "../SecondSection";
import InterviewGuideSection from "../InterviewGuideSection";
import JobSearchGuideSection from "../JobSearchGuideSection";
import NetworkingSection from "../NetworkingSection";
import AgenciesSection from "../AgenciesSection";

function Home() {
  return (
    <div>
      <Navbar />
      <Intro />
      <SecondSection />
      <InterviewGuideSection />
      <JobSearchGuideSection />
      <NetworkingSection />
      <AgenciesSection />
    </div>
  );
}

export default Home;
