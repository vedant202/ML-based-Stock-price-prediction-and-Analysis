import React, { Component } from 'react'
import { Outlet, Link } from "react-router-dom";
import '../css/navbar.css'


export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className='navbar'>
            <nav>
                <div className='logo'>
                    Intelligent Investor
                </div>
                <div className='main'>
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
                    </ul>
                </div>
                <div className='end'>
                    <ul>
                        <Link to='#'>
                            <li>Signin</li>
                        </Link>
                        <Link to='#'>
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
