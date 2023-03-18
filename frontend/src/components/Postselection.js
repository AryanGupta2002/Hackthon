import React, { useState } from 'react'
import { Button, Form , FormField } from 'semantic-ui-react';
// import './postselectionstylesheet.css';
function Postselection(){
    const[filename,setfilename] = useState("");
    const[link,setLink] = useState("hi");
    const[checkclick,setcheckclick] = useState(false);
    const[posttype,setposttype] = useState("Achievements");
    const handleSubmit  = () =>
    {
        if(checkclick)
        {
        console.log(link,posttype)
        }
        else
        {
            window.alert("Complete Authentication");
        }
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
        document.getElementById("clicktoconfirm").innerHTML="Authentication Complete ! Submit to post.";
        setcheckclick(true);
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
      <p id ="clicktoconfirm">
    <span onClick={handleclick} id = "clickhere"
     >Click here</span>
    <span> to confirm you are not a robot.</span>
    </p>
    </Form>
    {/* <p id ="clicktoconfirm">
    <span onClick={handleclick} id = "clickhere"
     >Click here</span>
    <span> to confirm you are not a robot</span>
    </p> */}
  </div>
  )
}

export default Postselection
