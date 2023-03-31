import Dropdown from '../UI/Dropdown'
import Button from '../UI/Button'
import { useNavigate } from 'react-router-dom'

import classes from './CssModules/Header.module.css'

const Header = () => {

  const navigate = useNavigate()

  const onAddTodoHandler = () => {
     navigate('/add-todo')
  }

  return (

    <div className={classes.container}>
        <form className={classes["create-todo-form"]} data-new-todo-form>
            <Button onClick={onAddTodoHandler} iconName="fa fa-plus" type="button">Add Todo</Button>
        </form>
    </div>
  )
}

export default Header