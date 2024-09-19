import React from 'react'
import * as styles from './Sidebar.module.css'
import { MdClose } from 'react-icons/md'

function Sidebar({ setIsSidebarVisible, navbarItems }) {
  return (
    <ul className={styles.sidebar}>
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
      {navbarItems.map((navbarItem) => (
        <li className={styles.sidebarNavItem}>
          <a href='/' className={styles.sidebarLinkText}>
            {navbarItem}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Sidebar
