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
import Agencies from '../Agencies'
import Contact from '../Contact'
import ResumeGuide from '../ResumeGuide'
import Navbar from '../Navbar'
import Footer from '../Footer'

const router = createBrowserRouter([
  {
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/interviewguide',
        element: <InterviewGuide />,
      },
      {
        path: '/jobsearchguide',
        element: <JobSearchGuide />,
      },
      {
        path: '/resumeguide',
        element: <ResumeGuide />,
      },
      {
        path: '/networking',
        element: <Networking />,
      },
      {
        path: '/agencies',
        element: <Agencies />,
      },
      {
        path: '/contact',
        element: <Contact />,
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
      </Routes>
      <Footer />
    </>
  ) */
}

export default App
