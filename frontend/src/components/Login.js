import React from 'react'
import { Form,Button } from 'semantic-ui-react'
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
function Login() {
    const[formerror,setformerror] = useState({});
    const[GotoCompanypage,setGotoCompanypage] = useState(false);
    const[getEmail,setEmail] = useState("");
    const[getPassword,setPassword] = useState("");
    
    if(GotoCompanypage)
    {
      return <Navigate to="/comporstrtup" />
    }
    const validate = (email,password) =>{
        const errors = {};
           if(!email)
           {
            errors.email = "E-mail is required."
           }
           if(!password)
           {
            errors.password = "Password is required."
           }
           return errors
        }
    const onSignInSubmit = (e) =>
      {
        e.preventDefault();
        setformerror(validate(getEmail,getPassword)); 
        console.log(getEmail);
        console.log(getPassword);
       }
    
  return (
    <div>
      <div id = "loginpage">
       <Form id="loginform">
        <div id = 'sign-in-button'></div>
        <Form.Field>
        <input type = "text" 
        placeholder='E-mail'
        name='email'
        value={getEmail}
        onChange={(e) =>{setEmail(e.target.value)}}></input>
        <span id = "check">{formerror.email}</span>
        </Form.Field>
        <Form.Field>
            <input type="password"
            placeholder ="Password"
            name='password'
            value={getPassword}
            onChange={(e) => {setPassword(e.target.value)}}></input>
            <span id = "check">{formerror.password}</span>
        </Form.Field>
        <Button id = "subbutton" onClick={onSignInSubmit} >Login</Button>
       </Form>
       <p id = "alreadyuser">Not a user?
            <span id = "loginclick"
            onClick={() => {setGotoCompanypage(true)}}>
            Click here to signup.</span>
        </p>
         </div>
    </div>
  )
}

export default Login
