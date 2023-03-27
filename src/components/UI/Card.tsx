import classes from './CssModules/Card.module.css'

const Card: React.FC<{ children: React.ReactNode}> = ({ children }) => {
  return (
    <main className={classes.main}>{children}</main>
  )
}

export default Card