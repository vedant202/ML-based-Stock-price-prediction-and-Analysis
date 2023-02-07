import React, { Component } from 'react'
import '../css/home.css'

export default class home extends Component {
  render() {
    return (

      <div>
        <div className='home'>
            <div className='container'>
                <div className='container1'>
                    <div className='title'>
                        <h1>Intelligent Investor</h1>
                    </div>
                    <div className='text'>
                        <h3>Modern Stock tool that help you to analyze stock better</h3>
                    </div>
                    <div className='search_box'>
                        <input placeholder='Enter a Stoc name or a Company name' />
                        <button type='button'>Search</button>
                        <div>
                        <span className='treding'> What Trending: </span>
                        <span className='box'>itc</span><span className='box'>Reliance</span>
                        <span className='box'>Tata</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
      </div>
    )
  }
}
