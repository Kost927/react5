import React from 'react'
import {CSSTransition} from 'react-transition-group';
import css from './Alert.module.css'

export default function Alert({name, alert}) {
    return (
        <CSSTransition
      in={alert}
      classNames={css}
      timeout={500}
      unmountOnExit
      >
        <div>
            <span className={css.alert}>This name is already in your contacts</span>
        </div>
        </CSSTransition>
    )
}
