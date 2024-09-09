import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../images/ItPrepMate.png'
import Sidebar from '../Sidebar'
import { FaBars } from 'react-icons/fa'

function Navbar() {
  const [isSidebarVisible, setIsSidebarVisible] = React.useState(false)
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

  return (
    <nav className={styles.navbar}>
      <div>
        <a href='/'>
          <img className={styles.styleLogo} src={logo} alt='website logo' />
        </a>
      </div>

      {isSidebarVisible ? (
        <Sidebar setIsSidebarVisible={setIsSidebarVisible} navbarItems={navbarItems} />
      ) : (
        <></>
      )}

      <div className={styles.navbarWrapper}>
        <ul className={styles.navLinks}>
          {navbarItems.map((navbarItem) => (
            <li className={styles.navLinkItem}>
              <a href='/' className={styles.navLinkText}>
                {navbarItem}
              </a>
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
