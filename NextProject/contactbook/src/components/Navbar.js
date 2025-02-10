import React from 'react'
import styles from '../app/page.module.css'

const Navbar = () => {
  return (

    <div className="d-flex justify-content-between">
          <div>
            <img
              src="/images/logo-transparent-png.png"
              alt="Logo"
              className={styles.logo}
            />
          </div>
          <div className={`${styles.navDiv} bg-white p-2 m-5 w-50 rounded-pill`}>
            <ul className="d-flex" style={{ listStyle: 'none' }}>
              <li className={styles.listItem}>
                <a href="/Index" className={styles.link} >
                  Home
                </a>
              </li>
              <li className={styles.listItem}>
                <a href="/AddContact" className={styles.link}>
                  Add Contacts
                </a>
              </li>
              <li className={styles.listItem}>
                <a href="/AboutUs" className={styles.link}>
                  About Us
                </a>
              </li>
              <li className={styles.listItem}>
                <a href="/Login" className={styles.link}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
  )
}

export default Navbar