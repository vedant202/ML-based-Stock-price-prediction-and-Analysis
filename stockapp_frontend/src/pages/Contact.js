import React, { Component } from 'react'
import styles from '../css/contact.module.css'
import getCsrfToken from '../components/CsrfTocken'

export default class Contact extends Component {
  constructor(props){
    super(props)
    this.state = {contact_form_data:{f_name:"",l_name:"",email:"",m_no:"",country:"",sex:"",desc:""}}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.c_form_data = {f_name:"",l_name:"",email:"",m_no:"",country:"",sex:"",desc:""}
  }

  handleChange = (event)=>{
    // console.log(event)
    
    console.log(event.target.name,event.target.value)
    console.log("State ",this.state.contact_form_data)
   this.c_form_data[event.target.name] = event.target.value
    this.setState({contact_form_data:this.c_form_data})

  }

  handleSubmit = async(event)=>{
    console.log("Submit is clicked");
    console.log(this.state.contact_form_data)

    const response = await fetch("http://localhost:8000/contactForm/",{
      method:"Post",
      body:JSON.stringify(this.state.contact_form_data),
      headers:(
        {'X-CSRFToken': await getCsrfToken()}
      ),
      credentials:'include',
    })

    const data = await response.json();
    console.log("Data "+data)

  }

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
                    <input type='text' className={styles.contact_form_input} value={this.state.f_name} 
                    onChange={this.handleChange} name="f_name" id="f_name"></input>
                  </div>
                  <div className={styles.contact_form_col}>
                    <label className={styles.contact_form_label} >Last Name:</label>
                    <input type='text' className={styles.contact_form_input} value={this.state.l_name} onChange={this.handleChange} name="l_name" id="l_name"></input>
                  </div>
                </div>

                <div className={styles.contact_form_row}>
                  <div className={styles.contact_form_col}>
                    <label className={styles.contact_form_label} >Email:</label>
                    <input type='email' className={styles.contact_form_input} value={this.state.email}onChange={this.handleChange} name="email" id="email"></input>
                  </div>
                  <div className={styles.contact_form_col}>
                    <label className={styles.contact_form_label} >Mobile Number:</label>
                    <input type='number' className={styles.contact_form_input} value={this.state.m_no} onChange={this.handleChange} name="m_no" id="m_no"></input>
                  </div>
                </div>

                <div className={styles.contact_form_row}>
                  <div className={styles.contact_form_col}>
                    <label className={styles.contact_form_label} >Counrty:</label>
                    <input type='text' className={styles.contact_form_input} value={this.state.country} onChange={this.handleChange} name="country" id="country"></input>
                  </div>
                  <div className={styles.contact_form_col}>
                    <label className={styles.contact_form_label} >sex:</label>
                    <input type='text' className={styles.contact_form_input} value={this.state.sex} onChange={this.handleChange} name="sex" id="sex"></input>
                  </div>
                </div>

                <div className={styles.contact_form_row}>
                  <div className={styles.contact_form_desc}>
                    <label className={styles.contact_form_label} >Description:</label>
                      <textarea rows={5} type='text' className={styles.contact_form_input} value={this.state.desc} onChange={this.handleChange} name="desc" id="desc"></textarea>
                  </div>
                </div>

                <div className={styles.contact_form_row}>
                  <div className={styles.contact_form_submit}>
                    <button type='submit' onClick={this.handleSubmit} className={styles.submit_btn}>Submit</button>
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
