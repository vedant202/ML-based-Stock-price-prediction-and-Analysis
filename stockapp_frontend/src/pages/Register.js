import React, { Component } from 'react'
import styles from  '../css/register.module.css'


export default class Register extends Component {
  render() {
    return (
      <div className={styles.container}>
            

            <div className={styles.cont}>
            <div className={styles.head}>
            Register
            </div>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <label className={styles.contact_form_label} >First Name:</label>
                        <input type='text' className={styles.contact_form_input} id="f_name"></input>
                    </div>
                    <div className={styles.col}>
                        <label className={styles.contact_form_label} >Last Name:</label>
                        <input type='text' className={styles.contact_form_input} id="L_name"></input>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.col}>
                        <label className={styles.contact_form_label} >Username:</label>
                        <input type='text' className={styles.contact_form_input} id="u_name"></input>
                    </div>
                   
                </div>

                <div className={styles.row}>
                    <div className={styles.col}>
                        <label className={styles.contact_form_label} >Age:</label>
                        <input type='text' className={styles.contact_form_input} id="age"></input>
                    </div>
                    <div className={styles.col}>
                        <label className={styles.contact_form_label} >Sex:</label>
                        <input type='text' className={styles.contact_form_input} id="sex"></input>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.col}>
                        <label className={styles.contact_form_label} >Country:</label>
                        <input type='text' className={styles.contact_form_input} id="country"></input>
                    </div>
                    <div className={styles.col}>
                        <label className={styles.contact_form_label} >Mobile no:</label>
                        <input type='text' className={styles.contact_form_input} id="mb_no"></input>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.col}>
                        <label className={styles.contact_form_label} >Email:</label>
                        <input type='email' className={styles.contact_form_input} id="email"></input>
                    </div>
                    <div className={styles.col}>
                        <label className={styles.contact_form_label} >BirthDate:</label>
                        <input type='date' className={styles.contact_form_input} id="birth_date"></input>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.col}>
                        <label className={styles.contact_form_label} >Password:</label>
                        <input type='password' className={styles.contact_form_input} id="pass"></input>
                    </div>
                    <div className={styles.col}>
                        <label className={styles.contact_form_label} >Confirm Password:</label>
                        <input type='password' className={styles.contact_form_input} id="c_pass"></input>
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
