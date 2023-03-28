import TodoForm from "../Form/TodoForm"
import { FormData } from "../../types/FormData"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useForm } from 'react-hook-form'
import Button from "../UI/Button"
import { useNavigate } from 'react-router-dom'

const NewTodo: React.FC = () => {
    const { reset } = useForm()
    const navigate  = useNavigate();
    const onAddNewTodo = async (data: FormData) => {
        
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
     
        const response = await fetch("http://localhost:5000/todos", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        reset()
        toast.success('Success. Todo added', {
            position: toast.POSITION.TOP_RIGHT
        })
    }

    const onNavigateHandler = () => {
        navigate('/')
    }

    try {
        return (
            <>
                <Button style={{textAlign: "left"}} iconName="fa fa-home" onClick={onNavigateHandler}>Home</Button>
                <h1> Add new Todo </h1>
                <TodoForm buttonActionName="Add Todo" onSubmit={onAddNewTodo} reset={reset}></TodoForm>
                <ToastContainer/>
            </>
        )
    } catch (error: unknown) {
        if (error instanceof Error) {
            toast.error(`Error: ${error.message}`, {
                position: toast.POSITION.TOP_RIGHT
            })
        }
        return (<></>)
    }
}

export default NewTodo