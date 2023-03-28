import Button from '../UI/Button'
import TodoForm from '../Form/TodoForm'
import { FormData } from "../../types/FormData"
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useNavigate, useLocation } from "react-router-dom";

const EditTodo: React.FC = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const todo = location.state?.todo;

    const { reset } = useForm()

    const onNavigateHandler = () => {
        navigate('/')
    }

    const onEditTodo = async (data: FormData) => {
        
        if (data.description == '') {
            toast.error('Description cannot be empty', {
                position: toast.POSITION.TOP_RIGHT})
                return
        }

        if (data.name == '') {
            toast.error('Name cannot be empty', {
                position: toast.POSITION.TOP_RIGHT})
                return
        }
     
        const response = await fetch(`http://localhost:5000/todos/${data.id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
         // Reset the form with the updated values
        reset({
            id: data.id,
            name: data.name,
            priority: data.priority,
            due_date: data.due_date,
            description: data.description,
        })

        toast.success('Success. Todo updated', {
            position: toast.POSITION.TOP_RIGHT
        })
        navigate("/")
    }

    
  return (
    <>
        <Button style={{textAlign: "left"}} iconName="fa fa-home" onClick={onNavigateHandler}>Home</Button>
        <h1> Edit Todo </h1>
        <TodoForm buttonActionName="Edit Todo" onSubmit={onEditTodo} reset={reset} todo={todo}></TodoForm>
        <ToastContainer/>
    </>
  )
}

export default EditTodo