import { FC, useState } from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import Todo from './models/todo'

import Header from './components/UI/Header'
import TodoList from './components/Todos/TodoList'

import './App.css'

const queryClient = new QueryClient()

const App: FC = () => {

  const [todoList, setTodoList] = useState<Todo[]>([
    {
      id: 1,
      done: false,
      name: "work",
      priority: "low",
      due_date: new Date().toDateString(),
      text: "Learn Typescript"
    },
    {
      id: 2,
      done: false,
      name: "work",
      priority: "low",
      due_date: new Date().toDateString(),
      text: "Learn React"
    },
    {
      id: 3,
      done: true,
      name: "work",
      priority: "high",
      due_date: new Date().toDateString(),
      text: "Learn JavaScript"
    },
  ])

  return (
    <div className="app">
        <Header/>
        <QueryClientProvider client={queryClient}>
        <TodoList />
        </QueryClientProvider>

    </div>
  )
}

export default App
