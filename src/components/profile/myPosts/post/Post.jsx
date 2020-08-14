import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
  return (
    <div className={style.item}>
      <img src={props.avatar} />
      <div>
        {props.message}
      </div>
      <div>
        <span>Like { props.likeCount } </span>
        <span>Follow</span>
      </div>
    </div>
  );
}

export default Post;