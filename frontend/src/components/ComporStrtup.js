import React from 'react'
import { useNavigate } from 'react-router-dom';

function ComporStrtup()
{
const navigate = useNavigate();
  return (
    <div id = "companyorstartup" class ="flex h-screen flex-col">
    <div class="flex flex-1 items-center justify-center">
      <br/>
      <h3 id="titleforcs" class="text-4xl font-medium text-center mr-4" >Are you a <br></br>
      </h3>
      <br></br>
      <button id = "companybutton"class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
      Company
    </button>
    <span id = "or" class ="text-4xl font-medium mr-4 ml-4">or</span>
    <button id="startupbutton" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
      Startup
  </button>
  <p class="ml-2"> Not either ?
      <span id = "noforcs" class = "hover:underline cursor-pointer ml-1 hover:text-teal-700 "
              onClick={() => {navigate('/spdform');}}>
               Click here
      </span>
      </p>
      </div>
       </div>
  )
}
 export default ComporStrtup
