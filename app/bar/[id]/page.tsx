"use client"

// import Image from 'next/image';
import React, { useEffect, useState } from 'react'

interface Props{
    params:{
        id:string;
    }
    
}
const DrinkPage:React.FC<Props> = async ({params}) => {
    // console.log(params.id);
    const [userInfo,setUserInfo]=useState([]);
    const getUserInfo=async()=>{
        const data=await fetch(`https://api.github.com/users/${params.id}`);
        const user=await data.json();
        
        setUserInfo(user);
        console.log(user);

    }

    useEffect(()=>{
        getUserInfo();
    },[])
    
    
  return (
    <div>
        {/* {userInfo && (
                <>
                    <h1>{userInfo?.name}</h1>
                    <p>{userInfo?.company}</p>
                    <p>{userInfo?.organizations_url}</p>
                    <p>{userInfo?.blog}</p>
                    <p>{userInfo?.public_repos}</p>
                </>
            )} */}
        

        
        
    </div>
  )
}

export default DrinkPage