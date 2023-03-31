import classes from './TodoItem.module.css'
import TodoActions from '../UI/TodoActions'
import Todo from '../../models/todo'

const TodoItem: React.FC<{ item: Todo; onRemoveTodo: (id: number) => void; onEditTodo:(todo: Todo) => void }> = ({item, onRemoveTodo, onEditTodo}) => {
  return (
    <div className={classes.todo}>
        <div className={classes["todo-tag"]}>
            {item.name}
        </div>
        <p className={classes["todo-description"]}>
            {item.description}
        </p>
        Due Date: {item.due_date}
    <TodoActions onRemoveTodo={() => onRemoveTodo(item.id)} onEditTodo={() => onEditTodo(item)}/>
</div>
  )
}

export default TodoItem