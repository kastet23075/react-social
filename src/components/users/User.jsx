import React from "react";
import defaultUserPhoto from '../../asserts/images/user_default_icon.png';
import style from './Users.module.css'
import {NavLink} from 'react-router-dom';

const User = ({user, key, isFollowingInProgress, follow, unfollow}) => {
    return (
        <div key={key}>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img
                            src={
                                user.photos.small !== null
                                    ? user.photos.small
                                    : defaultUserPhoto
                            }
                            className={style.userPhoto}
                        />
                    </NavLink>
                </div>
                <div>
                    {
                        user.followed
                            ? <button
                                disabled={isFollowingInProgress.some(id => id == user.id)}
                                onClick={() => {
                                    unfollow(user.id);
                                }}>
                                Unfollow
                            </button>
                            : <button
                                disabled={isFollowingInProgress.some(id => id == user.id)}
                                onClick={() => {
                                    follow(user.id);
                                }}>
                                Follow
                            </button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>
                        {user.name}
                    </div>
                    <div>
                        {user.status}
                    </div>
                </span>
                <span>
                    <div>
                        {'user.location.country'}
                    </div>
                    <div>
                        {'user.location.city'}
                    </div>
                </span>
            </span>
        </div>
    );
}

export default User;