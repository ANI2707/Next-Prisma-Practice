import { editTask } from "@/utils/actions";
import React from "react";

interface TaskInfo {
  task: {
    id: string;
    content: string;
    completed: boolean;
  };
}
const EditForm: React.FC<TaskInfo>  = ({ task }) => {
  const { id, content, completed } = task;

  return (
    <form action={editTask} className="max-w-lg mt-10 mx-auto">
      <input type="hidden" name="id" value={id} />

      <input
        type="text"
        className="input input-bordered  w-full "
        name="content"
        defaultValue={content}
        required
      />

      <div className="form-control my-4">
        <label className="label cursor-pointer" htmlFor="completed">
          <span className="label-text">Completed</span>
          <input type="checkbox" defaultChecked={completed} id="completed" name="completed" className="checkbox-primary checkbox checkbox-sm " />
        </label>
      </div>

      <button type="submit" className=" my-4 btn btn-primary btn-block btn-sm">
        Update
      </button>
    </form>
  );
};

export default EditForm;
