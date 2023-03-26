import React, { Component } from 'react'
import styles from  '../css/register.module.css'
import getCsrfToken from '../components/CsrfTocken';
import {Navigate } from 'react-router-dom'

export default class Register extends Component {

    constructor(props){
        super(props);
        this.state = {register_form:{f_name:"",l_name:"",U_name:"",age:"",sex:"",country:"",mb_no:"",email:"",birth_date:"",pass:"",c_pass:""},user:false,error:null}

        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.register_f={f_name:"",l_name:"",U_name:"",age:"",sex:"",country:"",mb_no:"",email:"",birth_date:"",pass:"",c_pass:""}
    }

    handleOnChange = (event)=>{
        console.log("On Change Event");
        console.log(event.target.name,event.target.value);
        this.register_f[event.target.name] = event.target.value;
        this.setState({register_form:this.register_f});

    }

    handleSubmit = async(event)=>{
        console.log("Submit");
        console.log(this.state.register_form)
        const response = await fetch("http://localhost:8000/handleRegister/",{
            method:"POST",
            body:JSON.stringify(this.state.register_form),
            headers:(
                {'X-CSRFToken': await getCsrfToken()}
            ),
            credentials:'include',
        })
        
        const response_data = await response.json()

        if(response_data['response']==="success"){
            this.setState({user:true})
            this.setState({error:false})
            console.log("Register is successfull")
            localStorage.setItem('token',response_data["authToken"])

        }else{
            this.setState({user:false})
            this.setState({error:true})
          }

        console.log(response_data)
    }


  render() {
    let {user} = this.state
    if(user){
      return (
        <Navigate to="/"></Navigate>
      )
    }
    return (
      <div className={styles.container}>
            

            <div className={styles.cont}>
            <div className={styles.head}>
            Register
            </div>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <label className={styles.contact_form_label} >First Name:</label>
                        <input type='text' className={styles.contact_form_input} id="f_name" value={this.state.register_form.f_name} onChange={this.handleOnChange} name="f_name"></input>
                    </div>
                    <div className={styles.col}>
                        <label className={styles.contact_form_label} >Last Name:</label>
                        <input type='text' className={styles.contact_form_input} id="l_name" name="l_name" value={this.state.register_form.l_name} onChange={this.handleOnChange}></input>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.col}>
                        <label className={styles.contact_form_label} >Username:</label>
                        <input type='text' className={styles.contact_form_input} id="U_name" name='U_name' value={this.state.register_form.U_name} onChange={this.handleOnChange}></input>
                    </div>
                   
                </div>

                <div className={styles.row}>
                    <div className={styles.col}>
                        <label className={styles.contact_form_label} >Age:</label>
                        <input type='text' className={styles.contact_form_input} id="age" name="age" value={this.state.register_form.age} onChange={this.handleOnChange}></input>
                    </div>
                    <div className={styles.col}>
                        <label className={styles.contact_form_label} >Sex:</label>
                        <input type='text' className={styles.contact_form_input} id="sex" name="sex" value={this.state.register_form.sex} onChange={this.handleOnChange}></input>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.col}>
                        <label className={styles.contact_form_label} >Country:</label>
                        <input type='text' className={styles.contact_form_input} id="country" name="country" value={this.state.register_form.country} onChange={this.handleOnChange}></input>
                    </div>
                    <div className={styles.col}>
                        <label className={styles.contact_form_label} >Mobile no:</label>
                        <input type='text' className={styles.contact_form_input} id="mb_no" name="mb_no" value={this.state.register_form.mb_no} onChange={this.handleOnChange}></input>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.col}>
                        <label className={styles.contact_form_label} >Email:</label>
                        <input type='email' className={styles.contact_form_input} id="email" name="email" value={this.state.register_form.email} onChange={this.handleOnChange}></input>
                    </div>
                    <div className={styles.col}>
                        <label className={styles.contact_form_label} >BirthDate:</label>
                        <input type='date' className={styles.contact_form_input} id="birth_date" name="birth_date" value={this.state.register_form.birth_date} onChange={this.handleOnChange}></input>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.col}>
                        <label className={styles.contact_form_label} >Password:</label>
                        <input type='password' className={styles.contact_form_input} id="pass" name="pass" value={this.state.register_form.pass} onChange={this.handleOnChange}></input>
                    </div>
                    <div className={styles.col}>
                        <label className={styles.contact_form_label} >Confirm Password:</label>
                        <input type='password' className={styles.contact_form_input} id="c_pass" name="c_pass" value={this.state.register_form.c_pass} onChange={this.handleOnChange}></input>
                    </div>
                </div>
                
                <div className={styles.contact_form_row}>
                  <div className={styles.contact_form_submit}>
                    <button type='submit' className={styles.submit_btn} id="submit" onClick={this.handleSubmit}>Submit</button>
                  </div>
                </div>
            </div>
        </div>
    )
  }
}
