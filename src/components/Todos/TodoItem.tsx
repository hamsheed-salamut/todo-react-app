import classes from './TodoItem.module.css'
import TodoActions from '../UI/TodoActions'
import Todo from '../../models/todo'

const TodoItem: React.FC<{ item: Todo; onRemoveTodo: (id: number) => void; onEditTodo:(todo: Todo) => void }> = (props) => {
  return (
    <div className={classes.todo}>
        <div className={classes["todo-tag"]}>
            {props.item.name}
        </div>
        <p className={classes["todo-description"]}>
            {props.item.description}
        </p>
    <TodoActions onRemoveTodo={props.onRemoveTodo.bind(null, props.item.id)} onEditTodo={props.onEditTodo.bind(null, props.item)}/>
</div>
  )
}

export default TodoItem