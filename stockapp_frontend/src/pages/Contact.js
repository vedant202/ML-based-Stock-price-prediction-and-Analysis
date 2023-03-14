import React, { Component } from 'react'
import styles from '../css/contact.module.css'

export default class Contact extends Component {
  render() {
    return (
      <div className={styles.contact_cont}>
        <div className={styles.cont}>
          <div className={styles.row}>
            <div className={styles.col1}>
              <img src={process.env.PUBLIC_URL+"images/contact.jpg"} width={532} className={styles.contact_img}/>
            </div>
            <div className={styles.col2}>
              <div className={styles.contact_form}>
                <div className={styles.contact_form_row}>
                  <div className={styles.contact_form_col}>
                    <label className={styles.contact_form_label} >First Name:</label>
                    <input type='text' className={styles.contact_form_input} id="f_name"></input>
                  </div>
                  <div className={styles.contact_form_col}>
                    <label className={styles.contact_form_label} >Last Name:</label>
                    <input type='text' className={styles.contact_form_input} id="L_name"></input>
                  </div>
                </div>

                <div className={styles.contact_form_row}>
                  <div className={styles.contact_form_col}>
                    <label className={styles.contact_form_label} >Email:</label>
                    <input type='email' className={styles.contact_form_input} id="f_name"></input>
                  </div>
                  <div className={styles.contact_form_col}>
                    <label className={styles.contact_form_label} >Phone Number:</label>
                    <input type='number' className={styles.contact_form_input} id="p_no"></input>
                  </div>
                </div>

                <div className={styles.contact_form_row}>
                  <div className={styles.contact_form_col}>
                    <label className={styles.contact_form_label} >Counrty:</label>
                    <input type='text' className={styles.contact_form_input} id="country"></input>
                  </div>
                  <div className={styles.contact_form_col}>
                    <label className={styles.contact_form_label} >sex:</label>
                    <input type='text' className={styles.contact_form_input} id="sex"></input>
                  </div>
                </div>

                <div className={styles.contact_form_row}>
                  <div className={styles.contact_form_desc}>
                    <label className={styles.contact_form_label} >Description:</label>
                      <textarea rows={5} type='text' className={styles.contact_form_input} id="sex"></textarea>
                  </div>
                </div>

                <div className={styles.contact_form_row}>
                  <div className={styles.contact_form_submit}>
                    <button type='submit' className={styles.submit_btn}>Submit</button>
                  </div>
                </div>
                
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
