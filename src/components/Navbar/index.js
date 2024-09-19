import React from 'react'
import * as styles from './Navbar.module.css'
import logo from '../../images/NewLogo.png'
import Sidebar from '../Sidebar'
import { FaBars } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import Agencies from '../AgenciesSection'

function Navbar() {
  const [isSidebarVisible, setIsSidebarVisible] = React.useState(false)
  const navigate = useNavigate()
  const navbarItems = [
    'Interview Guide',
    'Job Search Guide',
    'Networking',
    'Agencies',
    'Contact Us',
  ]

  function showSidebar() {
    setIsSidebarVisible(!isSidebarVisible)
  }

  const routeChange = (navbarItemIndex) => {
    const path = [
      '/interviewguide',
      '/jobsearchguide',
      'networking',
      'agencies',
      'contact',
    ]
    // WHY IS THIS NAVIGATE NOT WORKING PROPERLY??
    navigate('/')
    navigate(path[navbarItemIndex])
  }

  return (
    <nav className={styles.navbar}>
      <div>
        <Link to='/'>
          <img className={styles.styleLogo} src={logo} alt='website logo' />
        </Link>
      </div>

      {isSidebarVisible ? (
        <Sidebar
          setIsSidebarVisible={setIsSidebarVisible}
          navbarItems={navbarItems}
        />
      ) : (
        <></>
      )}

      <div className={styles.navbarWrapper}>
        <ul className={styles.navLinks}>
          {navbarItems.map((navbarItem, index) => (
            <li
              className={styles.navLinkItem}
              onClick={() => routeChange(index)}
              key={index}
            >
              {navbarItem}
            </li>
          ))}
          <li>
            <button onClick={showSidebar} className={styles.menu}>
              <FaBars size={24} />
              {''}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
