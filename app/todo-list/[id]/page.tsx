import EditForm from '@/components/EditForm';
import { getTask } from '@/utils/actions';
import Link from 'next/link';
import React from 'react';


interface taskId{
    params:{
        id:string
    }
}
const SingleTodoPage:React.FC<taskId> =async ({params}) => {
    const task=await getTask(params.id);

    if (!task) {
      return <div>Loading...</div>;
    }
  return (
    <div className='mb-16'>
        <Link href="/todo-list" className='btn btn-accent'>Back</Link>
        <EditForm task={task}/>
    </div>
  )
}

export default SingleTodoPage