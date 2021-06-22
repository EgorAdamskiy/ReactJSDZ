
import classnames from "classnames/bind"
import React from 'react';
import styles from "./DoneButton.module.scss"
import { connect } from "react-redux";
const cx = classnames.bind(styles)


const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

function donebutton({onClick, theme}) {
  return(
          <button className={cx('done', `done-theme-${theme}`)} onClick={onClick}>
            Сделано
          </button>
  )}
  const DoneButton = connect(mapStateToProps)(donebutton);
  export default DoneButton;