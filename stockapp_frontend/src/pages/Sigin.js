import React, { Component } from 'react'
import styles from '../css/sigin.module.css'
import getCsrfToken from '../components/CsrfTocken';
import {Navigate } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

class Sigin extends Component {

  constructor(props){
    super(props);
    this.state = {u_name:"",pass:"",user:false,error:null};
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    
  }
   

  handleOnChange = (event)=>{
    
    console.log("Change")
    console.log(event.target,event.target.value)
    this.setState({[event.target.name]:event.target.value})
  }

  handleSubmit = async(event)=>{
    const {isUserLoggedIn,userAuthentication} = this.props
    console.log("Submit is clicked");
    console.log("State",this.state)
    const data = this.state
    const response = await fetch('http://localhost:8000/handleLogin/',
    {
      method:"POST",
      headers:(
        {'X-CSRFToken': await getCsrfToken()}
      ),
      body:JSON.stringify(data),
      credentials:'include',
    })

    const res_data = await response.json();
    console.log("Data",res_data)

    if(res_data['response']==="success"){
      this.setState({user:true})
      this.setState({error:false})
      console.log("Login is successfull")
      // save the token and redirect
      localStorage.setItem('token',res_data["authToken"])

      // window.location.replace("http://localhost:3000/");
      // this.props.history.push("/")
      userAuthentication(true)
      console.log("After login "+isUserLoggedIn)
    }
    else{
      this.setState({user:false})
      this.setState({error:true})
    }

    
      
  }

  render() {
    let {user} = this.state
    if(user){
      return (
        <Navigate to="/"></Navigate>
        
      )
    }
    else{
    return (
      <>
      {/* {user && (<Navigate to="/"></Navigate>)} */}
      <div className={styles.container}>
        <div className={styles.cont}>
        <div className={styles.head}>
            Log In
            </div>
          <div className={styles.row}>
                      <div className={styles.col}>
                          <label className={styles.contact_form_label} >Username:</label>
                          <input type='text' className={styles.contact_form_input} name="u_name" value={this.state.u_name} onChange={this.handleOnChange} id="u_name"></input>
                      </div>
                      <div className={styles.col}>
                          <label className={styles.contact_form_label} >Password:</label>
                          <input type='password' className={styles.contact_form_input} value={this.state.pass} name="pass" onChange={this.handleOnChange} id="pass"></input>
                      </div>
          </div>

          <div className={styles.contact_form_row}>
                  <div className={styles.contact_form_submit}>
                    <button type='submit' className={styles.submit_btn} onClick={this.handleSubmit}>Submit</button>
                  </div>
          </div>

        </div>
    </div>
    </>
    )
  }
}
}

export default Sigin;
