import React from 'react'
import { Navigate } from 'react-router-dom';
import { Form, Button } from 'semantic-ui-react';
import { useState } from 'react';
import  axios from 'axios';
function Companyform()  {
  const initialvalues = { 
  name:"",
  number:"",
  age:"",
  city:"",
  email:"",
  skills:"",
  password:""
  };
  const [formValues,setformValues] = useState({initialvalues});
  const[Gotohomepage,setGotohomepage] = useState(false);
  const[formerror,setformerror] = useState({});
  if(Gotohomepage)
  {
   return <Navigate to="/" />
  }
  const handleChange = (e) =>{
    const{name,value} = e.target;
    setformValues({...formValues,[name]:value})
  }
  const handleSubmit = async (e) =>{
     e.preventDefault();
     setformerror(validate(formValues));
     console.log(formValues);
     const res = await axios.post('http://localhost:4000/insert', {
         studentid:formValues.age,
         studentname:formValues.name
     })
     console.log(res)
  }
  const validate = (values)=>{
     const errors = {};
     const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
     const regex2 = /^[0-9]{10}$/;
     const regex3 = /^([^0-9]*)$/;
     if(!values.name){
      errors.name = "Name is required."
     }
     if(!values.number){
      errors.number = "Number is required."
     }
     if(!values.age){
      errors.age = "Age is required."
     }
     if(!values.city){
      errors.city = "City is required."
     }
     if(!values.email){
      errors.email = "E-mail is required."
     }
     if(!values.password)
     {
      errors.password = "Password is required."
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
     if(values.age > 100 )
     {
      errors.age = "Invalid age."
     }
     if(!regex3.test(values.city))
     {
      errors.city = "Invalid city."
     }
    //  if(values.password.length <5)
    //  {
    //   errors.password = "Password must be atleast 5 characters."
    //  }
    //  if(values.password.length >10)
    //  {
    //   errors.password = "Password must be less than 10 characters."
    //  }
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
        <input type="number" 
        placeholder='Age' 
        name='age' 
        value={formValues.age}
        onChange={handleChange}/>
         <span id = "check">{formerror.age}</span>
        </Form.Field>
      
        <Form.Field>
        <input type="text"
         placeholder='City'
          name='city'
           value={formValues.city}
           onChange={handleChange}/>
            <span id = "check">{formerror.city}</span>
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
       
        <input type="submit" id = "subbutton"></input>
        
        </Form>
       
       {/* <button id ="subbutton" onClick={()=>{console.log("Submit called")}}>Submit</button> */}
        <Button id = "home" onClick={() => {setGotohomepage(true)}}>Home</Button>
    </div>
  )
}
export default Companyform