import { PostInfo } from '../PostInfo/PostInfo';

// PostList component to display a list of posts
export const PostList =  ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <p key={post.id} >
        <PostInfo post={post} />
      </p>
    ))}
  </div>
);
