import classes from './TodoItem.module.css'
import TodoActions from '../UI/TodoActions'
import Todo from '../../models/todo'

const TodoItem: React.FC<{ item: Todo; onRemoveTodo: (id: number) => void }> = (props) => {
  return (
    <div className={classes.todo}>
        <div className={classes["todo-tag"]}>
            {props.item.name}
        </div>
        <p className={classes["todo-description"]}>
            {props.item.text}
        </p>
    <TodoActions onRemoveTodo={props.onRemoveTodo.bind(null, props.item.id)}/>
</div>
  )
}

export default TodoItem