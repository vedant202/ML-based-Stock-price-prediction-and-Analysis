import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../css/news.module.css'
import Plot from 'react-plotly.js';
import getCsrfToken from '../components/CsrfTocken'; 
import { useEffect,useState } from 'react';


export default function News() {
    let i=0

    const [newsdata,setNewsdata] = useState([]);
    const [niftydata,setNiftydata] = useState({Date:"",CloseData:""});

    const fetchData = async(stock_ticker)=>{
        const response = await fetch("http://localhost:8000/getNews/",{
                method:'GET',
                // headers:(
                //     {'X-CSRFToken': await getCsrfToken()}
                // ),
                // body:JSON.stringify(stock_ticker),
                credentials:'include'
            })
    
            const data = await response.json();
            console.log(data)
            setNewsdata(data.data);
            
            let json_nifty_data = JSON.parse(data.nifty_data)
            setNiftydata({Date:Object.values(json_nifty_data['Date']),CloseData:Object.values(json_nifty_data['Close'])})
            console.log(JSON.parse(data.nifty_data))
            // if(data != null){
            //     localStorage.setItem("stock_data",JSON.stringify(data))
            // }
        return data;
    }

    useEffect(()=>{
        console.log("News Use Effect")
        fetchData();
        // console.log(newsdata)
        // console.log(niftydata)
        
        
    },[])

  return (
    <div className={styles.Container}>
        <div className={styles.cont1}>
        <div className={styles.stockNews}>
            <div className={styles.headStockNews}>
                Stock News
            </div>
            <hr />
            <div className={styles.cards}>
                {newsdata.map((n)=>{
                    if(i<4){

                        i =i+1;
                    return (<div className='card'>
                    <div className='cardHeader'>
                        <Link to=""><h3>{n.title}</h3></Link>
                    </div>
                    <div className='cardPara'>{n.para.slice(0,200)}</div>
                </div>)
                    }
                    console.log(i)
                    
                })}
                {/* <div className='card'>
                    <div className='cardHeader'>
                        <Link to=""><h3>Zomato shares slip 7% as Q3 loss widens to Rs 346.6 crore</h3></Link>
                    </div>
                    <div className='cardPara'>Zomato touched an intraday low of Rs 50.35, falling 7.44% on BSE. The stock opened lower at Rs 53 against the previous close of Rs 54.40</div>
                </div> */}
                {/* <div className='card'>
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
                </div> */}
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
            x: niftydata.Date,
            y:niftydata.CloseData,
            type: 'scatter'
        }
        ]}
        layout={ { height: 540,width:1000, title: 'Nifty 50 Price List'} }
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

