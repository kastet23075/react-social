import React from "react";
import Paginator from '../common/paginator/Paginator';
import User from './User';

const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {
     return (
        <div>
            <Paginator
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={onPageChanged}
            />
            <div>
                {
                    users.map(u =>
                        <User
                            user={u}
                            key={u.id}
                            isFollowingInProgress={props.isFollowingInProgress}
                            unfollow={props.unfollow}
                            follow={props.follow}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default Users;