import React from 'react'
import { useNavigate } from 'react-router-dom';
function StudProfDev(){
    const navigate = useNavigate();
  return (
    
       <div className = "StudProfDev">
    <br/>
    <h3 id="titleforspd" >Are you a ?<br></br>
    </h3>
     <button id = "student"   onClick={() => {navigate('/spdform');}}>Student</button>
     <button id = "professor" onClick={() => {navigate('/spdform');}}>Professor</button>
     <button id = "developer" onClick={() => {navigate('/spdform');}}>Developer</button>
    </div>
  )
}
export default StudProfDev
