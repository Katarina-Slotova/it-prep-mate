import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../images/ItPrepMate.png'
import Sidebar from '../Sidebar'
import { FaBars } from 'react-icons/fa'

function Navbar() {
  const [isSidebarVisible, setIsSidebarVisible] = React.useState(false)

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

      {isSidebarVisible ? <Sidebar setIsSidebarVisible={setIsSidebarVisible} /> : <></>}

      <div className={styles.navbarWrapper}>
        <ul className={styles.navLinks}>
          <li className={styles.navLinkItem}>
            <a href='/' className={styles.navLinkText}>
              Interview Guide
            </a>
          </li>
          <li className={styles.navLinkItem}>
            <a href='/' className={styles.navLinkText}>
              Job Search Guide
            </a>
          </li>
          <li className={styles.navLinkItem}>
            <a href='/' className={styles.navLinkText}>
              Networking
            </a>
          </li>
          <li className={styles.navLinkItem}>
            <a href='/' className={styles.navLinkText}>
              Agencies
            </a>
          </li>
          <li className={styles.navLinkItem}>
            <a href='/' className={styles.navLinkText}>
              Contact Us
            </a>
          </li>
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
