import React,{useState} from 'react'
import P from './Post.jpeg'
import axios from 'axios'
import {Link} from "react-router-dom"

function Post({post,user}) {

  const [apply, setApply] = useState(false)
  const [image, setImage] = useState("")

  const handlemodal = () =>{
    
  }

  const handleApplication = async (e) =>{
    e.preventDefault()
    console.log(user.cv)
    const res = await axios.post(`http://127.0.0.1:4000/addApplicant`, {
        link: user.cv,
        name: user.name,
        id: post._id
      });
      document.getElementById("Button").disabled = true;
    setApply(true)
  }
  
  return (
    <div className='post w-[95%] my-4'>

    <div id="applicant" className='w-[100%] h-[100%] bg-white'>
    {console.log(post, "post")}
        {post.applicants?(
        post.applicants.map((a)=>(
            <>
            <ul>
              <a href={`${a.link} `} target="_blank" ><li>{a.name}</li></a>
            </ul>
          </>
        ))):(
          <h3>NO Applicants</h3>
        )
        }
    </div>


  <div class="bg-white h-[85vh] rounded-xl shadow-lg">
    <div>
      <h1 class="text-2xl mt-2 ml-4 font-bold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100">{post.name}</h1>
      <p class="ml-4 mt-1 mb-2 text-gray-700 hover:underline cursor-pointer">#{post.type}</p>
    </div>
    <img class="w-full h-[63vh] cursor-pointer"  src={post.link}  alt="Loading" />
    <div class="flex p-4 justify-between">
      <div class="flex items-center space-x-2">
      {post.type =="Hiring"?(
        <button id="Button" className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full disabled:opacity-70`} onClick={handleApplication}  >Apply</button>
      ):
      (null)
}      </div>
      <div class="flex space-x-2">
        <div class="flex space-x-1 items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-gray-600 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </span>
          { post.type == "Hiring"?  
          <span onClick={handlemodal}>Applicants</span>
          :(null)
          }
        </div>
        <div class="flex space-x-1 items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-red-500 hover:text-red-400 transition duration-100 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
          </span>
          <span>20</span>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Post