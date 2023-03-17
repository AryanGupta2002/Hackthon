import React from 'react'
// import { Navigate } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import { useState } from 'react';
// import  axios from 'axios';
function Companyform(){
  const[name,setname] = useState("");
  const[formerror,setformerror] = useState("");
  const[website,setwebsite] = useState("");
  const[email,setemail] = useState("");
  const[password,setpassword] = useState("");
  const[domain,setdomain] = useState(""); 
  const handleSubmit = async (e) =>{
     e.preventDefault();
    // if(validate(name,number,email,password,skills,profession,cv)){
     console.log(name,email,password,domain,website);
   // }
  }
//   const validate = (name,number,email,password,skills,profession,cv)=>{
//      const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
//      const regex2 = /^[0-9]{10}$/;
//      if(name && email && password && skills && profession && cv && number)
//      {
//         // if(!regex.test(email) &&  !regex2.test(number))
//         // {
//             return true;
//         //}
//      }
//      else
//      {
//         window.alert("Fill all details correctly")
//      }
    
//   }

  return (
      <div id = "companyform">
       <Form onSubmit={handleSubmit}>
       <br/>
       <Form.Field>
        <p id = "signup">Sign up !</p>
        <input type="text" 
        placeholder='Name' 
        name='name' 
        value={name}
        onChange={(e) => {setname(e.target.value)}}/>
        <span id = "check">{formerror.name}</span>
        </Form.Field>

        <Form.Field>
        <input type="url" 
        placeholder='Website URL' 
        name='number' 
        value={website}
        onChange={(e) => {setwebsite(e.target.value)}}/>
         <span id = "check">{formerror.number}</span>
        </Form.Field>


        <Form.Field>
        <input type="text"
         placeholder='E-mail'
          name='email' 
          value={email}
          onChange={(e) => {setemail(e.target.value)}}/>
           <span id = "check">{formerror.email}</span>
        </Form.Field>
    
        <Form.Field>
        <input type="password"
         placeholder='Password'
          name='password' 
          value={password}
          onChange={(e) => {setpassword(e.target.value)}}/>
           <span id = "check">{formerror.password}</span>
        </Form.Field>
        


        <Form.Field>
        <input type ="text"
          placeholder ="Domain"
          name='domain'
          value={domain}
          onChange={(e) => {setdomain(e.target.value)}}/>
            <span id = "check">{formerror.cv}</span>
        </Form.Field>

       
        <input type="submit" id = "subbutton"></input>
        </Form>
    </div>
  )
  }
export default Companyform