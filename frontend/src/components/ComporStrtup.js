import React from 'react'
import { useNavigate } from 'react-router-dom';

function ComporStrtup()
{
const navigate = useNavigate();
  return (
    <div className = "companyorstartup">
    <br/>
    <h3 id="titleforcs" >Are you a ?<br></br>
    </h3>
     <button id = "companybutton" onClick={() => {navigate('/companyform');}}>Company</button>
     <button id = "startupbutton" onClick={() => {navigate('/startupform');}}>Start up</button>
     <span id = "noforcs"
            onClick={() => {navigate('/StudProfDev');}}>
            Not Either
     </span>
    </div>
  )
}
 export default ComporStrtup
