import React from 'react'
import JobSearchGuide from '../JobSearchGuide'
import InterviewGuide from '../InterviewGuide'
import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Home from '../Home'
import Networking from '../Networking'
import NetworkingTips from '../NetworkingTips'
import Agencies from '../Agencies'
import Contact from '../Contact'
import ResumeGuide from '../ResumeGuide'
import InterviewGuidelines from '../InterviewGuidelines'
import Navbar from '../Navbar'
import UnderConstruction from '../UnderConstruction'
import Footer from '../Footer'
import Communities from '../Communities'

const router = createBrowserRouter([
  {
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/interviewguide',
        element: (
          <>
            <Navbar />
            <InterviewGuide />
            <Footer />
          </>
        ),
      },
      {
        path: '/jobsearchguide',
        element: (
          <>
            <Navbar />
            <JobSearchGuide />
            <Footer />
          </>
        ),
      },
      {
        path: '/resumeguide',
        element: (
          <>
            <Navbar />
            <ResumeGuide />
            <Footer />
          </>
        ),
      },
      {
        path: '/interviewguidelines',
        element: (
          <>
            <Navbar />
            <InterviewGuidelines />
            <Footer />
          </>
        ),
      },
      {
        path: '/networking',
        element: (
          <>
            <Navbar />
            <Networking />
            <Footer />
          </>
        ),
      },
      {
        path: '/networkingtips',
        element: (
          <>
            <Navbar />
            <NetworkingTips />
            <Footer />
          </>
        ),
      },
      {
        path: '/communities',
        element: (
          <>
            <Navbar />
            <Communities />
            <Footer />
          </>
        ),
      },
      {
        path: '/agencies',
        element: (
          <>
            <Navbar />
            <Agencies />
            <Footer />
          </>
        ),
      },
      {
        path: '/contact',
        element: (
          <>
            <Navbar />
            <Contact />
            <Footer />
          </>
        ),
      },
      {
        path: '/underconstruction',
        element: (
          <>
            <Navbar />
            <UnderConstruction />
            <Footer />
          </>
        ),
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router}></RouterProvider>
  /*    return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/interviewguide' element={<InterviewGuide />}></Route>
        <Route path='/jobsearchguide' element={<JobSearchGuide />}></Route>
        <Route path='/networking' element={<Networking />}></Route>
        <Route path='/agencies' element={<Agencies />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
				<Route path='/resumeguide' element={<ResumeGuide />}></Route>
				<Route path='/interviewguidelines' element={<InterviewGuidelines />}></Route>
      </Routes>
      <Footer />
    </>
  ) */
}

export default App
