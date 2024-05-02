"use server";

import prisma from "./db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { Router } from "next/router";

export const createTask = async (formData: any) => {
  const content = formData.get("content");

  await prisma.task.create({
    data: {
      content,
    },
  });

  revalidatePath("todo-list");
};

export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const deleteTask = async (formData: any) => {
  const id = formData.get("id");
  await prisma.task.delete({
    where: {
      id,
    },
  });

  revalidatePath("/todo-list");
};

export const getTask=async(id:string)=>{
    return await prisma.task.findUnique({
        where:{
            id
        }
    })
};

export const editTask=async(formData:any)=>{
    const id=formData.get("id")
    const content=formData.get('content');
    const completed=formData.get('completed');

    await prisma.task.update({
        where:{
            id
        },
        data:{
            content,
            completed:completed==="on",
        },
        
    });

    redirect('/todo-list');

   
};