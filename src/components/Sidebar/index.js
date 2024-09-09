import React from 'react'
import styles from './Sidebar.module.css'
import { MdClose } from 'react-icons/md'

function Sidebar({setIsSidebarVisible}) {
  return (
    <ul
      className={styles.sidebar}
      //style={{ visibility: isSidebarVisible ? 'visible' : 'hidden' }}
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
  )
}

export default Sidebar
