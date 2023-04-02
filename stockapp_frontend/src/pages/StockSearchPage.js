import React,{useEffect, useState} from 'react'
import styles from '../css/stock_search.module.css'
import getCsrfToken from '../components/CsrfTocken';
// import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function StockSearchPage(props) {
  const [stockTicker,setStockTicker] = useState("");
  const [submitClicked,setSubmitClicked] = useState(false);
  const [sensexCloseData,setSensexCloseData] = useState(0)
  const navigate = useNavigate();

  const fetchSensexData = async()=>{
    const response = await fetch("http://localhost:8000/getSensexData/",{
            method:'GET',
            // headers:(
            //     {'X-CSRFToken': await getCsrfToken()}
            // ),
            // body:JSON.stringify(stock_ticker),
            credentials:'include'
        })
    const data = await response.json();
    let json_sensex_data = JSON.parse(data.sensex_data)
    console.log("Stock Search Page",json_sensex_data)
    setSensexCloseData(Object.values(json_sensex_data['Close']).slice(-1))
  }

  useEffect(()=>{
    fetchSensexData();
  },[])

  const handleStockTicker = (event)=>{
    console.log(event.target.value)
    setStockTicker(event.target.value)
  }

  const handleSubmit = async(event)=>{
    console.log("Submit is pressed");
    console.log(stockTicker)

    console.log("Submit");
    console.log(stockTicker)
    let stock_ticker = stockTicker
    localStorage.setItem("stock_data",JSON.stringify(stock_ticker))
    console.log("HOME STOCK DATA "+ stock_ticker)
    setSubmitClicked(true)
    navigate('/stockpage')
  }

  return (
    <div className={styles.container}>
        <div className={styles.cont1}>
            <h2>Search a stock by its ticker name</h2>
            <div className={styles.search_box}>
              <input value={stockTicker} onChange={handleStockTicker} placeholder='Enter a Stock name or a Company name' />
                  <button type='submit' onClick={handleSubmit}>Search</button>
              </div>
        </div>
        <div className={styles.cont2}>
        <div className={styles.cont2_box1}>
              <h4>Nifty50</h4>
              <span className={styles.price}>₹ {props.niftyClosePrice}</span>
            </div>
            <div className={styles.cont2_box1}>
            <h4>Sensex</h4>
              <span className={styles.price}>₹ {sensexCloseData}</span>
            </div>
        </div>

        <div className={styles.cont3}>
          <div className={styles.cont3_boxes}>
          <h4>Nifty50 Stocks</h4>

<div className={styles.n50_stocks}>
  <table className={styles.n50_stocks_tables}>
  <thead>
        <tr>
          <th>Company</th>
          <th>Open Price</th>
          <th>Close Price</th>
        </tr>
      </thead>
    <tbody>
      <tr>
        <th>Reliance</th>
        <td>2500</td>
        <td>2600</td>
      </tr>
      <tr>
        <th>Reliance</th>
        <td>2500</td>
        <td>2600</td>
      </tr>
      <tr>
        <th>Reliance</th>
        <td>2500</td>
        <td>2600</td>
      </tr>
    </tbody>
  </table>
</div>
          </div>
        </div>
    </div>
  )
}
