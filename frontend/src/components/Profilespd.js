import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import NavBar from "./NavBar";
import Profile from "./dummy.png";
import Avatar from "@mui/material/Avatar";
import Post from "./Post";
import x from "./2.jpg";
import y from "./3.jpg";
import z from "./download.jpg";
import Other from "./3.jpg";
import Person2Icon from "@mui/icons-material/Person2";
import WorkIcon from "@mui/icons-material/Work";
import InfoIcon from "@mui/icons-material/Info";
import EmailIcon from "@mui/icons-material/Email";
import ArticleIcon from "@mui/icons-material/Article";
import axios from "axios";

function Profilespd() {
  const [reUser, setReUser] = useState("");
  let { userId } = useParams();
  const [posts, setPost] = useState([]);
  
  console.log(userId);

  useEffect(() => {
    const getUserData = async () => {
      try {
        let res = await axios.post("http://127.0.0.1:4000/searchUserById", {
          id: userId,
        });
        let post = await axios.post("http://127.0.0.1:4000/getPostByID", {
          id: userId,
        });
        setReUser(res.data.user);
        setPost(post.data.allPosts);

      } catch (e) {
        console.log(e);
      }
    };
    getUserData();
  }, [userId]);

  console.log(reUser);

  return (
    <div id="myProfile" className="w-[100vw] h-[100%] bg-gray-200">
      <div>
        <NavBar />
      </div>
      <div className="flex">
        <div className="left w-[25%] ml-10">
          <div className="w-[80%] m-4 ">
            <div className="bg-white rounded">
              <div className="w-[100%]  py-4">
                <img src={Other} className="w-24 h-24 rounded-[50%] mx-auto" />
              </div>
              <div className="w-[70%] mx-auto">
                <ul className="text-center justify-start">
                  {reUser.name?(
                    <>
                    <li className="pt-1 py-2 flex items-center">
                    <Person2Icon />
                    <p className="pl-2">{reUser.name}</p>
                  </li>
                  <hr />
                  </>):null
                  }
                  {reUser.profession ? (
                    <>
                      <li className="pt-1 py-2 flex items-center">
                        <WorkIcon />
                        <p className="pl-2">{reUser.profession}</p>
                      </li>
                      <hr />
                    </>
                  ) : null}
                  {reUser.uniqueId ? (
                    <>
                      <li className="pt-1 py-2 flex items-center">
                        <WorkIcon />
                        <p className="pl-2">{reUser.uniqueId.toUpperCase()}</p>
                      </li>
                      <hr />
                    </>
                  ) : null}

                  {reUser.domain ? (
                    <>
                      <li className="pt-1 py-2 flex items-center">
                        <WorkIcon />
                        <p className="pl-2">{reUser.domain}</p>
                      </li>
                      <hr />
                    </>
                  ) : null}

                  {reUser.teamSize ? (
                    <>
                      <li className="pt-1 py-2 flex items-center">
                        <WorkIcon />
                        <p className="pl-2">{reUser.teamSize}</p>
                      </li>
                      <hr />
                    </>
                  ) : null}

                  {reUser.website ? (
                    <>
                      <Link to={reUser.website}>
                        <li className="pt-1 py-2 flex items-center">
                          <WorkIcon />
                          <p className="pl-2">Website</p>
                        </li>
                      </Link>
                      <hr />
                    </>
                  ) : null}

                  <li className="pt-1 py-2 flex items-center ">
                    <EmailIcon />
                    <p className="pl-2 text-xs">{reUser.email}</p>
                  </li>
                  <hr />

                  {reUser.regno ? (
                    <>
                      <a href={reUser.website} target="_blank">
                        <li className="pt-1 py-2 flex items-center">
                          <WorkIcon />
                          <p className="pl-2">{reUser.regno}</p>
                        </li>
                      </a>
                      <hr />
                    </>
                  ) : null}
                  {reUser.cv ? (
                    <>
                      <a href={reUser.cv} target="_blank">
                        <li className="pt-1 py-2 flex items-center ">
                          <ArticleIcon />
                          <p className="pl-2">Resume</p>
                        </li>
                      </a>
                      <hr />
                    </>
                  ) : null}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="center w-[50%]">
          {
            posts.length > 0 ? (
              posts.map((m)=>(
                <>
                  <Post post={m} user={reUser}/>
                </>
              ))
            ):
            <h5>No Post Found</h5>
          }
        </div>

        <div className="right w-[15%]">
          <div className="w-[80%] m-4 "></div>
        </div>
      </div>
    </div>
  );
}

export default Profilespd;
