import React from 'react'
import JobSearchGuide from '../JobSearchGuide'
import InterviewGuide from '../InterviewGuide'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../Home'
import Networking from '../Networking'
import Agencies from '../Agencies'
import Contact from '../Contact'

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
}

export default App
