import React,{useState} from 'react'
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

function Alumni({user}) {
    const email = "vinayakagarwal246@gmail.com"

    const [showContact, setShowContact] = useState(false);
    const [modal, setModal] = useState("hidden");

    const handleContactMe = ()=>{
        window.alert("Contact me: rahun.ranjan@gmail.com")
        // if(showContact){
        //     setModal("hidden")
        //     setShowContact(false)
        // }else{
        //     setModal("")
        //     setShowContact(true)
        // }
    }


  return (
    <div id='myProfile' className="w-[100vw] h-[100%] bg-gray-200">


        <div className={`${modal} absolute w-[100vw] h-[100vh] bg-[rgb(0,0,0,0.01)]`}>
            {/* <div className='justify-center p-8 w-[20vw] h-[20vh] bg-white left-0 right-0 top-0 bottom-0 m-auto rounded-lg '>
                <h3>Here is my Email:</h3>
                <p>Rahul Ranjan</p>
            </div> */}
        </div>
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
                  <p className="pl-2">Ranjan Raj</p>
                </li>
                <hr />
                <li className="pt-1 py-2 flex items-center">
                  <WorkIcon/>
                  <p className="pl-2">Alumni</p>
                </li>
                <hr />
                <li className="pt-1 py-2 flex items-center">
                  <InfoIcon/>
                  <p className="pl-2">160907044</p>
                </li>
                <hr />
                <li className="pt-1 py-2 flex items-center ">
                  <EmailIcon/>
                  <p className="pl-2" onClick={handleContactMe}>Contact Me</p>
                </li>
                <hr />
                <li className="pt-1 py-2 flex items-center ">
                  <ArticleIcon/>
                  <a href="https://drive.google.com/file/d/1ZAL6r_hqj_V4C98Ofe3t-gTJyBKaZ-K5/view?usp=sharing" target="_blank">
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


        <Post/>
        <Post/>
        <Post/>
        <Post/>




        </div>


        <div className="right w-[15%]">
        <div className="w-[80%] m-4 ">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Alumni