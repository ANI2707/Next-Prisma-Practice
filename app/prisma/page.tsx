import React from 'react'

import prisma from '@/utils/db';

const getAllTasks = async()=>{
  //Add task
  await prisma.task.create({
    data:{
      content:"buy car"
    }
  })


  //Update Task
  // await prisma.task.update({
  //   where:{
  //     id:"8a4d9cf4-ef0f-4010-b681-9c3512273b9c",
  //   },
  //   data:{
  //     content:"fsdgaw",
  //   },
  // })
  
  //Delete task
  // await prisma.task.delete({
  //   where:{id: "3175b639-7795-45cd-8178-edf33cb16dab"},
  // })

  //Get Tasks
  const allTasks=await prisma.task.findMany();
  return allTasks;

}

const Prisma = async() => {

  const tasks=await getAllTasks();

  return (
    <div className='text-7xl'>
      Tasks
      {tasks?.map((task)=>(
        <h1 key={task.id} className='text-sm py-2'>{task.content}</h1>
      ))}
    </div>
  )
}

export default Prisma