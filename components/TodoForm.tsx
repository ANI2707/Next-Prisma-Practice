"use client";
import { createTask } from "@/utils/actions";
import React, { useEffect } from "react";
import { useFormStatus,useFormState } from "react-dom";
import toast from "react-hot-toast";

const initialState:any={
  message:null,
}
const handleToast =()=>{
  toast.success("Task Added");
}
const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-primary join-item"
      disabled={pending}
      onClick={handleToast}
    >
      
      {pending ? "crating...":"Create Task"}
    </button>
  );
};
const TodoForm = () => {
  const [state,formAction]=useFormState(createTask,initialState);
  useEffect(()=>{
    console.log("toast returned");
    
    if(state.status === 400){
      toast.error(state.message);
    }
    else if(state.message==200){
      toast.success("Task Created");
    }
  },[state])
  return (
    <form action={createTask}>
      {/* {state.message ? <p className="mb-2">{state.message}</p> : null} */}
      <div className="join w-full mb-8">
        <input
          type="text"
          className="input input-bordered join-item w-full "
          placeholder="type here"
          name="content"
          required
        />
      </div>
      <SubmitBtn />
    </form>
  );
};

export default TodoForm;
