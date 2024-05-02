"use client"
import React from 'react'

interface props{
    error:Error;
    reset:any;
    
}
const error:React.FC<props> = ({error,reset}) => {
  return (
    <div>
        <p>{error.message}</p>
        <button onClick={reset}>reset</button>
        
        </div>

  )
}

export default error