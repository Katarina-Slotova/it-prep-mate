import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../images/ItPrepMate.png'
import { FaBars } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'

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

      <ul
        className={styles.sidebar}
        style={{ visibility: isSidebarVisible ? 'visible' : 'hidden' }}
      >
        <li>
          <button
            onClick={() => {
              setIsSidebarVisible(false)
            }}
            className={styles.menu}
          >
            <MdClose size={30} />
            {''}
          </button>
        </li>
        <li className={styles.sidebarNavItem}>
          <a
            href='/'
            className={styles.sidebarLinkText}
            onClick={() => setIsSidebarVisible(false)}
          >
            Interview Guide
          </a>
        </li>
        <li className={styles.sidebarNavItem}>
          <a
            href='/'
            className={styles.sidebarLinkText}
            onClick={() => setIsSidebarVisible(false)}
          >
            Job Search Guide
          </a>
        </li>
        <li className={styles.sidebarNavItem}>
          <a
            href='/'
            className={styles.sidebarLinkText}
            onClick={() => setIsSidebarVisible(false)}
          >
            Networking
          </a>
        </li>
        <li className={styles.sidebarNavItem}>
          <a
            href='/'
            className={styles.sidebarLinkText}
            onClick={() => setIsSidebarVisible(false)}
          >
            Agencies
          </a>
        </li>
        <li className={styles.sidebarNavItem}>
          <a
            href='/'
            className={styles.sidebarLinkText}
            onClick={() => setIsSidebarVisible(false)}
          >
            Contact Us
          </a>
        </li>
      </ul>

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
