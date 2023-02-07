import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/footer.css'

export default class Footer_layout extends Component {
  render() {
    return (
      <div className='footer'>
            <h3 className='font32'>Intelligent Investor</h3>
        <div className='row'>
        <div className='col1'>
            

            <p>The best stock screening, equity research and company analysis tool built by a passionate team of investors at Intelligent Investor. Intelligent Stock picking Starts here.</p>
        </div>
        <div className='col2'>
            <h4>About Website</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
        </div>
        <div className='col3'>
            <h4>Social Media</h4>

            <Link to="">Facebook</Link>
            <Link to="">Twitter</Link>
            <Link to="">LinkedIn</Link>

        </div>
        </div>
      </div>
    )
  }
}
