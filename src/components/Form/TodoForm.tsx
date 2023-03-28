import classes from './TodoForm.module.css'
import Button from '../UI/Button'
import Priority from '../../models/Priority'
import { useForm } from 'react-hook-form'
import { FormData, FormSubmitHandler} from '../../types/FormData'
import Todo from '../../models/todo'

interface Props {
    children?: React.ReactNode;
    onSubmit: FormSubmitHandler;
    buttonActionName: string;
    reset: () => void;
    todo?: Todo;
  }
  
  const TodoForm: React.FC<Props> = (props) => {
  const priorityOptions = Object.values(Priority)
  const { register, handleSubmit, reset } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    props.onSubmit(data)
    reset()
  }

  const defaultValues = props.todo ? {
    id: props.todo.id,
    name: props.todo.name,
    priority: props.todo.priority,
    due_date: props.todo.due_date,
    description: props.todo.description
  } : undefined

  return (
    <div className={classes["small-container"]}>
        <form className={classes["todo-form"]} onSubmit={handleSubmit(onSubmit)}>
            <div className={classes["form-group"]}>
                <label htmlFor="todo-name">Name</label>
                <input type="hidden" id="todo-id" {...register('id')} defaultValue={defaultValues?.id}/>
                <input type="text" id="todo-name" {...register('name')} defaultValue={defaultValues?.name}/>
            </div>
            <div className={classes["form-group"]}>
                <label htmlFor="todo-priority">Select Priority</label>
                <select id="todo-priority" {...register('priority')} defaultValue={defaultValues?.priority}>
                {priorityOptions.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
                </select>
            </div>
            <div className={classes["form-group"]}>
                <label htmlFor="todo-due-date">Due Date</label>
                <input type="date" id="todo-due-date" {...register('due_date')}  defaultValue={defaultValues?.due_date ? new Date(defaultValues.due_date).toISOString().substring(0, 10) : ''}/>
            </div>
            <div className={classes["form-group"]}>
                <label htmlFor="todo-description">Description</label>
                <textarea id="todo-description" {...register('description')} defaultValue={defaultValues?.description}></textarea>
            </div>
           <Button type="submit" iconName='fa fa-plus'>{props.buttonActionName}</Button>
        </form>
    </div>
    )
}

export default TodoForm