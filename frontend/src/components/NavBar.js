import React,{useState, useEffect} from 'react'
import Profile from './dummy.png'
import {Link,Navigate} from "react-router-dom"
import { Form, FormField } from "semantic-ui-react";

function NavBar() {
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  //  if(gotoPostpage)
  //  {
  //   return <Navigate to = "/postselection" />;
  //  }

  
  const handleApplication =() => {
    console.log("first")
    // if(app == "hidden"){
    //   setApp("flex")
    // }
  }

  return (
    <div id="navBar">
<nav class="flex justify-between px-20 py-6 items-center bg-white">
  <h1 class="text-xl text-gray-800 font-bold"><Link to="/home">Easy Connect </Link></h1>
  <div class="flex items-center">
    <div class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 pt-0.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input class="ml-2 outline-none bg-transparent font-" type="text" name="search" id="search" placeholder="Search..." />
    </div>
    <ul class="flex items-center space-x-6">
      <li class="font-semibold text-gray-700"><Link to="/postselection"> Create Post </Link></li>
      <li class="font-semibold text-gray-700"><Link to="/home"> Home </Link></li>
      <li class="font-semibold text-gray-700"><Link to="/workspace">Workspace</Link></li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      </li>
      <li>
        <div>
        <Link to={`/profile-spd/${user._id}`}>
        <img src={Profile} alt="" className='w-[25px] h-[25px] rounded '/>
        </Link>
        </div>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default NavBar