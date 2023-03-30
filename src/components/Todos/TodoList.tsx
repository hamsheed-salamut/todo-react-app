import { useQuery, useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import classes from './TodoList.module.css'
import Card from '../UI/Card'
import TodoItem from './TodoItem'
import Todo from '../../models/todo'


const TodoList: React.FC = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    const fetchTodos = async () => {
        const response = await fetch("http://localhost:5000/todos") // https://www.newline.co/@bespoyasov/how-to-use-fetch-with-typescript--a81ac257
        const data = await response.json()

        return data.map(({ id, name, description, due_date }: { id: number; name: string; description: string; due_date:string;}) => ({ id, name, description, due_date })) as Todo[];
    }

    const {data, status} = useQuery("todos", fetchTodos)

    const deleteTodo = async (todoId: number) => {
        const response = await fetch(`http://localhost:5000/todos/${todoId}`, {
            method: 'DELETE'
        })
        return response.json()
    }

    const {mutate} = useMutation(deleteTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries('todos');
          }
    })

    const removeTodoHandler = (todoId: number): void => {
        mutate(todoId)
    }

    const editTodoHandler = (todo: Todo) : void => {
        navigate("/edit-todo", { state: { todo } });
    }

    if (status === "loading") {
        return <div>Loading...</div>
    }

    if (status === "error") {
        return <div>Error...</div>
    }

    return (
        <Card>
            <h1>Todo List Tracker</h1>
            <section className={classes["todos-container"]} data-cards>
                {data && data.map((todo: Todo, key: number) => (
                    <TodoItem key={key} item={todo} onRemoveTodo={removeTodoHandler} onEditTodo={editTodoHandler}/>
                ))}
            </section>
        </Card>
    )
}

export default TodoList