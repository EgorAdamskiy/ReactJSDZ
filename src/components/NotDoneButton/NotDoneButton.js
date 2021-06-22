
import classnames from "classnames/bind"
import React from 'react';
import styles from "./NotDoneButton.module.scss"
import { connect } from "react-redux";

const cx = classnames.bind(styles)


const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

function notdonebutton({onClick, theme}) {
  return(
            <button className={cx('notdone', `notdone-theme-${theme}`)} onClick={onClick}>
              Не Сделано!
            </button>)
  }
  const NotDoneButton = connect(mapStateToProps)(notdonebutton);
  export default NotDoneButton;