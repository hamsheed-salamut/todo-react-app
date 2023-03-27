import { useQuery, useMutation, useQueryClient } from 'react-query'

import classes from './TodoList.module.css'
import Card from '../UI/Card'
import TodoItem from './TodoItem'
import Todo from '../../models/todo'


const TodoList: React.FC = () => {
    const queryClient = useQueryClient()

    const fetchTodos = async () => {
        const response = await fetch("http://localhost:5000/todos")
        const data = await response.json()

        return data.map(({ id, name, text }: { id: number; name: string; text: string;}) => ({ id, name, text })) as Todo[];
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

    if (status === "loading") {
        return <div>Loading...</div>
    }

    if (status === "error") {
        return <div>Error...</div>
    }

    return (
        <Card>
            <section className={classes["todos-container"]} data-cards>
                {data && data.map((todo: Todo, key: number) => (
                    <TodoItem key={key} item={todo} onRemoveTodo={removeTodoHandler}/>
                ))}
            </section>
        </Card>
    )
}

export default TodoList