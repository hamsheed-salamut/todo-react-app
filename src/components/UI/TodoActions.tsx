import classes from './CssModules/TodoActions.module.css'

const TodoActions: React.FC<{ onRemoveTodo: () => void }> = (props) => {
  return (
    <div className={classes["todo-actions"]}>
        <i className="far fa-edit"></i>
        <i className="far fa-trash-alt" onClick={props.onRemoveTodo}></i>
    </div>
  )
}

export default TodoActions