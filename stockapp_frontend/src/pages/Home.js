import React, { Component } from 'react'
import '../css/home.css'

export default class Home extends Component {
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
                <div className='heading2'>
                    <h1>Market Movers</h1>
                </div>
                <div className='container2'>
                
                    <div className='box1'>
                        <div className='t'>
                            

                            <h2>Latest stocks</h2>
                        </div>
                        <div className='top_stock_table'>
                            <table>
                                <tbody>
                                <tr> 
                                    <th>Company</th>
                                    <th>Close Price</th>
                                    </tr> 
                                    <tr>
                                        <td>Tata Motors</td>
                                        <td>400</td>
                                    </tr> 
                                    <tr>
                                        <td>Adani Ports</td>
                                        <td>1400</td>
                                    </tr> 
                                    <tr>
                                        <td>Trident</td>
                                        <td>40</td>
                                    </tr> 
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='box1'>
                    <div className='t'>
                        <h2>Top Stocks</h2>

                    </div>
                    <div className='top_stock_table'>
                        <table>
                              <tbody>
                              <tr> 
                                <th>Company</th>
                                <th>Close Price</th>
                                </tr> 

                                <tr>
                                    <td>Tata Motors</td>
                                    <td>400</td>
                                    
                                </tr> 
                                
                                
                                <tr>
                                    <td>Adani Ports</td>
                                    <td>1400</td>
                                </tr> 
                                <tr>
                                    <td>Trident</td>
                                    <td>40</td>
                                </tr> 
                              </tbody>
                        </table>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
      </div>
    )
  }
}
