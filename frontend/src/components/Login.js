import React from 'react'
import { Form,Button } from 'semantic-ui-react'
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
function Login() {
    const initialvalues = {email:"",password:""};
    const[formValues,setformValues] = useState({initialvalues});
    const[formerror,setformerror] = useState({});
    const[GotoCompanypage,setGotoCompanypage] = useState(false);
    
    if(GotoCompanypage)
    {
      return <Navigate to="/comporstrtup" />
    }
    const validate = (values) =>{
        const errors = {};
           if(!values.email)
           {
            errors.email = "E-mail is required."
           }
           if(!values.password)
           {
            errors.password = "Password is required."
           }
           return errors
        }
     const handleChange = (e) =>
         {
        const{name,value} = e.target;
        setformValues({...formValues,[name]:value})
         }
    const onSignInSubmit = (e) =>
      {
        e.preventDefault();
        setformerror(validate(formValues)); 

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
        value={formValues.email}
        onChange={handleChange}></input>
        <span id = "check">{formerror.email}</span>
        </Form.Field>
        <Form.Field>
            <input type="password"
            placeholder ="Password"
            name='password'
            value={formValues.password}
            onChange={handleChange}></input>
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
