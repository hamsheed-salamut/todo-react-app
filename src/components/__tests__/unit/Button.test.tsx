import { render, fireEvent, screen } from '@testing-library/react'
import Button, { Props } from '../../UI/Button'
import '@testing-library/jest-dom/extend-expect';

describe('Button component', () => {
    const defaultProps: Props = {
        children: 'Add Todo',
        onClick: jest.fn(),
        type: 'button',
        style: {},
        iconName: 'fa fa-plus'
    }

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('renders the button with children', () => {
        render(<Button {...defaultProps} />)
        expect(screen.getByRole('button')).toHaveTextContent('Add Todo')
    })

    it('calls the onClick function when clicked', () => {
        render(<Button {...defaultProps} />)
        const button = screen.getByRole('button')
        fireEvent.click(button)
        expect(defaultProps.onClick).toHaveBeenCalled()
    })
})