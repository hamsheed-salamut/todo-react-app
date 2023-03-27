import classes from './CssModules/Button.module.css'

const Button = () => {
  return (
    <button className={classes.btn}>
        <i className="fa fa-plus" aria-hidden="true"></i> Add Todo
    </button>
  )
}

export default Button