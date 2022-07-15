import React, {useState, useEffect} from 'react'
import PostList from '../Components/PostList'



function HomePage({ onClickPost, handleAddPost, posts, onDeletePost, user}) {

    
  return (
    <div>
        <PostList 
        posts= {posts}
        user={user}
        handleAddPost= {handleAddPost}
        onDeletePost= {onDeletePost}
        onClickPost={onClickPost}
        />        
    </div>
  )
}

export default HomePage