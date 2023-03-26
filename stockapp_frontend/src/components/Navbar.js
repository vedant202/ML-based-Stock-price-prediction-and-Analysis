import React, { Component } from 'react'
import { Outlet, Link } from "react-router-dom";
import styles from '../css/navbar.module.css'
import getCsrfToken from '../components/CsrfTocken';

export default class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {is_login_nav : ""}
        this.checkLogin = this.checkLogin.bind(this)
        const {isUserLoggedIn,userAuthentication} = this.props
        this.handleLogout = this.handleLogout.bind(this)
    }

   handleLogout = async()=>{
    console.log("Submit is clicked");
    console.log("State",this.state)
    const data = this.state
    const response = await fetch('http://localhost:8000/handlelogout/',
    {
      method:"POST",
      headers:(
        {'X-CSRFToken': await getCsrfToken()}
      ),
      body:JSON.stringify(data),
      credentials:'include',
    })

    const res_data = await response.json();
    console.log("Data",res_data)

   }
   
    checkLogin =()=>{
        const {isUserLoggedIn,userAuthentication} = this.props
        console.log("Component is mounted")
        console.log("Authentication "+isUserLoggedIn)
        if(isUserLoggedIn){
            console.log(isUserLoggedIn)
            this.setState({is_login_nav:`<div className={styles.end}>
            <ul>
                <Link to='/logout'>
                    <li>Logout</li>
                </Link>
                <Link to='/register'>
                    <li>Welcome, </li>
                </Link>
            </ul>
        </div>`})
        }
        else{
            this.setState({is_login_nav:`<div className={styles.end}>
            <ul>
                <Link to='/sigin'>
                    <li>Signin</li>
                </Link>
                <Link to='/register'>
                    <li>Register</li>
                </Link>
            </ul>
        </div>`})
        }
        console.log("State of var "+this.state.is_login_nav)
    };

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
                {
                    this.isUserLoggedIn ?(<div className={styles.end}>
                        <ul>
                            <Link onClick={this.handleLogout} to='/logout'>
                                <li>Logout</li>
                            </Link>
                            <Link to='/register'>
                                <li>Welcome, </li>
                            </Link>
                        </ul>
                    </div>): (<div className={styles.end}>
            <ul>
                <Link to='/sigin'>
                    <li>Signin</li>
                </Link>
                <Link to='/register'>
                    <li>Register</li>
                </Link>
            </ul>
        </div>)
                }
                {/* <div className={styles.end}>
                    <ul>
                        <Link to='/sigin'>
                            <li>Signin</li>
                        </Link>
                        <Link to='/register'>
                            <li>Register</li>
                        </Link>
                    </ul>
                </div>
                <div className={styles.end}>
                    <ul>
                        <Link to='/logout'>
                            <li>Logout</li>
                        </Link>
                        <Link to='/register'>
                            <li>Welcome, </li>
                        </Link>
                    </ul>
                </div> */}
            </nav>
        </div>
        <Outlet />
      </div>

    )
  }
}
