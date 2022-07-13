import {useState, React} from 'react'
import PostPage from '../Pages/PostPage'
import PostCard from './PostCard'


function PostList({posts, setSelectedPost, onClickPost}) {


  // const displayedPosts = (postObj) => {
  //   if (postObj) return {
  //     <PostPage/>
  //   }

  // }
     
  return (
    
          posts.map((post) => {
            return (
              <PostCard
                key={post.id}
                // {...post}
                post={post}
                setSelectedPost={setSelectedPost}
                onClickPost={onClickPost}
              />
            );
          })
  )
}

export default PostList

