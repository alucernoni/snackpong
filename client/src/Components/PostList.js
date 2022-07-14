import {useState, React} from 'react'
import PostPage from '../Pages/PostPage'
import PostCard from './PostCard'


function PostList({posts, onDeletePost, setSelectedPost, onClickPost, onUpdatePost}) {



     
  return (
    
          posts.map((post) => {
            return (
              <PostCard
                key={post.id}

                // postList={post}
                onDeletePost={onDeletePost}
                post={post}
                setSelectedPost={setSelectedPost}
                onClickPost={onClickPost}
                onUpdatePost={onUpdatePost}
              />
            );
          })
  )
}

export default PostList

