import Dropdown from '../UI/Dropdown'
import Button from '../UI/Button'

import classes from './CssModules/Header.module.css'

const Header = () => {
  return (
    <div className={classes.container}>
        <form className={classes["create-todo-form"]} data-new-todo-form>
            <Dropdown/>
            <Dropdown/>
            <Button/>
        </form>
    </div>
  )
}

export default Header