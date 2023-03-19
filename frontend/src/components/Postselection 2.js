import React, { useState } from 'react'
import { Button, Form , FormField } from 'semantic-ui-react';
// import './postselectionstylesheet.css';
function Postselection(){
    const[filename,setfilename] = useState("");
    const[link,setLink] = useState("hi");
    const[posttype,setposttype] = useState("Achievements");
    const handleSubmit  = () =>
    {
        console.log(link,posttype)
    }
    const handlefilename = (e) =>{
        e.preventDefault();
        let x = (filename.split("\\").at(-1))
        setLink(x);
        handleSubmit();
    }
    const changefilename = () =>{
        // setfilename(filename => filename.split("\\").at(-1));
    }
    const handlechange = (e) =>{
        setfilename(e.target.value);
        // changefilename();
    }
    const handleclick = (e) =>{
        setLink(filename.split("\\").at(-1));
        document.getElementById("clicktoconfirm").innerHTML="Authentication Complete!";
        // changefilename();
    }
  return (
    <div id="postselection">
    <Form onSubmit={handlefilename}>
       <Form.Field>
        <label for="post" id ="postlabel">Type of post</label>
        <select id="posttype" name="posttype"  
        value={posttype} onChange = {(e) => {setposttype(e.target.value)}}>
        <option value="Updates">Achievements</option>
        <option value="Hiring">Hiring</option>
        </select>
        </Form.Field>

      <FormField>
       <input type = "file"
       value={filename}
       id = "filechoose"
       onChange={
        handlechange
      }
       name = 'filename'
       ></input>
      </FormField>

      <FormField>
      <input type = 'submit' id="submitpost"></input>
      </FormField>
    </Form>
    <div id ="clicktoconfirm">
    <span onClick={handleclick} id = "clickhere"
     className="pl-[2px] cursor-pointer text-slate-400 hover:underline "
     >Click here</span>
    <span> to confirm you are not a robot</span>
    </div>
  </div>
  )
}

export default Postselection
