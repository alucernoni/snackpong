import React from 'react'
import PostCard from './PostCard'

function PostList({posts}) {
   const singlePost= posts.map((post) => {
        <PostCard 
        key= {post.id}
        post= {post}
        />
});     
  return (
    <div>
       {singlePost}
    </div>
  )
}

export default PostList