import React, { Component } from 'react'
import styles from '../css/stockpage.module.css'
import Plot from 'react-plotly.js';

export default class Stockpage extends Component {
  about_company =`Reliance Industries Limited is a Fortune 500 company and the largest private sector corporation in India. It has evolved from being a textiles and polyester company to an integrated player across energy, materials, retail, entertainment and digital services. Reliance's products and services portfolio touches almost all Indians on a daily basis, across economic and social spectrums. [1]

  Reliance was founded by Dhirubhai Ambani and is now promoted and managed by his elder son, Mukesh Dhirubhai Ambani. Ambani's family have about 50% shareholding in the conglomerate.`

  constructor(props){
    super(props)
    this.state = {about_company_text :this.about_company.slice(0,150),
    more_less:'more'
  }
    this.addText =this.addText.bind(this)

    
    
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
              <span className={styles.stockName}>Reliance Industries Ltd</span>
            </h1>
            <p><b>NSE</b>: <strong>RELIANCE</strong> <b>SECTOR</b>:<strong>Refineries</strong></p>
          </div>

          <div className={styles.stock_price}>
            <div>
              <span className={styles.currentPrice}>
                2,312.6
              </span>
            </div>
           <div>
              <div className={styles.stockExc_name}>
                  NSE:Today
              </div>
              <div className={styles.curr_time}>07 Feb 2023</div>
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
      <p className={styles.fw}>₹ 2,327.40</p>
    </div>

    <div className={`${styles.col_1} ${styles.tc}`}>
      <small>TODAYS's LOW</small>
      <p className={styles.fw}>₹ 2,310</p>
    </div>

    <div className={`${styles.col_3} ${styles.tc}`}>
      <small>52 WEEK HIGH</small>
      <p className={styles.fw}>₹ 2,856.40</p>
    </div>

    <div className={`${styles.col_4} ${styles.tc}`}>
      <small>52 WEEK LOW</small>
      <p className={styles.fw}>₹ 2,180.40</p>
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
                <p>₹ 15,00,000 Cr.</p>
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
                <p>₹ 15,00,000 Cr.</p>
              </div>
              <div className={styles.col_2}>
                <small>P/B</small>
                <p>₹ 15,00,000 Cr.</p>
              </div>

              <div className={styles.col_2}>
                <small>FACE VALUE</small>
                <p>₹ 15,00,000 Cr.</p>
              </div>

              <div className={styles.col_2}>
                <small>DIV. YIELD</small>
                <p>₹ 15,00,000 Cr.</p>
              </div>

              <div className={styles.col_2}>
                <small>BOOK VALUE (TTM)</small>
                <p>₹ 15,00,000 Cr.</p>
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
                <p>₹ 15,00,000 Cr.</p>
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
          var data = {[
            {
              x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
              y: [1, 3, 6],
              type: 'scatter'
            }
          ]}
          layout={ {width: 620, height: 540, title: 'Reliance Share Price'} }
          config={{displayModeBar: false}}
        />
            </div>
          
        </div>

        {/* <script src='https://cdn.plot.ly/plotly-2.18.0.min.js' onLoad={this.graph}></script> */}
      </div>
    )
  }
}
