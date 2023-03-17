import React from 'react'
// import { Navigate } from 'react-router-dom';
import { Form, } from 'semantic-ui-react';
import { useState } from 'react';
// import  axios from 'axios';
function Spdform()  {
  const initialvalues = { 
  name:"",
  number:"",
  email:"",
  skills:"",
  password:"",
  profession:"",
  cv:""
  };
  const [formValues,setformValues] = useState({initialvalues});
  const[formerror,setformerror] = useState({});
  const handleChange = (e) =>{
    const{name,value} = e.target;
    setformValues({...formValues,[name]:value})
  }
  const handleSubmit = async (e) =>{
     e.preventDefault();
     setformerror(validate(formValues));
     console.log(formValues);
  }
  const validate = (values)=>{
     const errors = {};
     const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
     const regex2 = /^[0-9]{10}$/;
     if(!values.name){
      errors.name = "Name is required."
     }
     if(!values.number){
      errors.number = "Number is required."
     }
     if(!values.cv){
        errors.cv = "CV is required."
       }
     if(!values.profession){
      errors.profession = "Profession is required."
     }
     if(!values.email){
      errors.email = "E-mail is required."
     }
     if(!values.password)
     {
      errors.password = "Password is required."
     }
     if(!values.cv)
     {
      errors.password = "CV is required."
     }
     if(!values.skills){
      errors.skills = "Skillset is required."
     } 
     if(values.email){
     if(!regex.test(values.email))
     {
      errors.email = "Invalid E-mail."
     }
    }
     if(values.number){
     if(!regex2.test(values.number))
     {
      errors.number = "Invalid Phone Number."
     }
    }
     return errors;
  }
  return (
      <div id = "internform" className='internpage'>
       <Form onSubmit={handleSubmit}>
       <br/>
       <Form.Field>
        <p id = "signup">Sign up !</p>
        <input type="text" 
        placeholder='Name' 
        name='name' 
        value={formValues.name}
        onChange={handleChange}/>
        <span id = "check">{formerror.name}</span>
        </Form.Field>

        <Form.Field>
        <input type="text" 
        placeholder='Phone 000-000-0000' 
        name='number' 
        value={formValues.number}
        onChange={handleChange}/>
         <span id = "check">{formerror.number}</span>
        </Form.Field>


        <Form.Field>
        <input type="text"
         placeholder='E-mail'
          name='email' 
          value={formValues.email}
          onChange={handleChange}/>
           <span id = "check">{formerror.email}</span>
        </Form.Field>
    
        <Form.Field>
        <input type="password"
         placeholder='Password'
          name='password' 
          value={formValues.password}
          onChange={handleChange}/>
           <span id = "check">{formerror.password}</span>
        </Form.Field>
        
        <Form.Field>
        <input type ="textarea"
         id = "skillset"
          placeholder ="Enter skills"
          name='skills'
          value={formValues.skills}
          onChange={handleChange}/>
            <span id = "check">{formerror.skills}</span>
        </Form.Field>

        <Form.Field>
        <input type ="url"
         id = "cv"
          placeholder ="Link for CV"
          name='cv'
          value={formValues.cv}
          onChange={handleChange}/>
            <span id = "check">{formerror.cv}</span>
        </Form.Field>

        <Form.Field>
        <label for="cars"></label>
        <select id="profession" name="profession"  
        value={formValues.profession} >
        <option value="Student">Student</option>
        <option value="Professor">Professor</option>
        <option value="Developer">Developer</option>
        </select>
        </Form.Field>
        <input type="submit" id = "subbutton"></input>
        </Form>
    </div>
  )
}
export default Spdform