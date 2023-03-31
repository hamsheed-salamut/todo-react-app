import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TodoItem from '../../Todos/TodoItem';
import Todo from '../../../models/todo';
import '@testing-library/jest-dom';

describe('TodoItem', () => {
  const mockTodo: Todo = { id: 1, name: 'Test Todo', description: 'Test Description', priority: "low", due_date: "2023-04-01", done: true };
  const mockOnRemoveTodo = jest.fn();
  const mockOnEditTodo = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  })

  it('displays the todo item name and description', () => {
    render(<TodoItem item={mockTodo} onRemoveTodo={mockOnRemoveTodo} onEditTodo={mockOnEditTodo} />);
    expect(screen.queryByText((content, element) => {
      return element?.textContent === mockTodo.name
    })).toBeInTheDocument();
    expect(screen.queryByText((content, element) => {
      return element?.textContent === mockTodo.description
    })).toBeInTheDocument();
  })

})