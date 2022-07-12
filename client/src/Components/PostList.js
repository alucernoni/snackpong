import React from 'react'
import PostCard from './PostCard'

function PostList({posts}) {
     
  return (
    
          posts.map((post) => {
            return (
              <PostCard
                key={post.id}
                postList={post}
                
              />
            );
          })
  )
}

export default PostList

