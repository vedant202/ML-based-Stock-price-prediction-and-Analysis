import React, { Component } from 'react'
import styles from '../css/sigin.module.css'


export default class Sigin extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.cont}>
        <div className={styles.head}>
            Log In
            </div>
          <div className={styles.row}>
                      <div className={styles.col}>
                          <label className={styles.contact_form_label} >Username:</label>
                          <input type='text' className={styles.contact_form_input} id="u_name"></input>
                      </div>
                      <div className={styles.col}>
                          <label className={styles.contact_form_label} >Password:</label>
                          <input type='password' className={styles.contact_form_input} id="pass"></input>
                      </div>
          </div>

          <div className={styles.contact_form_row}>
                  <div className={styles.contact_form_submit}>
                    <button type='submit' className={styles.submit_btn}>Submit</button>
                  </div>
          </div>

        </div>
    </div>
    )
  }
}
