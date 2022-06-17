import React, { useState } from 'react';
import bcryptjs from 'bcryptjs';
import '../css/loginStyle.css';
import { Navigate } from 'react-router-dom';
import LoginService from '../service/LoginService';
import HeaderComponent from './HeaderComponent';

function LoginForm(){
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const errors = {
        uname: "user not found",
        pass: "invalid password"
    };
    const handleSubmit = async event => {
        //Prevent page reload
        event.preventDefault();
    
        var { uname, pass } = document.forms[0];
        const userDetails = await LoginService.getDetails(uname.value)
        .catch(err=>{
            setErrorMessages({ name: "uname", message: errors.uname });
        });
        
            
        // Compare user info
        if (userDetails.data.userName === uname.value) {
          if (!bcryptjs.compareSync(pass.value,userDetails.data.password)) {
            // Invalid password
            setErrorMessages({ name:"pass", message: errors.pass });
          } else {
            alert(`welcome ${userDetails.data.fullName}`);
            LoginService.userId(uname.value)
            setIsSubmitted(true);   
          }
        } else {
          // Username not found
          setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error1">{errorMessages.message}</div>
    );

    const onSignup=()=>{
        window.location = '/register';
      };

    const renderForm = (
        <div>
            <HeaderComponent userName = {LoginService.id}></HeaderComponent>

            <form className='form' onSubmit={handleSubmit}>
                <div className='register-Form'>
                <h6 className="error">{renderErrorMessage('uname')}</h6>

                    <h1 align="center">Login</h1>
                    <p align="center">Please enter username and password</p>
                    <hr></hr>
                    

                    <label><b>Username</b></label>
                    <input type="text" className='register' placeholder='username' name='uname'/>
                    {/* <label><b>Email</b></label>
                    <input type="text" className='register' placeholder='abc.@' name='email'
                        onChange={e => this.email = e.target.value}/> */}
                
                    <label><b>Password</b></label>
                    <input type="password" className='register' placeholder='password' name='pass'/>
                    {renderErrorMessage("pass")}
                    {/* <label><b>Confirm Password</b></label>
                    <input type="password" className='register' placeholder='password' name='confirmpassword'
                        onChange={e => this.confirmpassword = e.target.value}/> */}
                    
                    <button className='regBtn'>Sign in</button>
                </div>
            </form>
            <button className='regBtn1' onClick={onSignup}>Sign up</button>

        </div>

      );

      
      return (
        
        <div className="app">
          <div className="login-form">
            <div className="title">Sign In</div>
            {isSubmitted ? <Navigate to={'/products'}>User is successfully logged in</Navigate> : renderForm}
          </div>
        </div>
      );  

}
export default LoginForm;



