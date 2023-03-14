import React, { Component } from 'react'
import { Outlet, Link } from "react-router-dom";
import styles from '../css/navbar.module.css'


export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className={styles.navbar}>
            <nav>
                <div className={styles.logo}>
                    Intelligent Investor
                </div>
                <div className={styles.main}>
                    <ul>
                        <Link to='/'>
                        <li>home</li>
                        </Link>
                        <Link to='/about'>
                        <li>about</li>
                        </Link>
                        <Link to='/contact'>
                        <li>contact</li>
                        </Link>
                        <Link to='/news'>
                        <li>news</li>
                        </Link>
                        {/* <Link to='/news'>
                        <li>services</li>
                        </Link> */}
                        <div className={styles.services_dropdown}>
                        <button className={styles.dropServicesBtn}>services</button>
                        <div className={styles.services_content}>
                            <Link to='/stock_search'>Stocks</Link>
                        </div>
                        </div>
                    </ul>
                </div>
                <div className={styles.end}>
                    <ul>
                        <Link to='/sigin'>
                            <li>Signin</li>
                        </Link>
                        <Link to='/register'>
                            <li>Register</li>
                        </Link>
                    </ul>
                </div>
            </nav>
        </div>
        <Outlet />
      </div>

    )
  }
}
