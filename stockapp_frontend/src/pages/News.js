import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../css/news.module.css'
import Plot from 'react-plotly.js';



export default function News() {
  return (
    <div className={styles.Container}>
        <div className={styles.cont1}>
        <div className={styles.stockNews}>
            <div className={styles.headStockNews}>
                Stock News
            </div>
            <hr />
            <div className={styles.cards}>
                <div className='card'>
                    <div className='cardHeader'>
                        <Link to=""><h3>Zomato shares slip 7% as Q3 loss widens to Rs 346.6 crore</h3></Link>
                    </div>
                    <div className='cardPara'>Zomato touched an intraday low of Rs 50.35, falling 7.44% on BSE. The stock opened lower at Rs 53 against the previous close of Rs 54.40</div>
                </div>
                <div className='card'>
                    <div className='cardHeader'>
                        <Link to=""><h3>Zomato shares slip 7% as Q3 loss widens to Rs 346.6 crore</h3></Link>
                    </div>
                    <div className='cardPara'>Zomato touched an intraday low of Rs 50.35, falling 7.44% on BSE. The stock opened lower at Rs 53 against the previous close of Rs 54.40</div>
                </div>
                <div className='card'>
                    <div className='cardHeader'>
                        <Link to=""><h3>Zomato shares slip 7% as Q3 loss widens to Rs 346.6 crore</h3></Link>
                    </div>
                    <div className='cardPara'>Zomato touched an intraday low of Rs 50.35, falling 7.44% on BSE. The stock opened lower at Rs 53 against the previous close of Rs 54.40</div>
                </div>
            </div>
            <div className={styles.more}>
                ...more
            </div>
        </div>
        <div className={styles.NiftyIndex}>
            <h1>Nifty 50</h1>
            <p className={styles.NiftyIndex_price}>17,873.35</p>
            <p>10-02-2023 12:00</p>
        </div>
        </div>

        <div className={styles.g}>
        <Plot data={[
            {
            x: ['2023-02-02 22:23:00','2023-02-03 22:23:00','2023-02-04 22:23:00', '2023-02-05 22:23:00', '2023-02-06 22:23:00','2023-02-07 22:23:00','2023-02-08 22:23:00','2023-02-09 22:23:00'],
            y:[17609,17609.10,17608,17610.9,17611,17613,17607,17610],
            type: 'scatter'
        }
        ]}
        layout={ { height: 340, title: 'Nifty 50 Price List'} }
        config={{displayModeBar: false}}
        ></Plot>
        </div>

        <div className={styles.cont2}>
            <div className={styles.financeNews}>
                <div className={styles.headfinanceNews}>
                    Top Finance News
                </div>
                <hr />
                <div className={styles.cards}>
                    <div className='card'>
                        <div className='cardHeader'>
                            <Link to=""><h3>Zomato shares slip 7% as Q3 loss widens to Rs 346.6 crore</h3></Link>
                        </div>
                        <div className='cardPara'>Zomato touched an intraday low of Rs 50.35, falling 7.44% on BSE. The stock opened lower at Rs 53 against the previous close of Rs 54.40</div>
                    </div>
                    <div className='card'>
                        <div className='cardHeader'>
                            <Link to=""><h3>Zomato shares slip 7% as Q3 loss widens to Rs 346.6 crore</h3></Link>
                        </div>
                        <div className='cardPara'>Zomato touched an intraday low of Rs 50.35, falling 7.44% on BSE. The stock opened lower at Rs 53 against the previous close of Rs 54.40</div>
                    </div>
                    <div className='card'>
                        <div className='cardHeader'>
                            <Link to=""><h3>Zomato shares slip 7% as Q3 loss widens to Rs 346.6 crore</h3></Link>
                        </div>
                        <div className='cardPara'>Zomato touched an intraday low of Rs 50.35, falling 7.44% on BSE. The stock opened lower at Rs 53 against the previous close of Rs 54.40</div>
                    </div>
                </div>
                <div className={styles.more}>
                    ...more
                </div>
            </div>
            <div className={styles.NiftyTopStocks}>
                <div className={styles.table_head}>
                    <h3>Nifty50 Top Stocks</h3>
                </div>
                <table className={styles.NiftyTopStocks_table}>
                    <tbody>
                        <tr>
                        <th>Name</th>
                        <th>Close Price</th>
                        </tr>
                        
                        <tr>
                        <td>Reliance</td>
                        <td>2500</td>
                        </tr>

                        <tr>
                        <td>Reliance</td>
                        <td>2500</td>
                        </tr>

                        <tr>
                        <td>Reliance</td>
                        <td>2500</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
  )
}

