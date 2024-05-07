"use client";
import { createTask } from "@/utils/actions";
import React from "react";
import { useFormStatus,useFormState } from "react-dom";

const initialState:any={
  message:null,
}
const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-primary join-item"
      disabled={pending}
    >
      
      {pending ? "crating...":"Create Task"}
    </button>
  );
};
const TodoForm = () => {
  const [state,formAction]=useFormState(createTask,initialState)
  return (
    <form action={createTask}>
      {state.message ? <p className="mb-2">{state.message}</p> : null}
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
