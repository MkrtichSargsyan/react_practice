import classes from './Posts.module.css';

function Post(props) {
  return (
    <div className={classes.item}>
      <div>
        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" alt="im" />
        {props.message}
      </div>
      <span>like</span>
      {props.likesCount}
    </div>
  );
}

export default Post;
