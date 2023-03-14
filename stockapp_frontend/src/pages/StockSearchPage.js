import React from 'react'
import styles from '../css/stock_search.module.css'

export default function StockSearchPage() {
  return (
    <div className={styles.container}>
        <div className={styles.cont1}>
            <h2>Search a stock by its ticker name</h2>
            <div className={styles.search_box}>
              <input placeholder='Enter a Stock name or a Company name' />
                  <button type='button'>Search</button>
              </div>
        </div>
        <div className={styles.cont2}>
        <div className={styles.cont2_box1}>
              <h4>Nifty50</h4>
              <span className={styles.price}>₹ 20,000</span>
            </div>
            <div className={styles.cont2_box1}>
            <h4>Sensex</h4>
              <span className={styles.price}>₹ 50,000</span>
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
