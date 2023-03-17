import React from 'react'
import {useEffect,useState} from 'react'


function Home() {
    const [user, setUser ] = useState("")
    
    console.log(user) 

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")))
        console.log(user)
      }, [])
    
  return (
    <div>
    <h1>Home is here</h1>
    </div>
  )
}

export default Home