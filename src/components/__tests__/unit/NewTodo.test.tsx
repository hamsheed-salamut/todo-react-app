import { render, screen, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import '@testing-library/jest-dom';
import { act } from "react-dom/test-utils";
import NewTodo from '../../AddTodo/NewTodo'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('NewTodo', () => {
    
    it('shows an error toast when the description is empty', async () => {
        render(<NewTodo />);
        const nameInput = screen.getByLabelText(/name/i);
        const descInput = screen.getByLabelText(/description/i);
        const addButton = screen.getByRole('button', { name: /add todo/i });
      
        await act(async () => {
          fireEvent.change(nameInput, { target: { value: 'Test' } });
          fireEvent.change(descInput, { target: { value: '' } });
          fireEvent.click(addButton);
        });
      
        const errorMessage = await screen.findByText(/description cannot be empty/i);
        expect(errorMessage).toBeInTheDocument();
      })

      it('navigates to home page when Home button is clicked', () => {
        const navigateMock = jest.fn();
        (useNavigate as jest.Mock).mockReturnValue(navigateMock);
    
        render(<NewTodo />);
    
        const homeButton = screen.getByRole('button', { name: /home/i });
        fireEvent.click(homeButton);
    
        expect(navigateMock).toHaveBeenCalledWith('/');
      })
})