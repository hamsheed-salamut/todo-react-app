import { FC, useState } from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import {Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Todo from './models/todo'

import Header from './components/UI/Header'
import TodoList from './components/Todos/TodoList'
import NewTodo from './components/AddTodo/NewTodo'
import EditTodo from './components/EditTodo/EditTodo'
import './App.css'

const queryClient = new QueryClient()

const App: FC = () => {

  return (
    <Router>
      <Routes>
        <Route path="/add-todo" element={<NewTodo/>}/>
        <Route path="/edit-todo" element={<EditTodo/>}/>
        <Route path="/" element={
          <div className="app">
            <Header/>
              <QueryClientProvider client={queryClient}>
              <TodoList />
            </QueryClientProvider>
          </div>
        }/>
      </Routes>
    </Router>
  )
}

export default App
