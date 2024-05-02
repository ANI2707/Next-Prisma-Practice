"use client"

import Users from '@/components/Users';
import React, { useEffect, useState } from 'react'




const Bar = () => {

  const [userData,setUserData]=useState([]);
  
  
  useEffect(()=>{
    getGitUsers();
  },[])
  
  const getGitUsers=async()=>{
    const data=await fetch("https://api.github.com/users");

    if(!data.ok){
      throw new Error("Failed")
    }
    const json= await data.json();
    setUserData(json)

    // console.log(userData);
  }
  return userData.length> 0 && (
    <div>
      <h1 className='text-5xl'>Githib Users</h1>
      <Users userData={userData}/>
    </div>
  )
}

export default Bar