import React from 'react'
import PostCard from './PostCard'

function PostList({posts, onDeletePost}) {
     
  return (
    
          posts.map((post) => {
            return (
              <PostCard
                key={post.id}
                postList={post}
                onDeletePost={onDeletePost}
                
              />
            );
          })
  )
}

export default PostList

