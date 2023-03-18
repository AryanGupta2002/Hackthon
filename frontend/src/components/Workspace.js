import React,{useState,useEffect} from "react";
import {Link} from 'react-router-dom'
import NavBar from "./NavBar";
import Profile from "./dummy.png";
import Avatar from "@mui/material/Avatar";
import Post from "./Post";
import x from "./2.jpg";
import y from "./3.jpg";
import z from "./download.jpg";
import axios from 'axios'

function Workspace() {

  const [user, setUser] = useState("");
  const [companies, setCompany] = useState([]);
  const [startups, setStartup] = useState([]);
  const [posts, setPost] = useState([]);



  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    const getData = async () => {

      const company = await axios.get("http://127.0.0.1:4000/allCompanies");
      const startup = await axios.get("http://127.0.0.1:4000/allStartups");
      const post = await axios.post("http://127.0.0.1:4000/getPost",{type:"Hiring"} );

      setCompany(company.data.allCompanies);
      setStartup(startup.data.allStartups);
      setPost(post.data.allPosts);

    };
    getData();
  }, []);

  console.log(posts)


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
        {
            posts.length > 0 ? (
              posts.map((m)=>(
                <>
                  <Post post={m} user= {user}/>
                </>
              ))
            ):
            <h5>No Post Found</h5>
          }
        </div>

        <div className="right w-[25%]">
          <div className="w-[80%] m-4 ">
            <div className="bg-white rounded">
              <ul className="text-center content-center">
                <p className="text-3xl font-serif">Companies</p>
                <hr />
                {companies.length > 0 ? (
                  companies.map((m) => (
                    <>
                    <Link to={`/profile-spd/${m._id}`}>
                      <li className="pt-1 pb-1 flex items-center justify-start pl-14">
                        <Avatar
                          alt="Remy Sharp"
                          src={Profile}
                          sx={{ width: 24, height: 24 }}
                        />{" "}
                        <p className="pl-2 mb-2">{m.name}</p>
                      </li>
                      <hr />
                    </Link>
                    </>
                  ))
                ) : (
                  <p className="py-4">No Companies yet</p>
                )}
              </ul>
            </div>
            <div className=" bg-white mt-8 rounded">
              <ul className="text-center content-center">
                <p className="text-xl font-serif">Trending Startups</p>
                <hr />
                {startups.length > 0 ? (
                  startups.map((m) => (
                    <>
                    <Link to={`/profile-spd/${m._id}`}>
                      <li className="pt-1 pb-1 flex items-center justify-start pl-14">
                        <Avatar
                          alt="Remy Sharp"
                          src={Profile}
                          sx={{ width: 24, height: 24 }}
                        />{" "}
                        <p className="pl-2 mb-2">{m.name}</p>
                      </li>
                      </Link>
                      <hr />
                    </>
                  ))
                ) : (
                  <p className="py-4">No Startups yet</p>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workspace;
