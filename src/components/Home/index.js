import React from 'react'
import Navbar from '../Navbar'
import Intro from '../Intro'
import SecondSection from '../SecondSection'
import InterviewGuideSection from '../InterviewGuideSection'
import JobSearchGuideSection from '../JobSearchGuideSection'
import NetworkingSection from '../NetworkingSection'
import AgenciesSection from '../AgenciesSection'
import Footer from '../Footer'

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
      <Footer />
    </div>
  )
}

export default Home
