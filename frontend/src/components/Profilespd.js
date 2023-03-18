import React from 'react'
import NavBar from './NavBar'
import Profile from "./dummy.png";
import Avatar from "@mui/material/Avatar";
import Post from "./Post";
import x from "./2.jpg";
import y from "./3.jpg";
import z from "./download.jpg";
import Other from "./3.jpg"
import Person2Icon from '@mui/icons-material/Person2';
import WorkIcon from '@mui/icons-material/Work';
import InfoIcon from '@mui/icons-material/Info';
import EmailIcon from '@mui/icons-material/Email';
import ArticleIcon from '@mui/icons-material/Article';

function Profilespd({user}) {
  return (
    <div id='myProfile' className="w-[100vw] h-[100%] bg-gray-200">
        <div>
        <NavBar />
      </div>
      <div className="flex">
        <div className="left w-[25%] ml-10">
          <div className="w-[80%] m-4 ">
            <div className="bg-white rounded">
            <div className='w-[100%]  py-4'>
                  <img
                    src={Other}
                    className="w-24 h-24 rounded-[50%] mx-auto" 
                  />
                </div>
                <div className="w-[70%] mx-auto">
              <ul className="text-center justify-start">
               
                <li className="pt-1 py-2 flex items-center">
                  <Person2Icon />
                  <p className="pl-2">Vinayak </p>
                </li>
                <hr />
                <li className="pt-1 py-2 flex items-center">
                  <WorkIcon/>
                  <p className="pl-2">Student</p>
                </li>
                <hr />
                <li className="pt-1 py-2 flex items-center">
                  <InfoIcon/>
                  <p className="pl-2">210907044</p>
                </li>
                <hr />
                <li className="pt-1 py-2 flex items-center ">
                  <EmailIcon/>
                  <p className="pl-2 text-xs">vinayakagarwal@gmail.com</p>
                </li>
                <hr />
                <li className="pt-1 py-2 flex items-center ">
                  <ArticleIcon/>
                  <a href="https://twitter.com/" target="_blank">
                  <p className="pl-2">Resume</p>
                  </a>
                </li>
                <hr />
              </ul>
              </div>
            </div>
          </div>
        </div>


        <div className="center w-[50%]">


        <Post img={"https://c8.alamy.com/comp/J9YY34/guy-humans-human-beings-people-folk-persons-human-human-being-laugh-J9YY34.jpg"}/>
        <Post img={"https://c8.alamy.com/comp/J9YY34/guy-humans-human-beings-people-folk-persons-human-human-being-laugh-J9YY34.jpg"}/>
        <Post img={"https://c8.alamy.com/comp/J9YY34/guy-humans-human-beings-people-folk-persons-human-human-being-laugh-J9YY34.jpg"}/>

        {/* <Post/> */}
        {/* <Post/> */}
        {/* <Post/> */}




        </div>


        <div className="right w-[15%]">
        <div className="w-[80%] m-4 ">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profilespd