import React from 'react'
import { Navigate } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import { useState } from 'react';
import  axios from 'axios';
import './spdformstylesheet.css'

function Spdform(){
  const[formerror,setformerror] = useState({});
  const[name,setname] = useState("");
  const[number,setnumber] = useState("");
  const[email,setemail] = useState("");
  const[skills,setskills] = useState("");
  const[regno,setregno] = useState("");
  const[password,setpassword] = useState("");
  const[cv,setcv] = useState("");
  const[profession,setprofession] = useState("Student");
  const [home, setHome] = useState(false);


  if (home) {
    return <Navigate to="/home" />;
  }


 
  const handleSubmit = async (e) =>{
     e.preventDefault();
     console.log(name,number,email,password,skills,profession,cv,regno);

    // if(validate(name,number,email,password,skills,profession,cv)){
      if (name&&number&&email&&password&&skills&&profession&&cv&&regno){
        const res = await axios.post(`http://127.0.0.1:4000/userRegister`, {
        email: email,
        name:name,
        number:number,
        skills:skills,
        profession:profession,
        cv:cv,
        password: password,
        regno: regno
      });
      console.log(res.data.user)
      if (res.data.success == false){
        window.alert(res.data.error)
      }else{
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setHome(true);
      }
      }else{
        window.alert("Fill all the fields")
      }
     console.log(name,number,email,password,skills,profession,cv);
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
      <div id = "spdform">
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
        <input type="text" 
        placeholder='Phone 000-000-0000' 
        name='number' 
        value={number}
        onChange={(e) => {setnumber(e.target.value)}}/>
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
        <label for="professions"></label>
        <select id="profession" name="profession"  
        value={profession} onChange = {(e) => {setprofession(e.target.value)}}>
        <option value="Student">Student</option>
        <option value="Professor">Professor</option>
        <option value="Developer">Developer</option>
        </select>
        </Form.Field>
        
        <Form.Field>
        <input type="number"
         placeholder='Registeration no.'
          name='regno' 
          value={regno}
          onChange={(e) => {setregno(e.target.value)}}/>
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
        <input type ="url"
         id = "cv"
          placeholder ="Link for CV"
          name='cv'
          value={cv}
          onChange={(e) => {setcv(e.target.value)}}/>
            <span id = "check">{formerror.cv}</span>
        </Form.Field>
         
        <Form.Field>
        <input type ="textarea"
         id = "skillset"
          placeholder ="Enter skills"
          name='skills'
          value={skills}
          onChange={(e) => {setskills(e.target.value)}}/>
            <span id = "check">{formerror.skills}</span>
        </Form.Field>
        
        
        <input type="submit" id = "subbutton"></input>
        </Form>
    </div>
  )
  }
export default Spdform