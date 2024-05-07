"use server";

import prisma from "./db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import z, { string } from "zod";

export const createTask = async (formData: any) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  const content = formData.get("content");
  
  const Task = z.object({
    content: z.string().min(5),
  });

  try {
    Task.parse({
      content,
    });
    await prisma.task.create({
      data: {
        content,
      },
    });

    revalidatePath("todo-list");

    return { message: "Success !" };
  } catch (error) {
    if (error instanceof Error) {
      return { message: error.message || "Error !" };
    } else {
      return { message: "Unknown error occurred !" };
    }
  }
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

export const getTask = async (id: string) => {
  return await prisma.task.findUnique({
    where: {
      id,
    },
  });
};

export const editTask = async (formData: any) => {
  const id = formData.get("id");
  const content = formData.get("content");
  const completed = formData.get("completed");

  await prisma.task.update({
    where: {
      id,
    },
    data: {
      content,
      completed: completed === "on",
    },
  });

  redirect("/todo-list");
};
