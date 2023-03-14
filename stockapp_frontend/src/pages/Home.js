import React, { Component } from 'react'
import styles from '../css/home.module.css'

export default class Home extends Component {

    
  render() {
    return (

      <div>
        <div className={styles.home}>
            <div className={styles.container}>
                <div className={styles.container1}>
                    <div className={styles.title}>
                        <h1>Intelligent Investor</h1>
                    </div>
                    <div className={styles.text}>
                        <h3>Modern Stock tool that help you to analyze stock better</h3>
                    </div>
                    <div className={styles.search_box}>
                        <input placeholder='Enter a Stock name or a Company name' />
                        <button type='submit'>Search</button>
                        <div>
                            <span className={styles.treding}> What Trending: </span>
                            <span className={styles.box}>itc</span><span className={styles.box}>Reliance</span>
                            <span className={styles.box}>Tata</span>
                        </div>
                    </div>

                </div>
                <div className={styles.heading2}>
                    <h1>Market Movers</h1>
                </div>
                <div className={styles.container2}>
                
                    <div className={styles.box1}>
                        <div className={styles.t}>
                            

                            <h2>Latest stocks</h2>
                        </div>
                        <div className={styles.top_stock_table}>
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
                    <div className={styles.box1}>
                    <div className={styles.t}>
                        <h2>Top Stocks</h2>

                    </div>
                    <div className={styles.top_stock_table}>
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
