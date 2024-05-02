import TodoForm from '@/components/TodoForm'
import Todos from '@/components/Todos'

const TodoList = () => {
  return (
    <div className='max-w-2xl'>
      <TodoForm/>
      <Todos/>
    </div>
  )
}

export default TodoList