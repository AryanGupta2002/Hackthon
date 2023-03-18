import React from 'react'
import { Navigate } from 'react-router-dom';
import { Form,Button } from 'semantic-ui-react';
import { useState } from 'react';
import  axios from 'axios';
import './spdformstylesheet.css'
import firebase from 'firebase/compat/app';
import { ToastContainer , toast } from 'react-toastify';
import 'firebase/compat/auth';


function Spdform(){
  const[formerror,setformerror] = useState({});
  const[name,setname] = useState("");
  const[GotoOtppage,setGotoOtppage] = useState(false);
  const[number,setnumber] = useState("");
  const[email,setemail] = useState("");
  const[skills,setskills] = useState("");
  const[Hideform,setHideform] = useState(false);
  const[regno,setregno] = useState("");
  const[getotp,setotp] = useState("");
  const[password,setpassword] = useState("");
  const[cv,setcv] = useState("");
  const[profession,setprofession] = useState("Student");
  const [home, setHome] = useState(false);
   
  var firebaseConfig = {
    apiKey: "AIzaSyB0jHNMjt5JhaiDMNY5zyVLemZ85IpsdxU",
    authDomain: "otp-function-f1bf6.firebaseapp.com",
    projectId: "otp-function-f1bf6",
    storageBucket: "otp-function-f1bf6.appspot.com",
    messagingSenderId: "158018589085",
    appId: "1:158018589085:web:9e919de6ca149332215f74"
  };

  firebase.initializeApp(firebaseConfig);
   
  if(Hideform){
    document.getElementById("spdform").style.display = 'none';
  }
  if(GotoOtppage)
  {
    console.log("Insideotp")
    document.getElementById("otphide").style.display = 'block';
  }

  const showToastMessage = () => {
    console.log("success called");
        toast.success('OTP verified !');
      }

  const showerrorMessage = () => {
    console.log("error toasted");
      toast.error('Incorrect OTP !');
    }
    const handleotp = getotp =>
    {
        setotp(getotp);
        console.log(getotp);
    }
    const configurecaptcha = () => 
    {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
       handleSubmit();
      } 
    });
  }
  // firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
  // .then(() => {
  //   // The link was successfully sent. Inform the user.
  //   // Save the email locally so you don't need to ask the user for it again
  //   // if they open the link on the same device.
  //   window.localStorage.setItem('emailForSignIn', email);
  //   // ...
  // })
  // .catch((error) => {
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   // ...
  // });

  // if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
  //   // Additional state parameters can also be passed via URL.
  //   // This can be used to continue the user's intended action before triggering
  //   // the sign-in operation.
  //   // Get the email if available. This should be available if the user completes
  //   // the flow on the same device where they started it.
  //   var useremail = window.localStorage.getItem('emailForSignIn');
  //   if (!email) {
  //     // User opened the link on a different device. To prevent session fixation
  //     // attacks, ask the user to provide the associated email again. For example:
  //     email = window.prompt('Please provide your email for confirmation');
  //   }
  //   // The client SDK will parse the code from the link for you.
  //   firebase.auth().signInWithEmailLink(email, window.location.href)
  //     .then((result) => {
  //       // Clear email from storage.
  //       window.localStorage.removeItem('emailForSignIn');
  //       // You can access the new user via result.user
  //       // Additional user info profile not available via:
  //       // result.additionalUserInfo.profile == null
  //       // You can check if the user is new or existing:
  //       // result.additionalUserInfo.isNewUser
  //     })
  //     .catch((error) => {
  //       // Some error occurred, you can inspect the code: error.code
  //       // Common errors could be invalid email and invalid or expired OTPs.
  //     });
  // }

  const incorrectnumber = () => {
    console.log("error toasted");
      toast.error('Incorrect Number !');
    }

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
        // window.alert(res.data.error)
      }else{
      localStorage.setItem("user", JSON.stringify(res.data.user));
      configurecaptcha();
      const phoneNumber = "+91" + number;
      console.log(phoneNumber);
      const appVerifier = window.recaptchaVerifier;
      firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      console.log("Sent otp");
      setGotoOtppage(true);
    }).catch((error) => {
      console.log("Otp not sent")
      incorrectnumber();
    });
      }
      }else{
        
      }
     console.log(name,number,email,password,skills,profession,cv);
   // }
  }
  const onsubmitotp = (e)=>{
    const code = getotp;
    console.log(code);
    window.confirmationResult.confirm(code).then((result) => {
    const user = result.user;
    console.log(JSON.stringify(user));
    showToastMessage();
    setTimeout(() => {
      setHome(true)
    }, 2000);
  }).catch((error) => {
    console.log("error");
    showerrorMessage();
    // <ToastContainer />
  });
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
      <div id ="spdform" >
       <Form onSubmit={handleSubmit}>
       <br/>
       <div id = 'sign-in-button'></div>
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
        <div id = "otphide" style={{display:'none',}}>
        <Form.Field>
        <input type="number"
         placeholder='Otp'
          name='regno' 
          value={getotp}
          onChange={(e) => {setotp(e.target.value)}}/>
        </Form.Field>
        <input type="submit" id = "otpbutton" onClick={onsubmitotp}></input>
        <ToastContainer 
         position='top-center'
         autoClose = '3200'
         />
          </div>
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