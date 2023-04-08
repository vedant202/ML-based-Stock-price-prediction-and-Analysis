import React, { Component } from 'react'
import styles from '../css/stockpage.module.css'
import Plot from 'react-plotly.js';
import { Route } from 'react-router-dom';
import getCsrfToken from '../components/CsrfTocken'; 


export default class Stockpage extends Component {
  about_company =`Reliance Industries Limited is a Fortune 500 company and the largest private sector corporation in India. It has evolved from being a textiles and polyester company to an integrated player across energy, materials, retail, entertainment and digital services. Reliance's products and services portfolio touches almost all Indians on a daily basis, across economic and social spectrums. [1]

  Reliance was founded by Dhirubhai Ambani and is now promoted and managed by his elder son, Mukesh Dhirubhai Ambani. Ambani's family have about 50% shareholding in the conglomerate.`

  constructor(props){
    super(props)
  //  Index(['language', 'region', 'quoteType', 'typeDisp', 'quoteSourceName',
  //       'triggerable', 'customPriceAlertConfidence', 'currency', 'exchange',
  //       'shortName', 'longName', 'messageBoardId', 'exchangeTimezoneName',
  //       'exchangeTimezoneShortName', 'gmtOffSetMilliseconds', 'market',
  //       'esgPopulated', 'marketState', 'regularMarketChangePercent',
  //       'regularMarketPrice', 'earningsTimestamp', 'earningsTimestampStart',
  //       'earningsTimestampEnd', 'trailingAnnualDividendRate', 'trailingPE',
  //       'trailingAnnualDividendYield', 'epsTrailingTwelveMonths', 'epsForward',
  //       'sharesOutstanding', 'bookValue', 'fiftyDayAverage',
  //       'fiftyDayAverageChange', 'fiftyDayAverageChangePercent',
  //       'twoHundredDayAverage', 'twoHundredDayAverageChange',
  //       'twoHundredDayAverageChangePercent', 'marketCap', 'forwardPE',
  //       'priceToBook', 'sourceInterval', 'exchangeDataDelayedBy',
  //       'firstTradeDateMilliseconds', 'priceHint', 'regularMarketChange',
  //       'regularMarketTime', 'regularMarketDayHigh', 'regularMarketDayRange',
  //       'regularMarketDayLow', 'regularMarketVolume',
  //       'regularMarketPreviousClose', 'bid', 'ask', 'bidSize', 'askSize',
  //       'averageDailyVolume3Month', 'averageDailyVolume10Day',
  //       'fiftyTwoWeekLowChange', 'fiftyTwoWeekLowChangePercent',
  //       'fiftyTwoWeekRange', 'fiftyTwoWeekHighChange',
  //       'fiftyTwoWeekHighChangePercent', 'fiftyTwoWeekLow', 'fiftyTwoWeekHigh',
  //       'averageAnalystRating', 'tradeable', 'cryptoTradeable', 'price'],
  //      dtype='object')

    this.state = {about_company_text :this.about_company.slice(0,150),
    more_less:'more',fetchedData:{longName:"Company Name Industries Ltd",shortName:"Company",currPrice:"1000",
         stockExc:"NSE Today",currTime:Date.now(),todaysHigh:"",todaysLow:"",fiftyTwoWeekHigh:"",fiftyTwoWeekLow:"",marketCap:"",epsForward:"",trailingAnnualDividendRate:"",trailingPE:"",trailingAnnualDividendYield:"",sharesOutstanding:"",bookValue:"",fiftyDayAverage:"",priceToBook:""       
  },dateDF:[],closePriceDF:[],sma100DF:[],open:[],high:[],low:[]
  }
    this.stock_ticker_ls = localStorage.getItem("stock_data").slice(1,localStorage.getItem("stock_data").length -1) 
    this.addText =this.addText.bind(this)
    this.fetchData = this.fetchData.bind(this);
    this.todays_date = String(new Date().getDate())+"-"+String(new Date().getMonth())+ "-" +String(new Date().getFullYear())
    
    
  }

  fetchData = async(stock_ticker)=>{
    const response = await fetch("http://localhost:8000/getStock/",{
            method:'POST',
            headers:(
                {'X-CSRFToken': await getCsrfToken()}
            ),
            body:JSON.stringify(stock_ticker),
            credentials:'include'
        })

        const data = await response.json();
        // if(data != null){
        //     localStorage.setItem("stock_data",JSON.stringify(data))
        // }
        return data;
  }

  componentDidMount(){
    console.log("Constructor "+ this.stock_ticker_ls)
    const stock_ticker_name = localStorage.getItem("stock_data")
    console.log("fetched data")
    console.log(stock_ticker_name)
    let data = this.fetchData(stock_ticker_name)
    console.log(data)
    // localStorage.removeItem("stock_data")
    data.then(d=>{
      console.log(d)
      let df = d.data.DataFrame
      df = JSON.parse(df)
      // console.log(JSON.parse(df))
      d = d.data.finance_data
      this.setState({"fetchedData":{longName:d.longName,shortName:d.shortName,currPrice:d.price,todaysHigh:d.regularMarketDayHigh,todaysLow:d.regularMarketDayLow,fiftyTwoWeekHigh:d.fiftyTwoWeekHigh,fiftyTwoWeekLow:d.fiftyTwoWeekLow,marketCap:d.marketCap,epsForward:d.epsForward,trailingAnnualDividendRate:d.trailingAnnualDividendRate,trailingPE:d.trailingPE,trailingAnnualDividendYield:d.trailingAnnualDividendYield,sharesOutstanding:d.sharesOutstanding,
        bookValue:d.bookValue,fiftyDayAverage:d.fiftyDayAverage,priceToBook:d.priceToBook}})
      this.setState({dateDF:Object.values(df.Date),closePriceDF:Object.values(df.Close),sma100DF:Object.values(df.SMA_100),open:Object.values(df.Open),high:Object.values(df.High),low:Object.values(df.Low)})
      console.log("state fetched data")
      

    })

    
  }
  
  addText(){
    if(this.state.more_less=='more'){
      this.setState({about_company_text:this.about_company,more_less:'less'})
    }
    if(this.state.more_less=='less'){
      console.log(this.state.more_less)
      this.setState({about_company_text :this.about_company.slice(0,150),
        more_less:'more'})
    }
  }

 
  
  render() {
    return (
      <div className={styles.Container}>
        <div className={styles.Header}>
          <div className={styles.title}>
            <h1>
              {/* <span className={styles.stockName}>Reliance Industries Ltd</span> */}
              <span className={styles.stockName}>{this.state.fetchedData.longName[this.stock_ticker_ls]}</span>
            </h1>
            <p><b>NSE</b>: <strong>{this.state.fetchedData.shortName[this.stock_ticker_ls]}</strong> <b>SECTOR</b>:<strong>Refineries</strong></p>
          </div>

          <div className={styles.stock_price}>
            <div>
              <span className={styles.currentPrice}>
              {this.state.fetchedData.currPrice[this.stock_ticker_ls]}

              </span>
            </div>
           <div>
              <div className={styles.stockExc_name}>
                  NSE:Today
              </div>
              <div className={styles.curr_time}>{this.todays_date}</div>
            </div>

          </div>
        </div>
        <hr />

        <div className={styles.MainContent1}>
          <div className={styles.boxes}>
            <div className={styles.box1}>

  <div className={styles.box1_head}>
    <h2>Price Summmary</h2>
  </div>

  <div className={styles.row}>
    <div className={`${styles.col_1} ${styles.tc}`}>
      <small>TODAYS's HIGH</small>
      <p className={styles.fw}>{this.state.fetchedData.todaysHigh[this.stock_ticker_ls]}</p>
    </div>

    <div className={`${styles.col_1} ${styles.tc}`}>
      <small>TODAYS's LOW</small>
      <p className={styles.fw}>{this.state.fetchedData.todaysLow[this.stock_ticker_ls]}</p>
    </div>

    <div className={`${styles.col_3} ${styles.tc}`}>
      <small>52 WEEK HIGH</small>
      <p className={styles.fw}>{this.state.fetchedData.fiftyTwoWeekHigh[this.stock_ticker_ls]}</p>
    </div>

    <div className={`${styles.col_4} ${styles.tc}`}>
      <small>52 WEEK LOW</small>
      <p className={styles.fw}>{this.state.fetchedData.fiftyTwoWeekLow[this.stock_ticker_ls]}</p>
    </div>
  </div>
            </div>  
            <div className={styles.box2}>
            <div className={styles.box2_head}>
                <h2>About</h2>
                <p className={styles.about_company_p}>
                {/* {this.about_company.slice(0,150)}  <span className='about_company_m' onClick={addText}>...more</span> */}
                {this.state.about_company_text}  <span className={styles.about_company_m} onClick={this.addText}>{this.state.more_less}</span>
                </p>
            </div>
            </div>
          </div>
        </div>

        <div className={styles.MainContent2}>
          <div className={styles.MainContent2_boxes}>
          <h2>Company Essentials</h2>
          <div className={styles.box1}>
            <div className={styles.row}>
              <div className={styles.col_1}>
                <small>MARKET CAP</small>
                <p>₹ {this.state.fetchedData.marketCap[this.stock_ticker_ls]}</p>
              </div>
              
              <div className={styles.col_1}>
                <small>ENTERPRISE VALUE</small>
                <p>₹ 15,00,000 Cr.</p>
              </div>

              <div className={styles.col_1}>
                <small>NO. OF SHARES</small>
                <p>₹ 15,00,000 Cr.</p>
              </div>
              <div className={styles.col_1}>
                <small>P/E</small>
                <p>₹ {this.state.fetchedData.trailingPE[this.stock_ticker_ls]}</p>
              </div>
              <div className={styles.col_2}>
                <small>P/B</small>
                <p>₹ {this.state.fetchedData.priceToBook[this.stock_ticker_ls]}</p>
              </div>

              <div className={styles.col_2}>
                <small>FACE VALUE</small>
                <p>₹ 15,00,000 Cr.</p>
              </div>

              <div className={styles.col_2}>
                <small>DIV. YIELD</small>
                <p>₹ {this.state.fetchedData.trailingAnnualDividendYield[this.stock_ticker_ls]}</p>
              </div>

              <div className={styles.col_2}>
                <small>BOOK VALUE (TTM)</small>
                <p>₹ {this.state.fetchedData.bookValue[this.stock_ticker_ls]}.</p>
              </div>

              
              <div className={styles.col_3}>
                <small>CASH </small>
                <p>₹ 15,00,000 Cr.</p>
              </div>

              <div className={styles.col_3}>
                <small>DEBT </small>
                <p>₹ 15,00,000 Cr.</p>
              </div>

              <div className={styles.col_3}>
                <small>PROMOTER HOLDING </small>
                <p>₹ 15,00,000 Cr.</p>
              </div>

              <div className={styles.col_3}>
                <small>EPS (TTM) </small>
                <p>₹ {this.state.fetchedData.epsForward[this.stock_ticker_ls]}.</p>
              </div>
            </div>
          </div>
          </div>
        </div>

        <div className={styles.MainContent3}>
          
          
            <div className={styles.mc3_g}>
            <Plot
          // data={[
          //   {
          //     x: [1, 2, 3,4,5,6,7,8,9,10],
          //     y: [2, 6, 3,5,3,4,2,5,6,4],
          //     type: 'line',
          //     mode: 'lines+markers',
          //     marker: {color: 'red'},
          //   }
          // ]}
          // var data = {[
          //   {
          //     x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
          //     y: [1, 3, 6],
          //     type: 'scatter'
          //   }
          // ]}
          var data = {[
            {
              x: this.state.dateDF.slice(0,this.state.dateDF.length),
              y: this.state.closePriceDF.slice(0,this.state.closePriceDF.length),
              type: 'scatter'
            }
          ]}

          layout={ {height: 540,width:1000, title: `${this.state.fetchedData.longName[this.stock_ticker_ls]} Share Price`} }
          config={{displayModeBar: false}}
        />
            </div>
          
            <div className={styles.mc3_g}>
            <Plot
          // data={[
          //   {
          //     x: [1, 2, 3,4,5,6,7,8,9,10],
          //     y: [2, 6, 3,5,3,4,2,5,6,4],
          //     type: 'line',
          //     mode: 'lines+markers',
          //     marker: {color: 'red'},
          //   }
          // ]}
          // var data = {[
          //   {
          //     x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
          //     y: [1, 3, 6],
          //     type: 'scatter'
          //   }
          // ]}
          var data = {[
            {
              x: this.state.dateDF.splice(100,this.state.dateDF.length),
              y: this.state.sma100DF.splice(100,this.state.sma100DF.length),
              type: 'scatter'
            }
          ]}

          layout={ {height: 540,width:1000, title: `100 Days Simple Moving Average ${this.state.fetchedData.longName[this.stock_ticker_ls]} Share Price`} }
          config={{displayModeBar: false}}
        />
            </div>

            <div className={styles.mc3_g}>
            <Plot
          // data={[
          //   {
          //     x: [1, 2, 3,4,5,6,7,8,9,10],
          //     y: [2, 6, 3,5,3,4,2,5,6,4],
          //     type: 'line',
          //     mode: 'lines+markers',
          //     marker: {color: 'red'},
          //   }
          // ]}
          // var data = {[
          //   {
          //     x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
          //     y: [1, 3, 6],
          //     type: 'scatter'
          //   }
          // ]}
          var data = {[
            {
              x: this.state.dateDF,

              high:this.state.high,
              open:this.state.open,
              close:this.state.closePriceDF,
              low:this.state.low,
              type: 'candlestick',
              xaxis: 'x', 
              yaxis: 'y'
              
              
            }
          ]}

          layout={ {height: 540,width:1000, title: `100 Days Simple Moving Average ${this.state.fetchedData.longName[this.stock_ticker_ls]} Share Price`} }
          config={{displayModeBar: false}}
        />
            </div>
        </div>

        {/* <script src='https://cdn.plot.ly/plotly-2.18.0.min.js' onLoad={this.graph}></script> */}
      </div>
    )
  }
}
