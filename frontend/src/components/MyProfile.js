import React from 'react'
import NavBar from './NavBar'
import Profile from "./dummy.png";
import Avatar from "@mui/material/Avatar";
import Post from "./Post";
import x from "./2.jpg";
import y from "./3.jpg";
import z from "./download.jpg";

function MyProfile() {
  return (
    <div id='myProfile' className="w-[100vw] h-[100%] bg-gray-200">
        <div>
        <NavBar />
      </div>
      <div className="flex">
        <div className="left w-[25%] ml-10">
          <div className="w-[80%] m-4 ">
            <div className="bg-white rounded">
              <ul className="text-center content-center">
                <p className="text-3xl font-serif">Professors</p>
                <li className="pt-1 pb-1 flex items-center justify-center">
                  <Avatar
                    alt="Remy Sharp"
                    src={Profile}
                    sx={{ width: 24, height: 24 }}
                  />{" "}
                  <p className="pl-2 mb-2">Aryan Gupta</p>
                </li>
                <hr />
                <li className="pt-1 pb-1 flex items-center justify-center">
                  <Avatar
                    alt="Remy Sharp"
                    src={x}
                    sx={{ width: 24, height: 24 }}
                  />{" "}
                  <p className="pl-2 mb-2">Aryan Gupta</p>
                </li>
                <hr />
                <li className="pt-1 flex items-center justify-center">
                  <Avatar
                    alt="Remy Sharp"
                    src={y}
                    sx={{ width: 24, height: 24 }}
                  />{" "}
                  <p className="pl-2 mb-2">Aryan Gupta</p>
                </li>
                <hr />
                <li className="pt-1 pb-1 flex items-center justify-center">
                  <Avatar
                    alt="Remy Sharp"
                    src={z}
                    sx={{ width: 24, height: 24 }}
                  />{" "}
                  <p className="pl-2 mb-2">Aryan Gupta</p>
                </li>
                <hr />
              </ul>
            </div>
          </div>
        </div>


        <div className="center w-[50%]">


        <Post/>
        <Post/>
        <Post/>
        <Post/>




        </div>


        <div className="right w-[25%]">
        <div className="w-[80%] m-4 ">
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProfile