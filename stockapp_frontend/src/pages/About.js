
import React, { Component } from 'react'
import styles from  '../css/about.module.css'


export default class About extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.cont}>
          <div className={styles.head}>
            About Us
          </div>
          <div className={styles.about_para}>
            <p>
              Tickertape (“TT”) is a content, information and analytical platform for stocks, ETFs, Mutual Funds and other investment products, owned by Anchorage Technologies Private Limited (the “Company”). TT offers various tools and/or services like stock screener - a tool to screen stocks based on various fundamental and technical parameters, Market Mood Index - sentiment indicator of Indian stock market, Learn - a portal for learning basic financial and economic terms etc (“Services”).
          </p>
          <div className={styles.about_img}>
            <img src={process.env.PUBLIC_URL+"images/about-investing.jpg"} className={styles.contact_img}/>
          </div>
            <p>
              The Company is a Private Limited Company, incorporated in the year 2021, having its registered office in Bengaluru. The company builds technology platforms for retail investors & users. The company is a wholly owned subsidiary of Smallcase Technologies Private Limited.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

