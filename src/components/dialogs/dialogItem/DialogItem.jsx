import React from 'react';
import style from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/dialogItem/' + props.userId;
    return (
        <div className={style.dialog + ' ' + style.active}>
            <span>
                <img src={props.avatar}  />
            </span>
            <NavLink to={path}>{props.userName}</NavLink>
        </div>
    );
}

export default DialogItem;