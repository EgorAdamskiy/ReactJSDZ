
import classnames from "classnames/bind"

import React from 'react';

import styles from "./AddTask.module.scss"
const cx = classnames.bind(styles)

const AddTask = ({value1, value2, onChange1, onChange2, adding}) => {
  return(
    <div className={cx("C")}>
       <input value={value1} onChange={onChange1} placeholder="Название"></input>
       <input value={value2} onChange={onChange2} placeholder="Описание"></input>
      <button onClick={adding}>Добавить задачу</button>
    </div>
  )
}
export default AddTask;