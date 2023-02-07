import React, { Component } from 'react'
import '../css/stockpage.css'


export default class Stockpage extends Component {
  about_company =`Reliance Industries Limited is a Fortune 500 company and the largest private sector corporation in India. It has evolved from being a textiles and polyester company to an integrated player across energy, materials, retail, entertainment and digital services. Reliance's products and services portfolio touches almost all Indians on a daily basis, across economic and social spectrums. [1]

  Reliance was founded by Dhirubhai Ambani and is now promoted and managed by his elder son, Mukesh Dhirubhai Ambani. Ambani's family have about 50% shareholding in the conglomerate.`

  constructor(props){
    super(props)
    this.state = {about_company_text :this.about_company.slice(0,150),
    more_less:'more'}
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
      <div className='Container'>
        <div className="Header">
          <div className='title'>
            <h1>
              <span className='stockName'>Reliance Industries Ltd</span>
            </h1>
            <p><b>NSE</b>: <strong>RELIANCE</strong> <b>SECTOR</b>:<strong>Refineries</strong></p>
          </div>

          <div className='stock_price'>
            <div>
              <span className='currentPrice'>
                2,312.6
              </span>
            </div>
           <div>
              <div className='stockExc_name'>
                  NSE:Today
              </div>
              <div className='curr_time'>07 Feb 2023</div>
            </div>

          </div>
        </div>
        <hr />

        <div className='MainContent1'>
          <div className='box1'>

            <div className='box1_head'>
              <h2>Price Summmary</h2>
            </div>
          
            <div className='row'>
              <div className='col_1 tc'>
                <small>TODAYS's HIGH</small>
                <p className='fw'>₹ 2,327.40</p>
              </div>

              <div className='col_2 tc'>
                <small>TODAYS's LOW</small>
                <p className='fw'>₹ 2,310</p>
              </div>

              <div className='col_3 tc'>
                <small>52 WEEK HIGH</small>
                <p className='fw'>₹ 2,856.40</p>
              </div>

              <div className='col_4 tc'>
                <small>52 WEEK LOW</small>
                <p className='fw'>₹ 2,180.40</p>
              </div>
            </div>
          </div>  
          <div className='box2'>
            <div className='box2_head'>
                <h2>About</h2>
                <p className='about_company_p'>
                {/* {this.about_company.slice(0,150)}  <span className='about_company_m' onClick={addText}>...more</span> */}
                {this.state.about_company_text}  <span className='about_company_m' onClick={this.addText}>{this.state.more_less}</span>
                </p>
            </div>
          </div>
        </div>

        <div className='MainContent2'>
          <h2>Company Essentials</h2>
          <div className='box1'>
            <div className='row'>
              <div className='col_1'>
                <small>MARKET CAP</small>
                <p>₹ 15,00,000 Cr.</p>
              </div>
              
              <div className='col_1'>
                <small>ENTERPRISE VALUE</small>
                <p>₹ 15,00,000 Cr.</p>
              </div>

              <div className='col_1'>
                <small>NO. OF SHARES</small>
                <p>₹ 15,00,000 Cr.</p>
              </div>
              <div className='col_1'>
                <small>P/E</small>
                <p>₹ 15,00,000 Cr.</p>
              </div>
              <div className='col_2'>
                <small>P/B</small>
                <p>₹ 15,00,000 Cr.</p>
              </div>

              <div className='col_2'>
                <small>FACE VALUE</small>
                <p>₹ 15,00,000 Cr.</p>
              </div>

              <div className='col_2'>
                <small>DIV. YIELD</small>
                <p>₹ 15,00,000 Cr.</p>
              </div>

              <div className='col_2'>
                <small>BOOK VALUE (TTM)</small>
                <p>₹ 15,00,000 Cr.</p>
              </div>

              
              <div className='col_3'>
                <small>CASH </small>
                <p>₹ 15,00,000 Cr.</p>
              </div>

              <div className='col_3'>
                <small>DEBT </small>
                <p>₹ 15,00,000 Cr.</p>
              </div>

              <div className='col_3'>
                <small>PROMOTER HOLDING </small>
                <p>₹ 15,00,000 Cr.</p>
              </div>

              <div className='col_3'>
                <small>EPS (TTM) </small>
                <p>₹ 15,00,000 Cr.</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    )
  }
}
