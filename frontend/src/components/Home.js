import React from "react";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Profile from "./dummy.png";
import Avatar from "@mui/material/Avatar";
import Post from "./Post";
import x from "./2.jpg";
import y from "./3.jpg";
import z from "./download.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [user, setUser] = useState("");
  const [peers, setPeer] = useState([]);
  const [developers, setDeveloper] = useState([]);
  const [professors, setProfessor] = useState([]);
  const [alumnis, setAlumni] = useState([]);
  const [companies, setCompany] = useState([]);
  const [startups, setStartup] = useState([]);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    const getData = async () => {
      const peer = await axios.get("http://127.0.0.1:4000/allStudents");
      const developer = await axios.get("http://127.0.0.1:4000/allDevelopers");
      const professor = await axios.get("http://127.0.0.1:4000/allProfessors");
      const alumni = await axios.get("http://127.0.0.1:4000/allAlumnis");
      const company = await axios.get("http://127.0.0.1:4000/allCompanies");
      const startup = await axios.get("http://127.0.0.1:4000/allStartups");

      setPeer(peer.data.allStudents);
      setDeveloper(developer.data.allDevelopers);
      setProfessor(professor.data.allProfessors);
      setAlumni(alumni.data.allAlumnis);
      setCompany(company.data.allCompanies);
      setStartup(startup.data.allStartups);
    };
    getData();
  }, []);

  console.log(peers,developers,alumnis,companies,professors,startups);

  return (
    <div id="home" className="w-[100vw] h-[100%] bg-gray-200">
      <div>
        <NavBar />
      </div>
      <div className="flex">
        <div className="left w-[25%] ml-10">
          <div className="w-[80%] m-4 ">
            <div className="bg-white rounded">
              <ul className="text-center content-center">
                <p className="text-3xl font-serif">Professors</p>
                <hr />
                {professors.length > 0 ? (
                  professors.map((m) => (
                    <>
                    <Link to={`/profile-spd/${m._id}`}>
                      <li className="pt-1 pb-1 flex items-center justify-center">
                        <Avatar
                          alt="Remy Sharp"
                          src={Profile}
                          sx={{ width: 24, height: 24 }}
                        />{" "}
                        <p className="pl-2 mb-2">{m.name}</p>
                        <hr />
                      </li>
                      </Link>
                    </>
                  ))
                ) : (
                  <p className="py-4">No Professors yet</p>
                )}
              </ul>
            </div>
            <div className=" bg-white mt-8 rounded">
              <ul className="text-center content-center">
                <p className="text-3xl font-serif">Students</p>
                <hr />
                {peers.length > 0 ? (
                  peers.map((m) => (
                    <>
                    <Link to={`/profile-spd/${m._id}`}>
                      <li className="pt-1 pb-1 flex items-center justify-center">
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
                  <p className="py-4">No Students yet</p>
                )}
              </ul>
            </div>

            <div className="bg-white mt-8 rounded">
              <ul className="text-center content-center">
                <p className="text-3xl font-serif">Alumni</p>
                <hr />
                {alumnis.length > 0 ? (
                  alumnis.map((m) => (
                    <>
                    <Link to={`/profile-spd/${m._id}`}>
                      <li className="pt-1 pb-1 flex items-center justify-center">
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
                  <p className="py-4">No Alumnis yet</p>
                )}
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
                <hr />
                {companies.length > 0 ? (
                  companies.map((m) => (
                    <>
                    <Link to={`/profile-spd/${m._id}`}>
                      <li className="pt-1 pb-1 flex items-center justify-center">
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
                      <li className="pt-1 pb-1 flex items-center justify-center">
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

            <div className="bg-white mt-8 rounded">
              <ul className="text-center content-center">
                <p className="text-3xl font-serif">Colleges</p>
                <li className="pt-1 pb-1 flex items-center justify-center">
                  <Avatar
                    alt="Remy Sharp"
                    src={z}
                    sx={{ width: 24, height: 24 }}
                  />{" "}
                  <p className="pl-2 mb-2">BITS Pilani</p>
                </li>
                <hr />
                <li className="pt-1 pb-1 flex items-center justify-center">
                  <Avatar
                    alt="Remy Sharp"
                    src={x}
                    sx={{ width: 24, height: 24 }}
                  />{" "}
                  <p className="pl-2 mb-2">NIT Suratkal</p>
                </li>
                <hr />
                <li className="pt-1 flex items-center justify-center">
                  <Avatar
                    alt="Remy Sharp"
                    src={Profile}
                    sx={{ width: 24, height: 24 }}
                  />{" "}
                  <p className="pl-2 mb-2">MIT Jaipur</p>
                </li>
                <hr />
                <li className="pt-1 pb-1 flex items-center justify-center">
                  <Avatar
                    alt="Remy Sharp"
                    src={z}
                    sx={{ width: 24, height: 24 }}
                  />{" "}
                  <p className="pl-2 mb-2">RV College</p>
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

export default Home;
