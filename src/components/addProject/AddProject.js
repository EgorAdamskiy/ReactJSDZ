
import classnames from "classnames/bind"

import React from 'react';

import styles from "./AddProject.module.scss"
const cx = classnames.bind(styles)

const AddProject = ({value1, onChange1, adding}) => {
  return(
    <div className={cx("P")}>
       <input value={value1} onChange={onChange1} placeholder="Название"></input>
      <button onClick={adding}>Добавить проект</button>
    </div>
  )
}
export default AddProject;