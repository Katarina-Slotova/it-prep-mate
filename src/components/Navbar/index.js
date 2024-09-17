import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../images/NewLogo.png'
import Sidebar from '../Sidebar'
import { FaBars } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

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
    navigate(path[navbarItemIndex])
  }

  return (
    <nav className={styles.navbar}>
      <div>
        <a href='/'>
          <img className={styles.styleLogo} src={logo} alt='website logo' />
        </a>
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
