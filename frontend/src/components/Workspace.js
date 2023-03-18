import React from "react";
import NavBar from "./NavBar";
import Profile from "./dummy.png";
import Avatar from "@mui/material/Avatar";
import Post from "./Post";
import x from "./2.jpg";
import y from "./3.jpg";
import z from "./download.jpg";

function Workspace() {
  return (
    <div id="workspace" className="w-[100vw] h-[100%] bg-gray-200">
      <div>
        <NavBar />
      </div>
      <div className="flex">
        <div className="left w-[25%] ml-10">
          <div className="w-[80%] m-4 ">
            <div className="bg-white rounded">
              <ul className="text-center justify-start">
                <p className="text-3xl font-serif justify-start ">Filters</p>
                <hr />
                <li className="pt-1 pb-1 flex items-center justify-start pl-2 my-1">
                <input type="checkbox"/>
                  <p className="pl-2">Web Development</p>
                </li>
                <hr />
                <li className="pt-1 pb-1 flex items-center justify-start pl-2  my-1">
                <input type="checkbox"/>
                  <p className="pl-2 ">Cyber Security</p>
                </li>
                <hr />
                <li className="pt-1 pb-1 flex items-center justify-start pl-2  my-1">
                <input type="checkbox"/>
                  <p className="pl-2 ">Machine Learning</p>
                </li>
                <hr />
                <li className="pt-1 pb-1 flex items-center justify-start pl-2  my-1">
                <input type="checkbox"/>
                  <p className="pl-2 ">Artificial Intelligence</p>
                </li>
                <hr />
                <li className="pt-1 pb-1 flex items-center justify-start pl-2  my-1">
                <input type="checkbox"/>
                  <p className="pl-2 ">Matlab</p>
                </li>
                <hr />
                <li className="pt-1 pb-1 flex items-center justify-start pl-2  my-1">
                <input type="checkbox"/>
                  <p className="pl-2 ">Embedded Programing</p>
                </li>
                <hr />
                <li className="pt-1 pb-1 flex items-center justify-start pl-2 my-1">
                <input type="checkbox"/> 
                  <p className="pl-2 ">Content Creator</p>
                </li>
                <hr />
                <li className="pt-1 pb-1 flex items-center justify-start pl-2 my-1">
                <input type="checkbox"/>
                  <p className="pl-2 ">Marketing</p>
                </li>
                <hr />
                <li className="pt-1 pb-1 flex items-center justify-start pl-2 my-1">
                <input type="checkbox"/>
                  <p className="pl-2 ">Management</p>
                </li>
                <hr />
                <li className="pt-1 pb-1 flex items-center justify-start pl-2 my-1">
                <input type="checkbox"/>
                  <p className="pl-2 ">AutoCad</p>
                </li>
                <hr />
                <li className="pt-1 pb-1 flex items-center justify-start pl-2 my-1">
                <input type="checkbox"/>
                  <p className="pl-2">Architecture</p>
                </li>
                <hr />
                <li className="pt-1 pb-1 flex items-center justify-start pl-2 my-1">
                <input type="checkbox"/>
                  <p className="pl-2 ">Fashion Design</p>
                </li>
                <hr />
              </ul>
            </div>
          </div>
        </div>

        <div className="center w-[50%]">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>

        <div className="right w-[25%]">
          <div className="w-[80%] m-4 ">
            <div className="bg-white rounded">
              <ul className="text-center content-center">
                <p className="text-3xl font-serif">Companies</p>
                <li className="pt-1 pb-1 flex items-center justify-center">
                  <Avatar
                    alt="Remy Sharp"
                    src={z}
                    sx={{ width: 24, height: 24 }}
                  />{" "}
                  <p className="pl-2 mb-2">Future Sight</p>
                </li>
                <hr />
                <li className="pt-1 pb-1 flex items-center justify-center">
                  <Avatar
                    alt="Remy Sharp"
                    src={x}
                    sx={{ width: 24, height: 24 }}
                  />{" "}
                  <p className="pl-2 mb-2">Nitish Yadav</p>
                </li>
                <hr />
                <li className="pt-1 flex items-center justify-center">
                  <Avatar
                    alt="Remy Sharp"
                    src={Profile}
                    sx={{ width: 24, height: 24 }}
                  />{" "}
                  <p className="pl-2 mb-2">Vinayak Agarwal</p>
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
            <div className=" bg-white mt-8 rounded">
              <ul className="text-center content-center">
                <p className="text-xl font-serif">Trending Startups</p>
                <li className="pt-1 pb-1 flex items-center justify-center">
                  <Avatar
                    alt="Remy Sharp"
                    src={z}
                    sx={{ width: 24, height: 24 }}
                  />{" "}
                  <p className="pl-2 mb-2">Aryan Gupta</p>
                </li>
                <hr />
                <li className="pt-1 pb-1 flex items-center justify-center text">
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
                    src={z}
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workspace;
