import { FC } from 'react'
import classes from './CssModules/Button.module.css'

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button' | undefined;
  style?: React.CSSProperties;
  iconName?: string;
}

const Button: FC<Props> = ({children, onClick, type, style, iconName}) => {
  return (
    <button className={classes.btn} style={style} type={type || 'button'} onClick={onClick}>
        <i className={iconName} aria-hidden="true"></i> {children}
    </button>
  )
}

export default Button