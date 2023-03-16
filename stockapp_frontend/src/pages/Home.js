import React, { Component } from 'react'
import styles from '../css/home.module.css'
import axios from 'axios'
import getCsrfToken from '../components/CsrfTocken'; 


export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {searchStock:"Enter a Stock name or a Company name"}
        this.handleSearchStock = this.handleSearchStock.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSearchStock = (event)=>{
        console.log("Handle Search Stock")
        this.setState({searchStock:event.target.value})
        // console.log(this.state.searchStock)
    }

    handleSubmit = async(event)=>{
        console.log("Submit");
        console.log(this.state.searchStock)
        let stock_ticker = this.state.searchStock

        const response = await fetch("http://localhost:8000/getStock/",{
            method:'POST',
            headers:(
                {'X-CSRFToken': await getCsrfToken()}
            ),
            body:JSON.stringify(stock_ticker),
            credentials:'include'
        })

        const data = await response.json();
        console.log("Data "+data)

    }

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
                        <input value={this.state.searchStock} onChange={this.handleSearchStock} />
                        <button type='submit' onClick={this.handleSubmit}>Search</button>
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
