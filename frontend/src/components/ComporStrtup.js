import React from 'react'
import { useNavigate } from 'react-router-dom';

function ComporStrtup()
{
const navigate = useNavigate();
  return (
    <div className = "companyorstartup">
    <br/>
    <h3 id="titleforcs" >Are you a comapny or a startup?<br></br>
    </h3>
     <button id = "companybutton" onClick={() => {navigate('/companyform');}}>Yes</button>
     <button id = "startupbutton" onClick={() => {navigate('/startupform');}}>No</button>
     <p id = "noforcs"
            onClick={() => {navigate('/spdform');}}>
            Not Either ? Click here
     </p>
    </div>
  )
}
 export default ComporStrtup
