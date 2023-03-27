import React from 'react'

const Dropdown = () => {
  return (
    <div className="form-control">
        <select data-new-todo-select required>
            <option value="">Filter</option>
            <option value="">Filter2</option>
            <option value="">Filter3</option>
        </select>
    </div>
  )
}

export default Dropdown