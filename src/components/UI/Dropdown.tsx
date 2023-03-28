import classes from './CssModules/Dropdown.module.css'

interface DropdownProps {
  dropdownName: string;
  options: string[];
  value: string;
  onChangeHandler: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({dropdownName, options, value, onChangeHandler}) => {
  return (
    <div className={classes["form-group"]}>
        <label htmlFor="todo-">{dropdownName}</label>
        <select id="todo-" name={dropdownName} value={value} onChange={(e) => onChangeHandler(e.target.value)}>
           {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
           ))}
        </select>
    </div>
  )
}

export default Dropdown