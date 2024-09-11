import React from "react";
import Navbar from "../Navbar";
import Intro from "../Intro";
import SecondSection from "../SecondSection";
import InterviewGuide from "../InterviewGuide";
import JobSearchGuide from "../JobSearchGuide";
import Networking from "../Networking";
import Agencies from "../Agencies";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <SecondSection />
      <InterviewGuide />
      <JobSearchGuide />
      <Networking />
      <Agencies />
    </div>
  );
}

export default App;
