import React from 'react';
import style from './MyPosts.module.css';
import Post from './post/Post';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import {Textarea} from '../../common/formsControls/FormsControl';

const maxLength10 = maxLengthCreator(10);

const MyPostsForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name={'newPost'}
                    placeholder={'Post message'}
                    validate={[
                        required,
                        maxLength10
                    ]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
}

const MyPostsReduxForm = reduxForm({
    form: 'myPosts'
})(MyPostsForm);

    // Оптимизация компоненты для предотвращения вызова метода 'render()'.
    // Оборачиваем компоненту своего рода "хоком (HOC)" React.memo.
    // Для классовой компоненты используем метод жизненного цикла shouldComponentUpdate()
    // или наследуемся от PureComponent (он уже содержит shouldComponentUpdate()).
const MyPosts = React.memo((props) => {

    let posts = props.posts.map(
        post => <Post
            id={post.id}
            message={post.message}
            likeCount={post.likeCount}
            avatar={post.avatar}
        />
    );

    let onAddPost = (formData) => {
        props.addPost(formData.newPost);
    }

    return (
        <div className={style.myPostsBlock}>
            <h3>my posts</h3>
            <MyPostsReduxForm
                onSubmit={onAddPost}
            />
            <div className={style.posts}>
                {posts}
            </div>
        </div>
    );
});

export default MyPosts;