/* eslint-disable prettier/prettier */
import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

const preparedPosts = () => {
  return postsFromServer.map(post => ({
    ...post,
    user: usersFromServer.find(user => user.id === post.userId),
    comments: commentsFromServer.filter(comment => comment.postId === post.id),
  }));
};

const posts = preparedPosts(postsFromServer);

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);

// const PostList = ({ posts }) => (
//   <div className="PostList">
//     {posts.map(post => (
//       <PostInfo post={post} key={post.id} />
//     ))}
//   </div>
// );

// const PostInfo = ({ post }) => (
//   <div className="PostInfo">
//     <div className="PostInfo__header">
//       <h3 className="PostInfo__title">{post.title}</h3>
//       <p>
//         {'Posted by '}
//         <UserInfo user={post.user} />
//       </p>
//     </div>
//     <p className="PostInfo__body">
//       {post.body}
//     </p>
//     <hr />

//     <CommentList comments={post.comments} />
//   </div>
// );

// const UserInfo = ({user}) => (
//   <a className="UserInfo" href={`mailto:${user.email}`}>
//     {user.name}
//   </a>
// );

// const CommentList = ({ comments }) => (
//   comments.length === 0 ? (
//     <b data-cy="NoCommentsMessage">No comments yet</b>
//   ) : (
//     <div className="CommentList">
//       {comments.map(comment => (
//         <CommentInfo comment={comment} key={comment.id} />
//       ))}
//     </div>
//   )
// );

// const CommentInfo = ({ comment }) => (
//   <div className="CommentInfo">
//     <div className="CommentInfo__title">
//       <strong className="CommentInfo__name">{comment.name}</strong>
//       {' by '}
//       <a
//         className="CommentInfo__email"
//         href={`mailto:${comment.email}`}
//       >
//         {comment.email}
//       </a>
//     </div>

//     <div className="CommentInfo__body">
//      {comment.body}
//     </div>
//   </div>
// );
