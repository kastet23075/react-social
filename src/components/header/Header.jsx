import React from 'react';
import style from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={style.header}>
            <img src='https://img-blog.csdnimg.cn/20190409085934419.jpeg?imageView2/5/w/120/h/120' />
            <div className={style.loginBlock} >
                {
                    props.isAuth
                        ? <div>
                            <NavLink to={'/profile'}>{props.login}</NavLink>
                            <div>
                                <button onClick={props.logout}>Logout</button>
                            </div>
                        </div>
                        : <NavLink to={'/login'}>Login</NavLink>
                }

            </div>
        </header>
    );
}

export default Header;